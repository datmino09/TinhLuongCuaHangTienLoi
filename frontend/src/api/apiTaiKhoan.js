import axios from "axios";

export const fetchAllNhanVien = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/taikhoan/getAllNhanVienVaQuanLy`
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi lấy user:", error);
    return { success: false, message: "Lỗi kết nối đến server" };
  }
};
export const getAllQuanLyByChiNhanh = async (MaCN) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/taikhoan/getAllQuanLyByChiNhanh/${MaCN}`
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi lấy user:", error);
    return { success: false, message: "Lỗi kết nối đến server" };
  }
};
export const searchEmployee = async (keyword) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/taikhoan/search`,
      {
        params: { keyword },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi tìm kiếm nhân viên:", error);
    return { success: false, message: "Lỗi kết nối đến server" };
  }
};

// export const createDangKyCaByMaNS = async (MaNS) => {
//   try {
//     const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/dangkyca/${MaNS}`);
//     return response.data;
//   } catch (error) {
//     console.error("Lỗi lấy Ca làm:", error);
//     return { success: false, message: "Lỗi kết nối đến server" };
//   }
// };

export const login = async (MaNhanVien, Password) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/taikhoan/login`,
      {
        MaNhanVien,
        Password,
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    if (error.response?.status === 404) {
      return { success: false, message: "Mã nhân viên không tồn tại" };
    } else if (error.response?.status === 401) {
      return { success: false, message: "Mật khẩu không đúng" };
    }
    console.error("Lỗi đăng nhập:", error);
    return { success: false, message: "Lỗi kết nối đến server" };
  }
};
export async function createEmployee(formData) {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/taikhoan`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return { success: true, data: res.data };
  } catch (error) {
    if (error.response.status === 409) {
      return { sucesss: false, message: error.response.data.message };
    }
    console.error("Lỗi thêm nhân viên:", error);
    return { sucesss: false, message: "Lỗi kết nối server" };
  }
}

export async function updateEmployee(formData) {
  try {
    const maTK = formData.get("MaTK");
    const res = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/taikhoan/${maTK}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return { success: true, data: res.data };
  } catch (error) {
    if (error.response.status === 409) {
      return { sucesss: false, message: error.response.data.message };
    }
    console.error("Lỗi update nhân viên:", error);
    return { sucesss: false, message: "Lỗi kết nối server" };
  }
}

export const changePassword = async (MaTK, Password, NewPassword) => {
  try {
    await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/taikhoan/changePass/${MaTK}`,
      {
        Password,
        NewPassword,
      }
    );
    return { success: true };
  } catch (error) {
    if (error.response.status === 401 || error.response.status === 404) {
      return { sucesss: false, message: error.response.data.message };
    }
    console.error("Lỗi đăng nhập:", error);
  }
};
export const updateNgungLamViec = async (MaTK) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/taikhoan/updateNgungLamViec`,
      {
        MaTK,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi :", error);
    return { success: false, message: "Lỗi kết nối đến server" };
  }
};
export const updateTiepTucLamViec = async (MaTK) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/taikhoan/updateTiepTucLamViec`,
      {
        MaTK,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi :", error);
    return { success: false, message: "Lỗi kết nối đến server" };
  }
};

export const refreshUserInfo = async (MaTK) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/taikhoan/${MaTK}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Lỗi refresh thông tin user:", error);
    return { success: false, message: "Lỗi kết nối đến server" };
  }
};
