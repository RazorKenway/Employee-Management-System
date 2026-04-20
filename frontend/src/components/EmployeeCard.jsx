import React from "react";
import { Mail, Briefcase, Trash2, AlertCircle } from "lucide-react";

const EmployeeCard = ({ employee, onDelete }) => {
  const handleDelete = () => {
    const confirmed = window.confirm(`Are you sure you want to delete ${employee.name}? This action cannot be undone.`);
    if (confirmed) {
      onDelete(employee._id);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden hover:-translate-y-1">
      {/* Header with gradient */}
      <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>

      <div className="p-6">
        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
            {employee.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900">{employee.name}</h3>
            <p className="text-sm text-slate-600">{employee.role}</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 mb-6 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Mail size={16} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Email</p>
              <p className="text-sm text-blue-600 break-all hover:text-blue-700">{employee.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Briefcase size={16} className="text-purple-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Position</p>
              <p className="text-sm text-slate-700 font-medium">{employee.role}</p>
            </div>
          </div>
        </div>

        {/* Delete Button */}
        <button
          onClick={handleDelete}
          className="w-full px-4 py-2.5 bg-red-50 text-red-600 font-semibold rounded-lg hover:bg-red-100 transition-all duration-200 flex items-center justify-center gap-2 border border-red-100"
        >
          <Trash2 size={18} />
          <span>Remove Employee</span>
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
