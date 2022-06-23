import Categories from "../Categories";

export default function Catalog() {
    return (
        <div className='m-8'>
            <div className='flex w-full'>
                {/* {<Label text='Catálogo' width='w-full' height='h-full' size='lg:text-4xl md:text-4xl sm:text-2xl' />} */}
            </div>
            <div className='flex w-full'>
                <div className='lg:w-[20vw] md:w-[30vw]'>
                    <Categories />
                </div>
                <div className='w-[80vw]'>

                </div>
            </div>
        </div>
    )
}