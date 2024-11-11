import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/styles/adminStyles/EmployeeManagementList.css";

const EmployeeManagementList = () => {
  const [employees, setEmployees] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    type: "",
    companyName: "",
    role: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editEmployeeId, setEditEmployeeId] = useState(null);

  const API_URL = "http://localhost:8080/api/employees";

  // Set the JWT token in headers
  const authHeader = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
    },
  };

  useEffect(() => {
    fetchEmployees();
  } );
  console.log(authHeader);

  // Fetch all employees
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(API_URL, authHeader);
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // Add a new employee
  const addEmployee = async () => {
    try {
      await axios.post(API_URL, formData, authHeader);
      fetchEmployees();
      setShowPopup(false);
      setFormData({
        name: "",
        email: "",
        password: "",
        contact: "",
        address: "",
        type: "",
        companyName: "",
        role: "",
      });
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  // Update an existing employee
  const updateEmployee = async (id) => {
    try {
      await axios.put(`${API_URL}/${id}`, formData, authHeader);
      fetchEmployees();
      setShowPopup(false);
      setEditMode(false);
      setFormData({
        name: "",
        email: "",
        password: "",
        contact: "",
        address: "",
        type: "",
        companyName: "",
        role: "",
      });
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  // Delete an employee
  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`, authHeader);
      fetchEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Open the popup for adding/editing an employee
  const openPopup = (employee = null) => {
    if (employee) {
      setFormData(employee);
      setEditMode(true);
      setEditEmployeeId(employee.id);
    } else {
      setFormData({
        name: "",
        email: "",
        password: "",
        contact: "",
        address: "",
        type: "",
        companyName: "",
        role: "",
      });
      setEditMode(false);
    }
    setShowPopup(true);
  };

  // Close the popup
  const closePopup = () => {
    setShowPopup(false);
    setEditMode(false);
    setFormData({
      name: "",
      email: "",
      password: "",
      contact: "",
      address: "",
      type: "",
      companyName: "",
      role: "",
    });
  };

  return (
    <section className="admin-section">
      <div className="admin-inventry-container">
        <h1 className="admin-inventry-header">Employee Management</h1>
        <div className="admin-inventry-addButton-div">
          <button onClick={() => openPopup()}>Add Employee</button>
        </div>
        <table className="admin-inventry-table">
          <thead>
            <tr>
              <th>EmployeeId</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Type</th>
              <th>CompanyName</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.password}</td>
                <td>{employee.contact}</td>
                <td>{employee.address}</td>
                <td>{employee.type}</td>
                <td>{employee.companyName}</td>
                <td>{employee.role}</td>
                <td>
                  <button onClick={() => openPopup(employee)}>Edit</button>
                  <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup form */}
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>{editMode ? "Edit Employee" : "Add Employee"}</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editMode ? updateEmployee(editEmployeeId) : addEmployee();
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="type"
                placeholder="Type"
                value={formData.type}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={formData.role}
                onChange={handleInputChange}
                required
              />
              <button type="submit">{editMode ? "Update" : "Add"} Employee</button>
              <button type="button" onClick={closePopup}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default EmployeeManagementList;
