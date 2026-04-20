const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

class EmployeeService {
    static async getAllEmployees() {
        const response = await fetch(`${API_BASE_URL}/employees`);
        if (!response.ok) {
            throw new Error('Failed to fetch employees');
        }
        const data = await response.json();
        return data.data || [];
    }

    static async createEmployee(employeeData) {
        const response = await fetch(`${API_BASE_URL}/employees`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employeeData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create employee');
        }

        const data = await response.json();
        return data.data;
    }

    static async deleteEmployee(id) {
        const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to delete employee');
        }

        return true;
    }
}

export default EmployeeService;
