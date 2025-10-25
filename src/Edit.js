import React, { useState, useEffect } from 'react';

function Edit() {
  const [obj, setObj] = useState({
    Name: '',
    Phone: '',
    Address: ''
  });

  const [arr, setArr] = useState([]);

  
  function set1(e) {
    setObj({ ...obj, [e.target.name]: e.target.value });
  }

  
  function saveData() {
    let oldData = JSON.parse(localStorage.getItem("data")) || [];
    oldData.push(obj);
    localStorage.setItem("data", JSON.stringify(oldData));
    setArr(oldData);
    setObj({ Name: '', Phone: '', Address: '' }); 
  }



  return (
    <div>
      <h2>Add New Entry</h2>
      <input value={obj.Name} onChange={set1} name='Name' placeholder='Enter Name' /> <br />
      <input value={obj.Phone} onChange={set1} name='Phone' placeholder='Enter Phone' /> <br />
      <input value={obj.Address} onChange={set1} name='Address' placeholder='Enter Address' /> <br />
      <button onClick={saveData}>Save</button>

      
      <ul>
        {arr.map((item, index) => (
          <li key={index}>
            Name: {item.Name}, Phone: {item.Phone}, Address: {item.Address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Edit;
