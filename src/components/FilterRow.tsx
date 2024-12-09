// src/components/FilterRow.tsx
import React from "react";

interface FilterRowProps {
  totalResults: number;
  onSortChange: (value: string) => void;
  onViewChange: (view: "grid" | "list") => void;
  onFilterClick: () => void;
}

const FilterRow: React.FC<FilterRowProps> = ({ totalResults, onSortChange, onViewChange, onFilterClick }) => {
  return (
    <div className="container mx-auto flex justify-between items-center py-4 px-8 bg-white">
      <div className="text-gray-500">
        <span>Showing all {totalResults} results</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="text-gray-500 flex items-center">
          <span className="mr-2">Views:</span>
          <div className="flex space-x-2">
            <button
              onClick={() => onViewChange("grid")}
              className="w-8 h-8 flex justify-center items-center bg-gray-100 rounded"
            >
              <i className="fas fa-th"></i>
            </button>
            <button
              onClick={() => onViewChange("list")}
              className="w-8 h-8 flex justify-center items-center bg-gray-100 rounded"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => onSortChange("popularity")}
            className="text-gray-500 border border-gray-300 rounded px-4 py-2"
          >
            Popularity <i className="fas fa-chevron-down"></i>
          </button>
        </div>

        <button
          onClick={onFilterClick}
          className="bg-[#23A6F0] text-white px-6 py-2 rounded-lg hover:bg-[#1a8bd1]"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterRow;