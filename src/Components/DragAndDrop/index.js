import { FileUploader } from "react-drag-drop-files";

const FILE_TYPES = ["JPEG", "PNG", "JPG"];

export default function DragAndDrop({handleChange}) {
    return (
        <div className='h-full w-full' id='container_file_uploader'>
            <FileUploader
                multiple={true}
                handleChange={handleChange}
                types={FILE_TYPES}
                label={'Arrastre y suelte las imágenes aquí para subirlos'}
            />
        </div>
    );
}