import axios from "axios";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {Buffer} from 'buffer';

const fileTypes = ["JPEG", "PNG", "JPG"];

export default function DragAndDrop() {
    const [fileList, setFileList] = useState({
        length: 0
    });
    
    const [fileId, setFileId] = useState(0);
    const [image, setImage] = useState('');

    const handleChange = (inputFiles) => {
        let updateFileList = {
            ...fileList
        };

        let inputFilesCounter = 0;
        
        for(let counter = updateFileList.length; inputFilesCounter < inputFiles.length; ++inputFilesCounter, ++counter){
            inputFiles[inputFilesCounter].id = fileId;
            updateFileList[counter] = inputFiles[inputFilesCounter];
        }

        updateFileList.length += inputFiles.length;
        setFileId(fileId + 1);
        setFileList(updateFileList);
    };

    const getFiles = () => {
        let filenames = '';

        for(let file = 0; file < fileList.length; ++file){
            filenames += `[${fileList[file].name}] `;
        }
        return filenames;
    }

    const onFileUpload = () => {
        const formData = new FormData();
      
        for(let counter = 0; counter < fileList.length; ++counter){
            formData.append('file', fileList[counter], fileList[counter].name)
        }

        console.log(formData);
        console.log(typeof(formData));

        formData.forEach(value => {
            console.log(value);
        });

        axios.post("http://localhost:8000/upload", formData, {})
            .then(res => { 
                console.log(res.statusText)
            })            
    };

    const renderImage = () => {
        axios.get('http://localhost:8000/upload', { responseType: "json"})
        .then((response) => {
            console.log(response);
            let base64ImageString = Buffer.from(response.data[0], 'binary').toString('base64');
            setImage(base64ImageString);
        });
    }

    return (
        <>
            <div className="ml-8 mt-8">
                <FileUploader
                    multiple={true}
                    handleChange={handleChange}
                    types={fileTypes}
                />
                { <p>{fileList.length > 0 ? `Uploaded file names: ${getFiles()}` : "no files uploaded yet"}</p>}
                {/*

                <button onClick={onFileUpload} className={`bg-green-400 block`}  > Upload! </button><br />

                <button onClick={renderImage} className={`bg-blue-100  b-`}  > Show Image </button>
                */}

                {/*fileList && fileList[0] && <img src={URL.createObjectURL(fileList[0])} alt="test" width={'70px'} height={'70px'}/>*/} 

                {/*<img src={`data:image/png;base64,${image}`} alt='articulo'/>*/}
            </div>
        </>
    );
}