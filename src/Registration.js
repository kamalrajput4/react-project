import React, { useState } from "react";
import fireDb from "./Coonection";
import { useEffect } from "react";
import { update } from "firebase/database";

const Registration = () => {
  const [data, setData] = useState({
    Name: "",
    Phone: "",
    Address: "",
  });

  const [obj, setObj] = useState({});
   var[id,setid]=useState('')
  function set(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

function save() {
  fireDb.child("Record").push(data);

}


function edit(key){
  setData(obj[key])
  setid(key)
}

function update() {
  fireDb.child("Record").child(id).update(data);
  setData({
    Name: "",
    Phone: "",
    Address: "",
  });
  setid("");
}


  // function show() {
  //   fireDb.child("Record").once("value", function (e) {
  //     setObj(e.val());
  //   });
  // }

  useEffect(function () {
    fireDb.child("Record").on("value", function (snapshot) {
      if (snapshot.val()) {
        setObj(snapshot.val());
      } else {
        setObj({});
      }
    });
  }, []);
  function del(key) {
    fireDb.child("Record").child(key).remove();
  }
  return (
    <div className="w-full mx-auto mt-16 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Hotel Registration
      </h2>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Full Name
        </label>
        <input
          onChange={set}
          value={data.Name}
          name="Name"
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Phone
        </label>
        <input
          onChange={set}
          value={data.Phone}
          name="Phone"
          type="text"
          placeholder="Enter your phone number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Address
        </label>
        <input
          onChange={set}
          value={data.Address}
          name="Address"
          type="text"
          placeholder="Enter your address"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

     <div>
      {
        id?<button  onClick={update}className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md">update</button>
        :<button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md" onClick={save}>Save</button>
      }
     </div>

      {/* <button
        onClick={show}
        className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
      >
        Show Data
      </button> */}

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Records:</h3>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Sr.No</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Address</th>
              <th className="py-2 px-4 border-b">Action</th>
              <th className="py-2 px-4 border-b">Edit</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(obj).map((key, index) => (
              <tr>
                <td className="py-2 px-4 border-b">{index + 1}</td>

                <td className="py-2 px-4 border-b">{obj[key].Name}</td>
                <td className="py-2 px-4 border-b">{obj[key].Phone}</td>
                <td className="py-2 px-4 border-b">{obj[key].Address}</td>
                <td
                  onClick={() => del(key)}
                  className="py-2 px-4 border-b bg-red-700 text-white cursor-pointer"
                >
                  Delete
                </td>
                <td
                onClick={()=>edit(key)}
                  className="py-2 px-4 border-b bg-green-900 text-white cursor-pointer"
                >
                  Edit
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Registration;
