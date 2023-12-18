import React, { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="App">
      <header className="bg-gray-200 p-4">
        <nav>
          <ul className="flex">
            <li><a href="#" onClick={openModal} className="text-blue-500">Menu Item 1</a></li>
            {/* Add more menu items as needed */}
          </ul>
        </nav>
      </header>

      {isModalOpen &&
        <div className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal-content bg-white p-8">
            <span className="close text-gray-700 text-2xl cursor-pointer" onClick={closeModal}>&times;</span>
            <p>This is the modal content.</p>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
