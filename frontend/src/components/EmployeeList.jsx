import React from "react";
import { Users, FileText } from "lucide-react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ employees, onDelete }) => {
  if (employees.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
          <FileText size={40} className="text-slate-400" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">No Employees Yet</h3>
        <p className="text-slate-600 mb-1 text-lg">Get started by adding your first employee</p>
        <p className="text-slate-500 text-sm">Click the "Add Employee" button to create a new employee record</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-500 text-white rounded-lg">
            <Users size={24} />
          </div>
          <div>
            <p className="text-slate-600 font-semibold">Total Employees</p>
            <p className="text-3xl font-bold text-slate-900">{employees.length}</p>
          </div>
        </div>
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <EmployeeCard key={employee._id} employee={employee} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
