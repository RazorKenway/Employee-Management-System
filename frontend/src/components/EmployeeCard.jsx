import React from "react";

const EmployeeCard = ({ employee, onDelete }) => {
  return (
    <div className="bg-white rounded shadow p-4 border border-gray-200">
      <div>
        <h3 className="text-lg font-semibold mb-2">{employee.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{employee.email}</p>
        <p className="text-gray-600 text-sm mb-4">Role: {employee.role}</p>
        <button onClick={() => onDelete(employee._id)} className="w-full px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
