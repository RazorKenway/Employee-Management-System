import React, { useState, useEffect } from "react";
import { AlertCircle, CheckCircle, X } from "lucide-react";
import Sidebar from "./components/Sidebar";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeService from "./services/employeeService";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'
  const [activeView, setActiveView] = useState("add"); // 'add' or 'view'

  useEffect(() => {
    loadEmployees();
  }, []);

  // Auto-dismiss message after 4 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const loadEmployees = async () => {
    try {
      const data = await EmployeeService.getAllEmployees();
      setEmployees(data);
    } catch (error) {
      setMessage("Error loading employees: " + error.message);
      setMessageType("error");
    }
  };

  const handleAddEmployee = async (employeeData) => {
    try {
      await EmployeeService.createEmployee(employeeData);
      setMessage("Employee added successfully!");
      setMessageType("success");
      loadEmployees();
      setActiveView("view");
    } catch (error) {
      setMessage("Error adding employee: " + error.message);
      setMessageType("error");
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await EmployeeService.deleteEmployee(id);
      setMessage("Employee deleted successfully!");
      setMessageType("success");
      loadEmployees();
    } catch (error) {
      setMessage("Error deleting employee: " + error.message);
      setMessageType("error");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Professional Header */}
        <div className="bg-white border-b border-slate-200 shadow-sm">
          <div className="px-8 py-6 max-w-7xl">
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-600 mt-1">Manage your employees efficiently</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Alert Messages */}
            {message && (
              <div
                className={`mb-6 p-4 rounded-xl border flex items-start gap-4 animate-in fade-in slide-in-from-top-2 ${
                  messageType === "success" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                }`}
              >
                {messageType === "success" ? (
                  <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className={messageType === "success" ? "text-green-800 font-semibold" : "text-red-800 font-semibold"}>{message}</p>
                </div>
                <button
                  onClick={() => setMessage("")}
                  className={`p-1 rounded hover:bg-white transition ${messageType === "success" ? "text-green-600" : "text-red-600"}`}
                >
                  <X size={20} />
                </button>
              </div>
            )}

            {/* Add Employee View */}
            {activeView === "add" && (
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Add New Employee</h2>
                <EmployeeForm onSubmit={handleAddEmployee} />
              </div>
            )}

            {/* View Employees View */}
            {activeView === "view" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Employee Directory</h2>
                <EmployeeList employees={employees} onDelete={handleDeleteEmployee} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
