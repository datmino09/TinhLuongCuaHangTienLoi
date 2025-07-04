import React, { useEffect, useState } from "react";
import { SearchIcon, FileIcon } from "lucide-react";
import { ChevronDownIcon, PlusIcon } from "./icons";
export function Header({ onSearch, setShowCreatePayroll }) {
  const [searchTerm, setSearchTerm] = useState("");
  // Debounce search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm, onSearch]);
  return (
    <div className="bg-white shadow-sm p-4">
      <div className="flex items-center justify-between">
        <div className="relative w-96">
          {/* Search theo mã bảng lương hoặc theo tên nhân viên */}
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
            onClick={() => setShowCreatePayroll(true)}
          >
            <PlusIcon size={18} className="mr-1" />
            <span>Bảng tính lương</span>
          </button>
        </div>
      </div>
    </div>
  );
}
