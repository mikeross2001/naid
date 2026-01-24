'use client';

import { useState, useEffect } from 'react';
import type {
  FilterState,
  BudgetFilter,
  MealTime,
  VibeTag,
  AreaFilter,
} from '@/types/database';
import {
  BUDGET_OPTIONS,
  MEAL_TIME_OPTIONS,
  VIBE_OPTIONS,
  AREA_OPTIONS,
} from '@/types/database';

interface FilterPanelProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  matchCount: number;
  category: 'restaurant' | 'bar';
}

export function FilterPanel({
  filters,
  onFiltersChange,
  matchCount,
  category,
}: FilterPanelProps) {
  const [vibeShake, setVibeShake] = useState(false);

  const handleBudgetChange = (value: BudgetFilter) => {
    onFiltersChange({ ...filters, budget: value });
  };

  const handleMealTimeChange = (value: MealTime | 'any') => {
    onFiltersChange({ ...filters, mealTime: value });
  };

  const handleVibeToggle = (value: VibeTag) => {
    const currentVibes = filters.vibes;
    if (currentVibes.includes(value)) {
      // Remove vibe
      onFiltersChange({
        ...filters,
        vibes: currentVibes.filter((v) => v !== value),
      });
    } else {
      // Add vibe (max 2)
      if (currentVibes.length >= 2) {
        setVibeShake(true);
        setTimeout(() => setVibeShake(false), 500);
        return;
      }
      onFiltersChange({
        ...filters,
        vibes: [...currentVibes, value],
      });
    }
  };

  const handleAreaChange = (value: AreaFilter) => {
    onFiltersChange({ ...filters, area: value });
  };

  return (
    <div className="space-y-5">
      {/* Budget Selector */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">💰</span>
          <span className="text-sm font-medium text-gray-700">Budget</span>
        </div>
        <div className="flex gap-2">
          {BUDGET_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => handleBudgetChange(option.value)}
              className={`
                flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all duration-200
                ${
                  filters.budget === option.value
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Meal Time Selector */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">⏰</span>
          <span className="text-sm font-medium text-gray-700">When?</span>
          {filters.mealTime !== 'any' && (
            <span className="text-xs text-purple-500 bg-purple-50 px-2 py-0.5 rounded-full">
              auto-detected
            </span>
          )}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {MEAL_TIME_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => handleMealTimeChange(option.value)}
              className={`
                flex-shrink-0 py-2 px-3 rounded-xl text-sm font-medium transition-all duration-200
                ${
                  filters.mealTime === option.value
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              <span className="mr-1">{option.emoji}</span>
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Vibe Selector */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">✨</span>
          <span className="text-sm font-medium text-gray-700">Vibe?</span>
          <span className="text-xs text-gray-400">(pick up to 2)</span>
        </div>
        <div
          className={`
            flex gap-2 overflow-x-auto pb-1 -mx-1 px-1
            ${vibeShake ? 'animate-shake' : ''}
          `}
        >
          {VIBE_OPTIONS.map((option) => {
            const isSelected = filters.vibes.includes(option.value);
            return (
              <button
                key={option.value}
                onClick={() => handleVibeToggle(option.value)}
                className={`
                  flex-shrink-0 py-2 px-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                <span className="mr-1">{option.emoji}</span>
                {option.label}
              </button>
            );
          })}
        </div>
        {vibeShake && (
          <p className="text-xs text-pink-500 mt-1 animate-fade-in">
            Max 2 vibes! Remove one first.
          </p>
        )}
      </div>

      {/* Area Selector */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">📍</span>
          <span className="text-sm font-medium text-gray-700">Where?</span>
        </div>
        <select
          value={filters.area}
          onChange={(e) => handleAreaChange(e.target.value as AreaFilter)}
          className="w-full py-2.5 px-4 rounded-xl bg-gray-100 text-gray-700 font-medium border-0 focus:ring-2 focus:ring-purple-400 transition-all"
        >
          {AREA_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.emoji} {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Match Count */}
      <div className="pt-2 border-t border-gray-100">
        <div
          className={`
            text-center py-2 rounded-xl transition-all duration-300
            ${
              matchCount === 0
                ? 'bg-red-50 text-red-600'
                : 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700'
            }
          `}
        >
          {matchCount === 0 ? (
            <span className="text-sm">
              No spots match your vibe 😢
              <br />
              <span className="text-xs text-red-500">Try loosening filters</span>
            </span>
          ) : (
            <span className="text-sm font-medium">
              <span className="text-lg">{matchCount}</span>{' '}
              {category === 'bar' ? 'bars' : 'spots'} match
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
