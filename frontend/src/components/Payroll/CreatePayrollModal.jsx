import { useEffect, useState } from "react";

export function CreatePayrollModal({ setShowCreatePayroll, onSave }) {
  const [form, setForm] = useState({
    Thang: "",
    Nam: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.Thang || !form.Nam) {
      alert("Vui lòng chọn tháng và năm!");
      return;
    }

    onSave(form);
  };

  // Fixed: Use MaTK instead of id for consistency

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="relative w-full max-w-4xl mx-auto">
        <form
          className="bg-white p-6 rounded shadow-lg relative z-10 max-h-[90vh] overflow-y-auto"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl font-bold mb-4 text-center">
            Tạo bảng lương mới
          </h2>

          {/* Period Selection */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Chọn kì hạn</label>
            <div className="flex gap-4">
              {/* Select Month */}
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-1">
                  Tháng
                </label>
                <select
                  name="Thang"
                  value={form.Thang}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                >
                  <option value="">-- Chọn tháng --</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                    <option key={m} value={m}>
                      Tháng {m}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Year */}
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-1">Năm</label>
                <select
                  name="Nam"
                  value={form.Nam}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                >
                  <option value="">-- Chọn năm --</option>
                  {Array.from(
                    { length: 2 },
                    (_, i) => new Date().getFullYear() - 1 + i
                  ).map((y) => (
                    <option key={y} value={y}>
                      Năm {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-between">
            <button
              type="button"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded transition-colors"
              onClick={() => setShowCreatePayroll(false)}
            >
              Thoát
            </button>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Tạo bảng lương
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
