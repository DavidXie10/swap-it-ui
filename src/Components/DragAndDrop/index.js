import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "PNG", "GIF", "JPG"];

export default function DragAndDrop() {
    const [fileList, setFileList] = useState({
        length: 0
    });

    const handleChange = (inputFiles) => {
        let updateFileList = {
            ...fileList
        };

        let inputFilesCounter = 0;
        
        for(let counter = updateFileList.length; inputFilesCounter < inputFiles.length; ++inputFilesCounter, ++counter){
            updateFileList[counter] = inputFiles[inputFilesCounter];
        }

        updateFileList.length += inputFiles.length;
        setFileList(updateFileList);
    };

    const getFiles = () => {
        let filenames = '';

        for(let file = 0; file < fileList.length; ++file){
            filenames += `[${fileList[file].name}] `;
        }

        return filenames;
    }

    return (
        <>
            <FileUploader
                multiple={true}
                handleChange={handleChange}
                name="file"
                types={fileTypes}
            />
            { <p>{fileList.length > 0 ? `Uploaded file names: ${getFiles()}` : "no files uploaded yet"}</p>}

        </>
    );
}