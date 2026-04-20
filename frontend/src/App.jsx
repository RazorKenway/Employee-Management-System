import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeService from "./services/employeeService";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState("");
  const [activeView, setActiveView] = useState("add"); // 'add' or 'view'

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
      setActiveView("view");
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
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Employee Management System</h2>

          {message && <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">{message}</div>}

          {/* Add Employee View */}
          {activeView === "add" && (
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-6">Add New Employee</h3>
              <EmployeeForm onSubmit={handleAddEmployee} />
            </div>
          )}

          {/* View Employees View */}
          {activeView === "view" && (
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-6">All Employees ({employees.length})</h3>
              <EmployeeList employees={employees} onDelete={handleDeleteEmployee} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
