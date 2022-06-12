import { useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";

const FILE_TYPES = ["JPEG", "PNG", "JPG"];

export default function DragAndDrop({handleChange, fileList}) {
    useEffect(() => {
        let label = document.getElementsByClassName('sc-bczRLJ')[0];
        label.setAttribute('style', 'max-width:100%; height:8rem');
    }, []);

    return (
        <div className="h-full w-full">
            <FileUploader
                multiple={true}
                handleChange={handleChange}
                types={FILE_TYPES}
                label={'Arrastre y suelte las imágenes aquí para subirlos'}
            />
        </div>
    );
}