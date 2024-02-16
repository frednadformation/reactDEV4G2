import axios from 'axios';
import React, { useState } from 'react'

function FileUploadForm() {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        setSelectedFiles(Array.from(event.target.files));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(selectedFiles.length > 0) {
            const formData = new FormData();
            selectedFiles.forEach((file) => {
                formData.append('images', file);
            })
            axios.post('http://localhost:5000/uploadfiles/', formData)
            .then((response)=>{
                console.log(response.data);
            })
            .catch((error)=>{
                console.log(error);
            });
        }
    };
  return (
    <div>       
            <form onSubmit={handleSubmit}>
                <input type="file" multiple onChange={handleFileChange} />
                <input type="submit" value="Upload" />
            </form>
    </div>
  )
}

export default FileUploadForm