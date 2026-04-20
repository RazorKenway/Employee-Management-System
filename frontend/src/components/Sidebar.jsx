import React from "react";

const Sidebar = ({ activeView, setActiveView }) => {
  return (
    <div className="w-64 bg-blue-900 text-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">EMS</h1>
        <nav className="space-y-4">
          <button
            onClick={() => setActiveView("add")}
            className={`w-full px-4 py-3 rounded-lg text-left font-semibold transition ${
              activeView === "add" ? "bg-blue-600 text-white" : "hover:bg-blue-800"
            }`}
          >
            ➕ Add Employee
          </button>
          <button
            onClick={() => setActiveView("view")}
            className={`w-full px-4 py-3 rounded-lg text-left font-semibold transition ${
              activeView === "view" ? "bg-blue-600 text-white" : "hover:bg-blue-800"
            }`}
          >
            👥 List Employees
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
