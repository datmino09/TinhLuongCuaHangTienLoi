import axios from "axios";

export const getAllBangLuong = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/bangluong`
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi lấy Bảng lương:", error);
    return { success: false, message: "Lỗi kết nối đến server" };
  }
};

export const createBangLuong = async (formData) => {
  const { MaTK, Thang, Nam } = formData;

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/bangluong`,
      { MaTK, Thang, Nam }
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi lấy Bảng lương:", error);
    return { success: false, message: "Lỗi kết nối đến server" };
  }
};

export const getKyLuong = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/bangluong/getKyLuong`
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi lấy Bảng lương:", error);
    return { success: false, message: "Lỗi kết nối đến server" };
  }
};
