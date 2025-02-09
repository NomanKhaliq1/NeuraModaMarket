import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface FilterRowProps {
  totalResults: number;
  onSortChange: (value: string) => void;
  onViewChange: (view: "grid" | "list") => void;
  onFilterClick: () => void;
}

const FilterRow: React.FC<FilterRowProps> = ({ totalResults, onSortChange, onViewChange, onFilterClick }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="container mx-auto flex items-center justify-between py-4 px-8 bg-white border-b border-gray-200">
      {/* Total Results - Dynamic */}
      <div className="text-gray-500 text-[14px] font-medium">
        <span>Showing all {totalResults} results</span>
      </div>

      {/* Centered View Options */}
      <div className="flex items-center justify-center space-x-4 flex-1">
        <span className="text-gray-500 text-[14px] font-medium">Views:</span>
        <button
          onClick={() => onViewChange("grid")}
          className="w-8 h-8 flex justify-center items-center bg-gray-100 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-200 transition"
        >
          <FontAwesomeIcon icon={faTh} />
        </button>
        <button
          onClick={() => onViewChange("list")}
          className="w-8 h-8 flex justify-center items-center bg-gray-100 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-200 transition"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Sorting & Filter */}
      <div className="flex items-center space-x-4">
        {/* Sorting Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="text-gray-600 text-[14px] font-medium border border-gray-300 bg-white rounded-lg px-4 py-2 flex items-center shadow-sm hover:bg-gray-100 transition"
          >
            Sort By <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              <ul className="py-2 text-[14px]">
                <li
                  onClick={() => {
                    onSortChange("popularity");
                    setDropdownOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Popularity
                </li>
                <li
                  onClick={() => {
                    onSortChange("price");
                    setDropdownOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Price: Low to High
                </li>
                <li
                  onClick={() => {
                    onSortChange("price_desc");
                    setDropdownOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Price: High to Low
                </li>
                <li
                  onClick={() => {
                    onSortChange("rating");
                    setDropdownOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Customer Ratings
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Filter Button */}
        <button
          onClick={onFilterClick}
          className="bg-[#23A6F0] text-white px-6 py-2 rounded-lg text-[14px] font-medium shadow-md hover:bg-[#1a8bd1] transition"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterRow;
