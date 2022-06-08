import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "PNG", "GIF", "JPG"];

export default function DragAndDrop() {
  const [fileList, setFileList] = useState();
  const handleChange = (file) => {
    //let fileTemp = file;
    //fileTemp[]
    //console.log(fileList);
    //let tempList = file;
    //tempList.append(inputFile);
    //setFile(tempList);
    //let fileListTemp = fileList + file;
    //setFileList(fileListTemp);
    if (!fileList) {
        setFileList(file);
    } else {
        let fileListTemp = fileList + file;
        //fileListTemp.append(file)
        setFileList(fileListTemp);
    }
    console.log(fileList);
  };
  return (
    <div className="App">
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      {/* <p>{fileList ? `File name: ${fileList[0].name}` : "no files uploaded yet"}</p>
      {fileList && fileList[0] && <img src={URL.createObjectURL(fileList[0])} alt="test" />} */}
    </div>
  );
}