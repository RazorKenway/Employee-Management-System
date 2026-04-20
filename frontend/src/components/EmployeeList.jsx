import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ employees, onDelete }) => {
  if (employees.length === 0) {
    return (
      <div className="bg-white rounded shadow p-8 text-center">
        <p className="text-gray-600">No employees added yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {employees.map((employee) => (
        <EmployeeCard key={employee._id} employee={employee} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default EmployeeList;
