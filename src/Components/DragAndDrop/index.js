import { useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";

const FILE_TYPES = ["JPEG", "PNG", "JPG"];

export default function DragAndDrop({handleChange, fileList}) {
    useEffect(() => {
        let label = document.getElementsByClassName('sc-bczRLJ')[0];
        console.log(label);
        label.setAttribute('style', 'max-width:100%; height:8rem');
    }, []);

    return (
        <div className="h-full w-full">
            <FileUploader
                multiple={true}
                handleChange={handleChange}
                types={FILE_TYPES}
            />
            { 
                <p className='text-[#2e2f2f] font-bold pt-4'> 
                    { fileList.length > 0 ? `Archivos cargados:` : 'Aún no se han subido archivos'}
                </p> 
            }
        </div>
    );
}