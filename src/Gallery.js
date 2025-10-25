import React from 'react'

const Gallery = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Welcome to the Gallery</h2>
      <p>Explore our collection of art, photography, and digital creations.</p>

      <div style={{ marginTop: '20px' }}>
        <input 
          type="text" 
          placeholder="Search artworks..." 
          style={{
            padding: '10px',
            width: '60%',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }} 
        />
        <button 
          style={{
            padding: '10px 20px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </div>

      <div style={{ marginTop: '30px' }}>
        <button 
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Upload Artwork
        </button>
        <button 
          style={{
            padding: '10px 20px',
            backgroundColor: '#ffc107',
            color: 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          View Categories
        </button>
      </div>

      <div style={{ marginTop: '40px', color: '#666' }}>
        <p>No images to display at the moment. Please use the buttons above to interact with the gallery.</p>
      </div>
    </div>
  )
}

export default Gallery
