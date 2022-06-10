import axios from "axios";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { saveAs } from 'file-saver';

const fileTypes = ["JPEG", "PNG", "GIF", "JPG"];

export default function DragAndDrop() {
    const [fileList, setFileList] = useState({
        length: 0
    });
    const [fileId, setFileId] = useState(0);

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

    // On file upload (click the upload button)
    const onFileUpload = () => {
    
        // Create an object of formData
        const formData = new FormData();
      
        // Update the formData object
        for(let counter = 0; counter < fileList.length; ++counter){
            formData.append(
                "myFile",
                fileList[counter],
                fileList[counter].name
            )
            saveAs(fileList[counter]);
        }

        //console.log(formData);

        // Details of the uploaded file
        //console.log(this.state.selectedFile);
      
        // Request made to the backend api
        // Send formData object
        //axios.post("api/uploadfile", formData);
      };

    return (
        <>
            <FileUploader
                multiple={true}
                handleChange={handleChange}
                name="abc"
                types={fileTypes}
            />
            { <p>{fileList.length > 0 ? `Uploaded file names: ${getFiles()}` : "no files uploaded yet"}</p>}
            <button onClick={onFileUpload}> Upload! </button>
        </>
    );
}