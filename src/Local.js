import React, { useState, useEffect } from 'react';

function Local() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  function set1(e) {
    setName(e.target.value);
  }

  function set2(e) {
    setPhone(e.target.value);
  }

  function set3(e) {
    setAddress(e.target.value);
  }


  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem('phone', phone);
  }, [phone]);

  useEffect(() => {
    localStorage.setItem('address', address);
  }, [address]);

  return (
    <div>
      <input onChange={set1} placeholder="Enter The Name" /><br />
      <input onChange={set2} placeholder="Enter The Phone" /><br />
      <input onChange={set3} placeholder="Enter The Address" />
    </div>
  );
}

export default Local;
