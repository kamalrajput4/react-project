import React, { useEffect, useState } from 'react';
import fireDb from './Coonection';

const Stuck = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    fireDb.child("news").on("value", snapshot => {
      if (snapshot.val()) {
        setUsers(snapshot.val());
      } else {
        setUsers({});
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Registered Users</h1>
      
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4 border">#</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Email</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(users).map((key, index) => (
              <tr  className="text-center hover:bg-gray-100">
                <td className="py-2 px-4 border">{index + 1}</td>
                <td className="py-2 px-4 border">{users[key].Name}</td>
                <td className="py-2 px-4 border">{users[key].Phone}</td>
                <td className="py-2 px-4 border">{users[key].Email}</td>
              </tr>
            ))}
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stuck;
