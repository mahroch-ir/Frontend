import React, { useEffect, useState } from "react";
import axios from "axios";

// آدرس Backend آنلاین
const BACKEND_URL = "https://sit-gafase.onrender.com";

const Dashboard = () => {
  const [tools, setTools] = useState([]);

    useEffect(() => {
        // دریافت تمام ابزارها از Backend
            axios.get(`${BACKEND_URL}/api/tools`)
                  .then(res => setTools(res.data))
                        .catch(err => console.error("Error fetching tools:", err));
                          }, []);

                            return (
                                <div style={{ padding: "20px" }}>
                                      <h1>Dashboard</h1>

                                            {tools.length === 0 && <p>No tools available.</p>}

                                                  <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                                                          {tools.map(tool => (
                                                                    <div
                                                                                key={tool._id}
                                                                                            style={{
                                                                                                          border: "1px solid #ccc",
                                                                                                                        padding: "10px",
                                                                                                                                      borderRadius: "8px",
                                                                                                                                                    width: "150px",
                                                                                                                                                                  textAlign: "center"
                                                                                                                                                                              }}
                                                                                                                                                                                        >
                                                                                                                                                                                                    <h3>{tool.name}</h3>
                                                                                                                                                                                                                {tool.imageURL && (
                                                                                                                                                                                                                              <img
                                                                                                                                                                                                                                              src={`${BACKEND_URL}${tool.imageURL}`}
                                                                                                                                                                                                                                                              alt={tool.name}
                                                                                                                                                                                                                                                                              width="100%"
                                                                                                                                                                                                                                                                                              style={{ borderRadius: "4px" }}
                                                                                                                                                                                                                                                                                                            />
                                                                                                                                                                                                                                                                                                                        )}
                                                                                                                                                                                                                                                                                                                                    <p>Code: {tool.code}</p>
                                                                                                                                                                                                                                                                                                                                                <p>Type: {tool.type}</p>
                                                                                                                                                                                                                                                                                                                                                            <p>Shelf: {tool.shelf}</p>
                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                              ))}
                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                                                                                          };

                                                                                                                                                                                                                                                                                                                                                                                          export default Dashboard;