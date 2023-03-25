import React, { useState, useEffect } from 'react';

function Restaurant() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(' http://localhost:2007/api/restaurants')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Restaurant;
