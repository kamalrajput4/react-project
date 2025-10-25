import React, { useState } from 'react'
import fireDb from
function Fire() {
    var [obj, setObj] = useState({
        Name: '',
        Phone: '',
        Address: ''
    })

    
    function save(e) {
        setObj({ ...obj, [e.target.name]: e.target.value })
    }

    
    return (
        <div>
            <input name="Name" onChange={save} type="text" placeholder='Enter Name:' /> <br />
            <input name="Phone" onChange={save} type="text" placeholder='Enter Phone:' /> <br />
            <input name="Address" onChange={save} type="text" placeholder='Enter Address:' /> <br />
            <button>Save</button>
        </div>
    )
}

export default Fire