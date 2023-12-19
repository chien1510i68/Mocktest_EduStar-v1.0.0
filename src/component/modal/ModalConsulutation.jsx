// src/components/Model.js
import React, { useState } from 'react';

const Model = ({ model, onClose }) => {
  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Gửi dữ liệu lên server
      await fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('Dữ liệu đã được gửi thành công.');
    } catch (error) {
      console.error('Lỗi khi gửi dữ liệu:', error);
    }
  };

  const handleClose = async () => {
    // Gọi hàm xử lý khi người dùng đóng modal và gửi dữ liệu
    await handleSubmit();

    // Gọi hàm xử lý khi người dùng đóng modal
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8">
        <h2 className="text-xl font-bold mb-4">{model}</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="input1" className="block text-sm font-medium text-gray-600">
              Input 1
            </label>
            <input
              type="text"
              id="input1"
              name="input1"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={handleChange}
            />
          </div>
          {/* Thêm các input khác tương tự */}
        </form>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 bg-gray-600 text-white rounded-md"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
