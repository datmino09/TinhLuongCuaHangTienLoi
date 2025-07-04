import React, { useEffect, useState } from "react";
import { ShiftRegistration } from "../../components/Employee/ShiftRegistration";
import { ControlRegistrationModal } from "../../components/Employee/ControlRegistrationModal";
import { fetchCaLam } from "../../api/apiCaLam";
import { getAllLLVMonthlyByNhanVien, dangKyCa, huyDangKyCa } from "../../api/apiLichLamViec";
import { format } from "date-fns";
export const EmployeeShiftRegistrationPage = () => {
  const currentDate = new Date();
  const ngay = currentDate.toISOString().slice(0, 10);
  const user = JSON.parse(localStorage.getItem("user"));
  const [lichLamViec, setLichLamViec] = useState([]);
  const [shifts, setShifts] = useState([]);
  const [showControl, setShowControl] = useState(false);
  const [selectedLLV, setSelectedLLV] = useState(null);
  const fetchAllCaLam = async () => {
    try {
      const data = await fetchCaLam();
      setShifts(data);
    } catch (error) {
      console.error("Lỗi khi lấy ca làm:", error);
    }
  };
  const fetchLichLamViecMonthlyByNhanVien = async () => {
    try {
      const response = await getAllLLVMonthlyByNhanVien(user.MaTK, ngay);
      setLichLamViec(response);
    } catch (error) {
      console.error("Lỗi khi lấy lịch làm việc của nhân viên này", error);
    }
  };
  useEffect(() => {
    fetchAllCaLam();
    fetchLichLamViecMonthlyByNhanVien();
  }, []);
  const handleDangKyCa = async (MaCa, day) => {
    const NgayLam = format(day, "yyyy-MM-dd");
    const formData = {
      MaTK: user.MaTK,
      MaCaLam: MaCa,
      NgayLam: NgayLam,
    };
    const response = await dangKyCa(formData);
    if (!response.success) {
      alert("Đăng ký ca làm thất bại");
      return;
    }
    alert("Đăng ký ca thành công");
    fetchLichLamViecMonthlyByNhanVien();
  };
  const handleHuyDangKy = async () =>{
    const response = await huyDangKyCa(selectedLLV.MaLLV);
    if(!response.success){
        alert(response.message || "Hủy đăng ký ca thất bạt");
        setShowControl(false);
        return;
    }
    alert("Hủy ca thành công");
    setShowControl(false);
    fetchLichLamViecMonthlyByNhanVien();
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Đăng ký ca</h1>
        {
          <ShiftRegistration
            currentDate={currentDate}
            lichLamViec={lichLamViec}
            shifts={shifts}
            onDangKyCa={handleDangKyCa}
            setShowControl={setShowControl}
            setSelectedLLV={setSelectedLLV}
          />
        }
        {showControl && (
          <ControlRegistrationModal
            lichLamViec={selectedLLV}
            setShowControl={setShowControl}
            onHuyCa={handleHuyDangKy}
          />
        )}
      </div>
    </div>
  );
};
