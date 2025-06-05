
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to Admin Dashboard</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>Total Products: --</div>
        <div>Low Stock: --</div>
        <div>Expired Products: --</div>
      </div>
    </div>
  );
};

export default Dashboard;
