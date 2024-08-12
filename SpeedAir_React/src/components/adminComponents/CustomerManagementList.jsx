import React, { useState } from "react";
import "../../assets/styles/adminStyles/InventoryManagementList.css";

const UserManagementList = () => {
  const [inventoryItems, setInventoryItems] = useState([
    {
      id: 1,
      name: "Item 1",
      email: "item1@example.com",
      password: "password1",
      address: "1, ram street, annur, chennai",
      type: "Type A",
      companyName: "Company A",
      role: "Admin",
    },
    {
      id: 2,
      name: "Item 2",
      email: "item2@example.com",
      password: "password2",
      address: "1, ram street, annur, chennai",
      type: "Type B",
      companyName: "Company B",
      role: "User",
    },
    {
      id: 3,
      name: "Item 3",
      email: "item3@example.com",
      password: "password3",
      address: "1, ram street, annur, chennai",
      type: "Type C",
      companyName: "Company C",
      role: "Manager",
    },
  ]);

  const [isEditing, setIsEditing] = useState(null);
  const [newItem, setNewItem] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    address: "",
    type: "",
    companyName: "",
    role: "",
  });

  const handleAdd = () => {
    setNewItem({
      id: "", // Generate a new ID
      name: "",
      email: "",
      password: "",
      address: "",
      type: "",
      companyName: "",
      role: "",
    });
    setIsEditing("add"); // Indicate adding a new item
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
      setInventoryItems((prevItems) => [...prevItems, newItem]);
    } else {
      setInventoryItems((prevItems) =>
        prevItems.map((item) => (item.id === newItem.id ? newItem : item))
      );
    }
    setNewItem({
      id: "",
      name: "",
      email: "",
      password: "",
      address: "",
      type: "",
      companyName: "",
      role: "",
    });
    setIsEditing(null);
  };

  const handleDiscard = () => {
    setNewItem({
      id: "",
      name: "",
      email: "",
      password: "",
      address: "",
      type: "",
      companyName: "",
      role: "",
    });
    setIsEditing(null);
  };

  const handleEdit = (item) => {
    setNewItem(item);
    setIsEditing("edit"); // Indicate editing an existing item
  };

  const handleDelete = (id) => {
    setInventoryItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  const sortedItems =
    isEditing === "add" || isEditing === "edit"
      ? [newItem, ...inventoryItems]
      : inventoryItems;

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
              <th>Address</th>
              <th>Type</th>
              <th>CompanyName</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {(isEditing === "add" || isEditing === "edit") && (
              <tr>
                <td><input 
                    name="id"
                    value={newItem.id}
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
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
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
                    onClick={() => handleDelete(item.id)}
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
