import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/styles/adminStyles/InventoryManagementList.css";

// Create an Axios instance with JWT authentication
const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMUBnbWFpbC5jb20iLCJpYXQiOjE3MjM0OTY0OTYsImV4cCI6MTcyMzU4Mjg5Nn0.h6Zb90kY0NG-VzSS1h31l7o_g_wYOIHUxJURSm0jBdM` // Adjust token storage mechanism as needed
  }
});

const UserManagementList = () => {
  const [userList, setUserList] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [newItem, setNewItem] = useState({
    userId: "",
    name: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    type: "",
    companyName: "",
    role: "",
  });

  useEffect(() => {
    // Fetch data from the API
    api.get('/users')
      .then(response => {
        setUserList(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleAdd = () => {
    setNewItem({
      userId: "",
      name: "",
      email: "",
      password: "",
      contact: "",
      address: "",
      type: "",
      companyName: "",
      role: "",
    });
    setIsEditing("add");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (isEditing === "add") {
      // Add new item to the userList
      api.post('/users', newItem)
        .then(response => {
          setUserList((prevItems) => [...prevItems, response.data]);
        })
        .catch(error => {
          console.error("There was an error saving the new item!", error);
        });
    } else {
      // Update existing item
      api.put(`/users/${newItem.userId}`, newItem)
        .then(response => {
          setUserList((prevItems) =>
            prevItems.map((item) => (item.userId === newItem.userId ? response.data : item))
          );
        })
        .catch(error => {
          console.error("There was an error updating the item!", error);
        });
    }
    setNewItem({
      userId: "",
      name: "",
      email: "",
      password: "",
      contact: "",
      address: "",
      type: "",
      companyName: "",
      role: "",
    });
    setIsEditing(null);
  };

  const handleDiscard = () => {
    setNewItem({
      userId: "",
      name: "",
      email: "",
      password: "",
      contact: "",
      address: "",
      type: "",
      companyName: "",
      role: "",
    });
    setIsEditing(null);
  };

  const handleEdit = (item) => {
    setNewItem(item);
    setIsEditing("edit");
  };

  const handleDelete = (userId) => {
    api.delete(`/users/${userId}`)
      .then(() => {
        setUserList((prevItems) =>
          prevItems.filter((item) => item.userId !== userId)
        );
      })
      .catch(error => {
        console.error("There was an error deleting the item!", error);
      });
  };

  const sortedItems =
    isEditing === "add" || isEditing === "edit"
      ? [newItem, ...userList]
      : userList;

  return (
    <section className="admin-section">
      <div className="admin-inventry-container">
        <h1 className="admin-inventry-header">User Management</h1>
        <div className="admin-inventry-addButton-div">
          <button className="admin-inventry-addButton" onClick={handleAdd}>
            Add
          </button>
        </div>
        <table className="admin-inventry-table">
          <thead>
            <tr>
              <th>UserId</th>
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
            {(isEditing === "add" || isEditing === "edit") && (
              <tr key={newItem.userId || 'new-item'}>
                <td>
                  <input 
                    name="userId"
                    value={newItem.userId}
                    readOnly={isEditing === "add"} // Make userId readOnly when adding
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="name"
                    value={newItem.name}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="email"
                    value={newItem.email}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="password"
                    value={newItem.password}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="contact"
                    value={newItem.contact}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="address"
                    value={newItem.address}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="type"
                    value={newItem.type}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="companyName"
                    value={newItem.companyName}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="role"
                    value={newItem.role}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <button
                    className="admin-inventry-saveButton"
                    style={{ border: "2px solid #33ff5c" }}
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="admin-inventry-discardButton"
                    style={{ border: "2px solid #ff1a1a" }}
                    onClick={handleDiscard}
                  >
                    Discard
                  </button>
                </td>
              </tr>
            )}
            {sortedItems.map((item) => (
              <tr key={item.userId}>
                <td>{item.userId}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.contact}</td>
                <td>{item.address}</td>
                <td>{item.type}</td>
                <td>{item.companyName}</td>
                <td>{item.role}</td>
                <td>
                  <i
                    className="fa-solid fa-pen-to-square admin-inventry-editButton"
                    onClick={() => handleEdit(item)}
                  />
                  <button
                    className="admin-inventry-deleteButton"
                    onClick={() => handleDelete(item.userId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserManagementList;
