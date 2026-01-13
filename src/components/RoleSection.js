import React from 'react';
import './RoleSection.css';

function RoleSection({ role }) {
  if (!role) return null;

  return (
    <div className="role-section">
      <h3 className="role-title">내 역할</h3>
      <div className="role-content">
        {typeof role === 'string' ? (
          <p className="role-text">{role}</p>
        ) : (
          <ul className="role-list">
            {role.map((item, index) => (
              <li key={index} className="role-item">
                <span className="role-bullet">•</span>
                <span className="role-text">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default RoleSection;

