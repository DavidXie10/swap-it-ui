import Checkbox from '../Checkbox';

export default function ImageCheckbox ({
    fileURL, onClick
}) {
    return (
        <label>
            <div className='mr-3 mt-2 w-fit relative inline-block'>
                <div className='absolute top-0 right-0' >
                    <Checkbox onClick={onClick}/>
                </div>
                <img src={fileURL || 'https://ci0137.s3.amazonaws.com/swap-it/uploads/broken-link-g8cf1ab24b_1280.png'} alt={'Foto del artículo a intercambiar'} width={'200px'} height={'80px'} />
            </div>
        </label>
    )
}