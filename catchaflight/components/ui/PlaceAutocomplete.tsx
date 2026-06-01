"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import type { PlaceSuggestion } from "@/lib/types";
import type { LucideIcon } from "lucide-react";

interface PlaceAutocompleteProps {
  label: string;
  placeholder: string;
  icon: LucideIcon;
  value: PlaceSuggestion | null;
  onChange: (place: PlaceSuggestion | null) => void;
  rightElement?: React.ReactNode;
}

export default function PlaceAutocomplete({
  label,
  placeholder,
  icon: Icon,
  value,
  onChange,
  rightElement,
}: PlaceAutocompleteProps) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const displayValue = value
    ? `${value.city_name || value.name}${value.iata_code ? ` (${value.iata_code})` : ""}`
    : query;

  const fetchSuggestions = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(
        `/api/places?query=${encodeURIComponent(searchQuery)}`
      );
      const data = await res.json();
      setSuggestions(data.data || []);
      setIsOpen(true);
    } catch {
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (value) onChange(null);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestions(val), 300);
  };

  const handleSelect = (place: PlaceSuggestion) => {
    onChange(place);
    setQuery("");
    setIsOpen(false);
    setSuggestions([]);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <div className="flex items-center bg-surface border border-border rounded-xl px-4 sm:px-5 py-4 sm:py-5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-text-secondary mr-3 sm:mr-4 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <label className="block text-[11px] font-medium text-text-secondary uppercase tracking-wider">
            {label}
          </label>
          <input
            type="text"
            value={displayValue}
            onChange={handleInputChange}
            onFocus={() => {
              if (value) {
                setQuery(displayValue);
                onChange(null);
              }
              if (suggestions.length > 0) setIsOpen(true);
            }}
            placeholder={placeholder}
            className="w-full bg-transparent text-text-primary text-base sm:text-lg font-medium outline-none placeholder:text-text-secondary/50"
          />
        </div>
        {isLoading && (
          <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin flex-shrink-0" />
        )}
        {rightElement}
      </div>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-border rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] max-h-64 overflow-y-auto">
          {suggestions.map((place) => (
            <button
              key={place.id}
              onClick={() => handleSelect(place)}
              className="w-full text-left px-4 py-3 hover:bg-surface transition-colors flex items-center gap-3 cursor-pointer first:rounded-t-xl last:rounded-b-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                {place.iata_code || "—"}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-text-primary truncate">
                  {place.name}
                </p>
                <p className="text-xs text-text-secondary truncate">
                  {place.city_name && place.city_name !== place.name
                    ? `${place.city_name}, `
                    : ""}
                  {place.iata_country_code}
                  {place.type === "airport" ? " · Airport" : " · City"}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
