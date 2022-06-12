//import Label from "../DragAndDrop";
//51E5FF

import ImageCheckbox from "../ImageCheckbox";
import CheckBoxExample from "../CheckBoxExample";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";

const fileTypes = ["JPEG", "PNG", "GIF"];

export default function Showcase() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <>
            <FileUploader
            multiple={true}
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            />
            <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
            {file ? <ImageCheckbox file={file[0]}></ImageCheckbox> : "no file image yet"}
        </>
    )
}

