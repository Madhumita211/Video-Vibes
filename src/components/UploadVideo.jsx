import React from "react";

function convertHMS(value) {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
  // add 0 if value < 10; Example: 2 => 02
if (hours < 10) {
    hours = '0' + hours;
}
if (minutes < 10) {
    minutes = '0' + minutes;
}
if (seconds < 10) {
    seconds = '0' + seconds;
}
  return hours + ':' + minutes + ':' + seconds; // Return is HH : MM : SS
}

export default function App() {
const [selectedFile, setSelectedFile] = React.useState({
    file: null,
    duration: 0,
    size: 0,
});

const onChangeHandler = (event) => {
    const file = event.target.files[0];
    new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.onload = function () {
        var aud = new Audio(reader.result);
        aud.onloadedmetadata = function () {
        resolve(convertHMS(aud.duration));
        };
    };
    reader.readAsDataURL(file);
    })
    .then((duration) => {
        setSelectedFile({ file, duration, size: file?.size });
    })
    .catch((err) => {
        console.log(err);
    });
};

console.log('selectedFile', selectedFile);

const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('inputFile', selectedFile);
    // console.log(formData);
};

return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-slate-400 text-black bg-clip-border">
        <div className="flex">
            <div className="flex items-center box-border">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <label className="">
                        Upload a file: <br />
                        <br />
                        <input type="file" name="file" onChange={onChangeHandler} className="bg-transparent text-black" />
                        </label>
                        <br />
                        <br />
                        <label className="">
                        Add Thumbnail of this video : 
                        <input type="text" name="thumbnail" className="text-black bg-slate-300" />
                        </label>
                        <br />
                        <br />
                        <button type="submit" className="bg-blue-800 text-black py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-indigo-400">Upload</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);
}

// import React, { useState } from 'react';

// const VideoUpload = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [thumbnail, setThumbnail] = useState(null);

//   const handleVideoChange = (e) => {
//     const file = e.target.files[0];
//     setVideoFile(file);

//     // Generate thumbnail preview
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setThumbnail(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Handle video upload logic here
//     if (videoFile) {
//       // Implement your upload code (e.g., using FormData and an API)
//       console.log('Uploading video...');
//     }
//   };

//   return (
//     <div className="container mx-auto mt-10">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="videoFile" className="block text-gray-600 font-medium mb-2">
//             Upload Video
//           </label>
//           <input
//             type="file"
//             accept="video/*"
//             id="videoFile"
//             onChange={handleVideoChange}
//             className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-400"
//           />
//         </div>

//         {thumbnail && (
//           <div className="mb-4">
//             <img src={thumbnail} alt="Thumbnail" className="max-w-full h-auto" />
//           </div>
//         )}

//         <button
//           type="submit"
//           className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-400"
//         >
//           Upload
//         </button>
//       </form>
//     </div>
//   );
// };

// export default VideoUpload;
