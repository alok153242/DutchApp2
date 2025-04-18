import React, { useState } from 'react';
import './App.css';

function App() {
  const [groupName, setGroupName] = useState('');

  const handleAddGroup = () => {
    if (groupName.trim() !== '') {
      console.log('Group added:', groupName);
      setGroupName('');
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">💸 Splitwise Web App</h1>
      <div className="card">
        <label className="label">Create New Group</label>
        <div className="input-group">
          <input
            type="text"
            placeholder="Group Name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <button onClick={handleAddGroup}>Add Group</button>
        </div>
      </div>
    </div>
  );
}

export default App;