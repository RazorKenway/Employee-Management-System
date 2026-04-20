import React, { useState } from "react";
import { User, Mail, Briefcase, AlertCircle, CheckCircle, Send, Loader } from "lucide-react";

const EmployeeForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !role) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    try {
      await onSubmit({ name, email, role });
      // Only clear fields on successful submission
      setName("");
      setEmail("");
      setRole("");
    } catch (err) {
      // Error is handled by parent component, but we still handle it locally
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 font-semibold">{error}</p>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
          <div className="p-1.5 bg-blue-100 rounded-lg">
            <User size={16} className="text-blue-600" />
          </div>
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          placeholder="Enter employee name"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm disabled:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-600"
        />
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
          <div className="p-1.5 bg-blue-100 rounded-lg">
            <Mail size={16} className="text-blue-600" />
          </div>
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          placeholder="employee@example.com"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm disabled:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-600"
        />
      </div>

      {/* Role Field */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
          <div className="p-1.5 bg-blue-100 rounded-lg">
            <Briefcase size={16} className="text-blue-600" />
          </div>
          Job Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          disabled={loading}
          placeholder="e.g., Software Engineer, Manager"
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm disabled:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-600"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl mt-8 disabled:from-blue-400 disabled:to-blue-400 disabled:cursor-not-allowed disabled:opacity-75"
      >
        {loading ? (
          <>
            <Loader size={20} className="animate-spin" />
            <span>Adding Employee...</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>Add Employee</span>
          </>
        )}
      </button>
    </form>
  );
};

export default EmployeeForm;
