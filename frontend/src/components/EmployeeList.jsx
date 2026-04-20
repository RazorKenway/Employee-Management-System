import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ employees, onDelete }) => {
  if (employees.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">👥</div>
        <p className="text-gray-500 text-lg">No employees added yet</p>
        <p className="text-gray-400">Click "Add Employee" in the sidebar to get started</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {employees.map((employee) => (
        <EmployeeCard key={employee._id} employee={employee} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default EmployeeList;
