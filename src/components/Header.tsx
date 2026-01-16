import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">Simplilearn</div>
            <span className="ml-2 text-sm text-gray-500">Dallas Round Table</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#skills" className="text-gray-700 hover:text-primary">Skills</a>
            <a href="#speakers" className="text-gray-700 hover:text-primary">Speakers</a>
            <a href="#vision" className="text-gray-700 hover:text-primary">Vision</a>
            <a href="#register" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Register Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;