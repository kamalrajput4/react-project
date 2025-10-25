import React, { useEffect, useState } from 'react'
import Firebase from './Firebase'

const Registration = () => {
    const [obj, setobj] = useState({
        Name: '',
        Phone: '',
        Address: '',
    })

    const [data, setData] = useState({})

    function handleChange(e) {
        setobj({ ...obj, [e.target.name]: e.target.value })
    }

    function save() {
        if (obj.Name && obj.Phone && obj.Address) {
            Firebase.child("news").push(obj, function (err) {
                if (err) {
                    alert("error occured")
                }
                else {
                    alert("saved")
                }
            })
        } else {
            alert("field is empty")
        }
    }

    useEffect(function () {
        Firebase.child("news").on("value", function (snap) {
            if (snap.val()) {
                setData(snap.val())
            } else {
                setData({})
            }
        })
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold text-center mb-6 text-gray-700">
                    Registration Form
                </h2>
                <input
                    onChange={handleChange}
                    name="Name"
                    placeholder="Enter The Name:"
                    className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    onChange={handleChange}
                    name="Phone"
                    placeholder="Enter The Phone:"
                    className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    onChange={handleChange}
                    name="Address"
                    placeholder="Enter The Address:"
                    className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={save}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Save
                </button>
            </div>

            {/* Table Section */}
            <div className="mt-8 w-full max-w-2xl bg-white p-4 rounded-2xl shadow-lg overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-100 text-gray-700">
                            <th className="border px-4 py-2 text-left">Name</th>
                            <th className="border px-4 py-2 text-left">Phone</th>
                            <th className="border px-4 py-2 text-left">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(data).map(function (key, index) {
                            return (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="border px-4 py-2">{data[key].Name}</td>
                                    <td className="border px-4 py-2">{data[key].Phone}</td>
                                    <td className="border px-4 py-2">{data[key].Address}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Registration
