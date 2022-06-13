import { Checkbox } from '@createnl/grouped-checkboxes';

export default function ImageCheckbox ({
    file
}) {
    return (
        <label>
            <div className='mr-3 mt-2 w-fit relative inline-block'>
                <div className="absolute top-0 right-0" >
                    <Checkbox value={`${file}`} width="w-8" height="h-8" textcolor={'text-[#51e5ff]'}/>
                </div>
                <img src={URL.createObjectURL(file)} alt={"Foto del artículo a intercambiar"} width={'200px'} height={'80px'} />
            </div>
        </label>
    )
}