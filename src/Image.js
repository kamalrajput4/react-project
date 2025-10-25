import React, { useState, useEffect } from 'react'
import Firebase from "./Firebase"

const Image = () => {
  const [image, setImage] = useState("")
  const [allImages, setAllImages] = useState({})  // [] ki jagah {}

  function upload(e) {
    const file = e.target.files[0]
    if (file) {
      const ext = file.type.split('/')
      if (ext[0] === "image") {
        if (ext[1] === "jpeg" || ext[1] === "jpg" || ext[1] === "PNG" || ext[1] === "png") {
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = function () {
            setImage(reader.result)
          }
        } else {
          alert("only jpeg, jpg, or png images are allowed")
        }
      } else {
        alert("only images are supported")
      }
    } else {
      alert("please upload image")
    }
  }

  function save() {
    if (image) {
      const obj = { "images": image }
      Firebase.child("gallery").push(obj, function (err) {
        if (err) {
          alert("error occurred")
        } else {
          alert("saved in firebase ")
          setImage("")
        }
      })
    }
  }

  useEffect(function () {
    Firebase.child("gallery").on("value", function (snapshot) {
      if (snapshot.val()) {
        setAllImages(snapshot.val())  
      }
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">My Gallery</h1>

      <div className="flex justify-center gap-4 mb-8">
        <input
          type='file'
          onChange={upload}
          className="border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm"
        />
        <button
          onClick={save}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg shadow"
        >
          Save
        </button>
      </div>

      <h3 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Uploaded Images</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.keys(allImages).map((key) => (
          <div
            key={key}
            className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300 flex justify-center items-center p-2"
          >
            <img
              src={allImages[key].images}
              alt="gallery"
              className="w-full h-80 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Image
