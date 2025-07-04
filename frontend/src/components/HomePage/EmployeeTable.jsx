import React, { useState } from "react";
export const EmployeeTable = ({
  employees,
  selectedEmployee,
  setSelectedEmployee,
  setShowDetail,
}) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState({});

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newSelectedRows = {};
    if (newSelectAll) {
      employees.forEach((employee) => {
        newSelectedRows[employee.MaTK] = true;
      });
    }
    setSelectedRows(newSelectedRows);
  };

  const handleSelectRow = (employeeId) => {
    const newSelectedRows = {
      ...selectedRows,
    };
    newSelectedRows[employeeId] = !newSelectedRows[employeeId];
    setSelectedRows(newSelectedRows);
    // Check if all rows are selected
    const allSelected = employees.every(
      (employee) => newSelectedRows[employee.MaTK]
    );
    setSelectAll(allSelected);
  };

  const handleDetail = (employeeId) => {
    const employee = employees.find((emp) => emp.MaTK === employeeId);

    if (selectedEmployee && selectedEmployee.MaTK === employeeId) {
      setSelectedEmployee(null);
      setShowDetail(false);
    } else if (employee) {
      setSelectedEmployee(employee);
      setShowDetail(true);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Avatar
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
              >
                Mã nhân viên
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Tên nhân viên
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Giới tính
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Số điện thoại
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Số CMND/CCCD
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Chức vụ
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees && employees.length > 0 ? (
              employees.map((employee) => (
                <React.Fragment key={employee.MaTK}>
                  <tr
                    className={`${
                      selectedRows[employee.MaTK]
                        ? "bg-blue-50"
                        : "hover:bg-gray-50"
                    } cursor-pointer`}
                    onClick={() => handleDetail(employee.MaTK)}
                  >
                    <td
                      className="px-6 py-4 whitespace-nowrap"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        checked={!!selectedRows[employee.MaTK]}
                        onChange={() => handleSelectRow(employee.MaTK)}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        {employee.Avatar ? (
                          <img
                            src={`${process.env.REACT_APP_BACKEND_URL}/${employee.Avatar}`}
                            alt={employee.HoTen}
                            className="h-10 w-10 rounded-full"
                          />
                        ) : (
                          <span className="text-gray-500">
                            {employee.HoTen.charAt(0)}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                      {employee.MaNhanVien}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {employee.HoTen}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {employee.GioiTinh===true?"Nam":"Nữ"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.SoDienThoai}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.CCCD}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.MaVaiTro === 1 ? "Quản lý" : "Nhân viên"}
                    </td>
                  </tr>
                  
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-8 text-gray-500">
                  Không có nhân viên nào để hiển thị.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
