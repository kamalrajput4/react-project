import React, { useEffect, useState } from 'react'

function Form() {
    const [obj, setObj] = useState({
        Name: '',
        Phone: '',
        Address: ''
    })
    const [arr, setArr] = useState(JSON.parse(localStorage.getItem("first")))
    function set1(e) {

        setObj({ ...obj, [e.target.name]: e.target.value })
    }
    function save() {

        setArr([...arr, obj])
    }

    useEffect(function () {
        if (arr == null) {
            setArr([])
        }
        localStorage.setItem("first", JSON.stringify(arr))
    }, [arr])


    function del(index) {
        var newArr = arr.filter(function (obj, i) {
            return i != index
        })
        setArr(newArr)
    }

    function edit(index) {
        var x = arr[index].Name
        var y = arr[index].Phone
        var z = arr[index].Address

        setObj({
            Name: x,
            Phone: y,
            Address: z
        })
    }

    return (
        <div>

            <input value={obj.Name} onChange={set1} name='Name' type="text" id="txtName" placeholder='Enter Name:' /> <br />
            <input value={obj.Phone} onChange={set1} name='Phone' type="text" id="txtPhone" placeholder='Enter Phone:' /> <br />
            <input value={obj.Address} onChange={set1} name='Address' type="text" id="txtAddress" placeholder='Enter Address:' /> <br />
            <button onClick={save}>Save</button>
            <button>Change</button>

            <br />
            <table border="2">
                <thead>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                </thead>
                <tbody>
                    {
                        arr ? arr.map(function (obj, index) {
                            return (
                                <tr>
                                    <td>{obj.Name}</td>
                                    <td>{obj.Phone}</td>
                                    <td>{obj.Address}</td>

                                    <td>
                                        <button onClick={() => del(index)}>Delete</button>
                                        <button onClick={() => edit(index)}>Edit</button>
                                    </td>
                                </tr>
                            )
                        }) : ""
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Form