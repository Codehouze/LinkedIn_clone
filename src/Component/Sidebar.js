import React from "react";
import "./Style/Sidebar.css";
import Avatar from "@mui/material/Avatar";

function Sidebar() {
const recentItem =(topic)=>{
  return <div className="sidebar_recentItem">
    <span className="sidebar_hash">#</span>
    <p>{topic}</p>
  </div>

}
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="https://media-exp1.licdn.com/dms/image/C4D16AQG1tHtyY1sB9g/profile-displaybackgroundimage-shrink_350_1400/0/1626276556987?e=1671062400&v=beta&t=lVZdLeaKlu1h48BDAqJJS0Q21u51UqK-Jz0Q_iuzK2U" alt="" />
        <Avatar />
        <h2>Emmanuel C. Maxwell</h2>
        <h4>chijioke.emma.maxwell@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed your profile</p>
          <p className="sidebar_statNumber">2500</p>
        </div>
        <div className="sidebar_stat">
          <p>Impressions on your post</p>
          <p className="sidebar_statNumber">7300</p>
        </div>
        <div className="sidebar_premium">
        <p>Get hired faster</p>
      </div>
      <div>
        {/* TODO: Icon  */}
        <p>My Items</p>
      </div>
      </div>

      
     
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("Design")}
        {recentItem("Next.js")}
        {recentItem("Cloud Engineering")}
        {recentItem("Dev Ops")}
        {recentItem("Backend Development")}
        {recentItem("React")}

      </div>
    </div>
  );
}

export default Sidebar;
