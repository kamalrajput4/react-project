import React, { useState } from 'react'

function Rejis() {
    const [obj, setObj] = useState({
        Name: '',
        Phone: '',
        Address: ''
    })
    function set1(e) {

        setObj({...obj,[e.target.name]:e.target.value})
        // setObj()
    }

    return (
        <div>   
            <input onChange={set1} name='Name' type="text" id="txtName" placeholder='Enter Name:' /> <br />
            <input onChange={set1} name='Phone' type="text" id="txtPhone" placeholder='Enter Phone:' /> <br />
            <input onChange={set1} name='Address' type="text" id="txtAddress" placeholder='Enter Address:' /> <br />
        </div>
    )
}

export default Rejis