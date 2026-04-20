import React from "react";
import { Users, UserPlus, Building2 } from "lucide-react";

const Sidebar = ({ activeView, setActiveView }) => {
  return (
    <div className="w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl border-r border-slate-700 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
            <Building2 size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">EMS</h1>
            <p className="text-xs text-slate-400">Employee Management</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-6 space-y-3 flex-1">
        <button
          onClick={() => setActiveView("add")}
          className={`w-full px-4 py-3 rounded-lg text-left font-semibold transition-all duration-200 flex items-center gap-3 ${
            activeView === "add"
              ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
              : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
          }`}
        >
          <UserPlus size={20} />
          <span>Add Employee</span>
        </button>
        <button
          onClick={() => setActiveView("view")}
          className={`w-full px-4 py-3 rounded-lg text-left font-semibold transition-all duration-200 flex items-center gap-3 ${
            activeView === "view"
              ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
              : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
          }`}
        >
          <Users size={20} />
          <span>List Employees</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
