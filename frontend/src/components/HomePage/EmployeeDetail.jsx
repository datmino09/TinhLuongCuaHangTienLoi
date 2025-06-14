import React from "react";
import { CalendarIcon, DollarSignIcon, CoinsIcon } from "lucide-react";
import {
  updateNgungLamViec,
  updateTiepTucLamViec,
} from "../../api/apiTaiKhoan";
export const EmployeeDetail = ({
  employee,
  activeTab,
  setActiveTab,
  onEmployeeStatusChange,
  setShowModalUpdate
}) => {
  const handleDungLam = async (MaTK) => {
    const confirmed = window.confirm(
      "Bạn có chắc chắn cho nhân viên này ngừng làm việc?"
    );
    if (!confirmed) return;
    try {
      await updateNgungLamViec(MaTK);
      onEmployeeStatusChange();
    } catch (error) {
      console.error("Lỗi:", error);
      alert("Lỗi: " + (error.message || "Lỗi không xác định"));
    }
  };
  const handleTiepTucLam = async (MaTK) => {
    const confirmed = window.confirm(
      "Bạn có chắc chắn cho nhân viên này đã trở lại làm việc?"
    );
    if (!confirmed) return;
    try {
      await updateTiepTucLamViec(MaTK);
      onEmployeeStatusChange();
    } catch (error) {
      console.error("Lỗi:", error);
      alert("Lỗi: " + (error.message || "Lỗi không xác định"));
    }
  };
  const handleGetConfirmationCode = () => {
    console.log("Get confirmation code clicked");
    // Implementation would go here
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex border-b">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "info"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("info")}
        >
          <div className="flex items-center">
            <div className="h-4 w-4 mr-2" />
            <span>Thông tin</span>
          </div>
        </button>
        {/* <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "schedule"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("schedule")}
        >
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-2" />
            <span>Lịch làm việc</span>
          </div>
        </button> */}
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "salary"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("salary")}
        >
          <div className="flex items-center">
            <DollarSignIcon className="h-4 w-4 mr-2" />
            <span>Thiết lập lương</span>
          </div>
        </button>
        {/* <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "debt"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("debt")}
        >
          <div className="flex items-center">
            <CoinsIcon className="h-4 w-4 mr-2" />
            <span>Nợ và tạm ứng</span>
          </div>
        </button> */}
      </div>
      {/* Tab content */}
      <div className="p-4">
        {activeTab === "info" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="bg-gray-100 p-4 flex items-center justify-center h-52 rounded-lg">
                <div className="h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center">
                  {employee.Avatar ? (
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}/${employee.Avatar}`}
                      alt={employee.HoTen}
                      className="h-40 w-40 rounded-full"
                    />
                  ) : (
                    <span className="text-gray-500 text-4xl">
                      {employee.HoTen.charAt(0)}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Mã nhân viên:</p>
                  <p className="font-medium">{employee.MaNhanVien}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Ngày bắt đầu làm việc:
                  </p>
                  <p className="font-medium">{employee.startDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tên nhân viên:</p>
                  <p className="font-medium">{employee.HoTen}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Chi nhánh trả lương:</p>
                  <p className="font-medium">{employee.payrollBranch}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mã chấm công:</p>
                  <p className="font-medium">{employee.timekeepingCode}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tài khoản Ngân hàng:</p>
                  <p className="font-medium">
                    {employee.STK} - {employee.TenNganHang}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ngày sinh:</p>
                  <p className="font-medium">{employee.NgaySinh}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Số điện thoại:</p>
                  <p className="font-medium">{employee.SoDienThoai}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Giới tính:</p>
                  <p className="font-medium">
                    {employee.GioiTinh ? "Nam" : "Nữ"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email:</p>
                  <p className="font-medium">{employee.Email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Số CMND/CCCD:</p>
                  <p className="font-medium">{employee.CCCD}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Địa chỉ:</p>
                  <p className="font-medium">{employee.DiaChi}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Chức danh:</p>
                  <p className="font-medium">
                    {employee.MaVaiTro_vai_tro.Quyen === "NhanVien"
                      ? `Nhân Viên - ${employee?.LoaiNV}`
                      : "Quản Lý"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "schedule" && (
          <div className="p-4 text-gray-500">
            Thông tin lịch làm việc sẽ hiển thị ở đây.
          </div>
        )}
        {activeTab === "salary" && (
          <div className="p-4 text-gray-500">
            Thông tin thiết lập lương sẽ hiển thị ở đây.
          </div>
        )}
        {activeTab === "debt" && (
          <div className="p-4 text-gray-500">
            Thông tin nợ và tạm ứng sẽ hiển thị ở đây.
          </div>
        )}
      </div>
      {/* Action buttons */}
      <div className="flex justify-end space-x-2 p-4 border-t">
        <button
          onClick={handleGetConfirmationCode}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Lấy mã xác nhận
        </button>
        <button
          onClick={()=>{
            setShowModalUpdate(true);
          }}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
        >
          Cập nhật
        </button>
        {employee.TrangThai === "Đang làm" ? (
          <button
            onClick={() => handleDungLam(employee.MaTK)}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
          >
            Ngừng làm việc
          </button>
        ) : (
          <button
            onClick={() => handleTiepTucLam(employee.MaTK)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
          >
            Tiếp tục công việc
          </button>
        )}
      </div>
    </div>
  );
};
