import React, { useState } from "react";
import "../../assets/styles/adminStyles/InventoryManagementList.css";

const InventoryManagementList = () => {
  const [inventoryItems, setInventoryItems] = useState([
    {
      id: 1,
      weight: "25",
      origin: "1, ram street, annur, chennai",
      destination: "1, ram street, annur, coimbatore",
      current: "1, ram street, annur, chennai",
      status: "Stored",
    },
    {
      id: 2,
      weight: "25",
      origin: "1, ram street, annur, chennai",
      destination: "1, ram street, annur, coimbatore",
      current: "1, ram street, annur, chennai",
      status: "Stored",
    },
    {
      id: 3,
      weight: "25",
      origin: "1, ram street, annur, chennai",
      destination: "1, ram street, annur, coimbatore",
      current: "1, ram street, annur, chennai",
      status: "Stored",
    },
  ]);

  const [isEditing, setIsEditing] = useState(null);
  const [newItem, setNewItem] = useState({
    id: "",
    weight: "",
    origin: "",
    destination: "",
    current: "",
    status: "",
  });

  const handleAdd = () => {
    setNewItem({
      id: "",
      weight: "",
      origin: "",
      destination: "",
      current: "",
      status: "",
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
      weight: "",
      origin: "",
      destination: "",
      current: "",
      status: "",
    });
    setIsEditing(null);
  };

  const handleDiscard = () => {
    setNewItem({
      id: "",
      weight: "",
      origin: "",
      destination: "",
      current: "",
      status: "",
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
        <h1 className="admin-inventry-header">Inventory Management List</h1>
        <div className="admin-inventry-addButton-div">
        <button className="admin-inventry-addButton" onClick={handleAdd}>
          Add
        </button></div>
        <table className="admin-inventry-table">
          <thead>
            <tr>
              <th>ShipmentId</th>
              <th>Weight</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>CurrentLocation</th>
              <th>Status</th>
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
                    name="weight"
                    value={newItem.weight}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="origin"
                    value={newItem.origin}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="destination"
                    value={newItem.destination}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="current"
                    value={newItem.current}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="status"
                    value={newItem.status}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <button
                    className="admin-inventry-saveButton"
                    style={{border:"2px solid #33ff5c"}}
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="admin-inventry-discardButton"
                    style={{border:"2px solid #ff1a1a"}}
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
                <td>{item.weight}</td>
                <td>{item.origin}</td>
                <td>{item.destination}</td>
                <td>{item.current}</td>
                <td>{item.status}</td>
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

export default InventoryManagementList;
