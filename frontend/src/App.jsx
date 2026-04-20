import React, { useState, useEffect } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeService from "./services/employeeService";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState("");

  // Load employees when component mounts
  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const data = await EmployeeService.getAllEmployees();
      setEmployees(data);
    } catch (error) {
      setMessage("Error loading employees: " + error.message);
    }
  };

  const handleAddEmployee = async (employeeData) => {
    try {
      await EmployeeService.createEmployee(employeeData);
      setMessage("Employee added successfully!");
      loadEmployees();
    } catch (error) {
      setMessage("Error adding employee: " + error.message);
    }
  };

  const handleDeleteEmployee = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await EmployeeService.deleteEmployee(id);
        setMessage("Employee deleted successfully!");
        loadEmployees();
      } catch (error) {
        setMessage("Error deleting employee: " + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Employee Management System</h1>

        {message && <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded">{message}</div>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <EmployeeForm onSubmit={handleAddEmployee} />
          </div>
          <div className="md:col-span-2">
            <EmployeeList employees={employees} onDelete={handleDeleteEmployee} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
