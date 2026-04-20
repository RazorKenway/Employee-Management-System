import React from "react";

const EmployeeCard = ({ employee, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-200">
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
            {employee.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{employee.name}</h3>
            <p className="text-sm text-gray-500">{employee.role}</p>
          </div>
        </div>
      </div>

      <div className="mb-4 space-y-2">
        <p className="text-sm">
          <span className="text-gray-600">Email:</span>
          <br />
          <span className="text-blue-600 break-all">{employee.email}</span>
        </p>
      </div>

      <button
        onClick={() => onDelete(employee._id)}
        className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
};

export default EmployeeCard;
