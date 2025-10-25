import React, { useState } from 'react'
import fireDb from './Connection'

const Fires = () => {
    const [data, setData] = useState({
        Name: "",
        Phone: "",
        Address: ""
    })
    const [obj, setObj] = useState({})

    function set(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function save() {
        fireDb.child("Record").push(data)
    }

    function show() {
        fireDb.child("Record").once("value", function (e) {
            setObj(e.val())
        })
    }

    return (
        <>
        <center><h1 className='font-bold text-3xl m-5 text-purple-800  '>Firebase Contact Manager</h1></center>
            <input
                onChange={set}
                name="Name"
                placeholder='Enter The Name'
                className="border border-gray-300 rounded px-4 py-2 m-2 ml-20 font-bold "
            />

            <input
                onChange={set}
                name="Phone"
                placeholder='Enter The Phone'
                className="border border-gray-300 rounded px-4 py-2 m-2 font-bold "
            />

            <input
                onChange={set}
                name="Address"
                placeholder='Enter The Address'
                className="border border-gray-300 rounded px-4 py-2 m-2 font-bold text-black "
            />  

            <button
                onClick={save}className="bg-blue-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-600 font-bold"
            >
                Save
            </button>

            <button
                onClick={show}
                className="bg-green-500 text-white px-4 py-2 rounded m-2 hover:bg-green-600 font-bold "
            >
                Show
            </button>

            <br /><br />

            <table className="table-auto border-collapse border border-gray-400 m-2 w-full ">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-400 px-4 py-2">Name</th>
                        <th className="border border-gray-400 px-4 py-2">Phone</th>
                        <th className="border border-gray-400 px-4 py-2">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(obj).map(function (value) {
                            return (
                                <tr className="text-center hover:bg-gray-100">
                                    <td className="border border-gray-400 px-4 py-2 font-bold">{obj[value].Name}</td>
                                    <td className="border border-gray-400 px-4 py-2 font-bold">{obj[value].Phone}</td>
                                    <td className="border border-gray-400 px-4 py-2 font-bold">{obj[value].Address}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Fires
