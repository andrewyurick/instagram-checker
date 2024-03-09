import React from 'react';
import './FollowStats.css'; // Styling file

const FollowStats = () => {

    // Mock data for now but have api that grabs
    const followersCount = 1200; // Example followers
    const followingCount = 300; // Example following


  return (
    <div className="stats-container">
      <div className="stat">
        <span className="stat-label">Followers</span>
        <span className="stat-value">{followersCount}</span>
      </div>
      <div className="stat">
        <span className="stat-label">Following</span>
        <span className="stat-value">{followingCount}</span>
      </div>
    </div>
  )
}

export default FollowStats