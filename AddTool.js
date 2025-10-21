import React, { useState } from "react";
import axios from "axios";

const BACKEND_URL = "https://sit-gafase.onrender.com";

const AddTool = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [type, setType] = useState("");
  const [shelf, setShelf] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("code", code);
    formData.append("type", type);
    formData.append("shelf", shelf);
    if (image) formData.append("image", image);

    try {
      await axios.post(`${BACKEND_URL}/api/tools`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setMessage("Tool added successfully!");
      setName(""); setCode(""); setType(""); setShelf(""); setImage(null);
    } catch (err) {
      console.error(err);
      setMessage("Error adding tool!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add New Tool</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px", gap: "10px" }}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="text" placeholder="Code" value={code} onChange={e => setCode(e.target.value)} required />
        <input type="text" placeholder="Type" value={type} onChange={e => setType(e.target.value)} required />
        <input type="text" placeholder="Shelf" value={shelf} onChange={e => setShelf(e.target.value)} required />
        <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
        <button type="submit">Add Tool</button>
      </form>
    </div>
  );
};

export default AddTool;
