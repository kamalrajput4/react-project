import React, { useEffect, useState } from 'react';
import Front from './Front';
import fireDb from "./Coonection";
import { useNavigate } from 'react-router-dom';

const Call = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate(); 

  useEffect(() => {
    fireDb.child("Record").on("value", function (snap) {
      setData(snap.val());
    });
  }, []);

  const handleClick = (key) => {
    navigate('/rem/' + key);
  };

  return (
    <div>
      <Front />

    
      <div style={{ marginTop: '10px', paddingLeft: '15px' }}>
        {
          Object.keys(data).map((key) => (
            <h1 
              onClick={() => handleClick(key)} 
              key={key} 
              style={{ 
                cursor: 'pointer',
                fontSize: '48px',
                margin: '10px 0'
              }}
            >
              {data[key].Name}
            </h1>
          ))
        }
      </div>
    </div>
  );
};

export default Call;
