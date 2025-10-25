import React from 'react'

const Footer = () => {
  return (
    <div style={{background:'black',width:'100%',height:'70px',marginTop:'50px',textAlign:'center', paddingTop:'15px'}}>
       <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    </div>
  )
}

export default Footer
