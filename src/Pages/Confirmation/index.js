import BackButton from "../../Components/BackButton";
import Button from "../../Components/Button";
import Label from "../../Components/Label";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import 'tw-elements';
//lg:w-[31%] md:w-[48%] sm:w-full
export default function Confirmation ({
}) {
    let itemsToGive = [
        {id:1,name:"pan"},
        {id:2,name:"alma"}
    ];
    let itemToReceive = {id:2010,name:"bicicleta roja"};
    return (
        <div className='flex min-h-screen flex-col justify-between'>
            <Header />
            <div className="sm:px-6 md:px-8 lg:px-16">
                <div className="flex flex-row justify-between items-center w-full mb-16">
                    <Label text='Propuesta de Intercambio' width='basis-3/4' height='h-full' textposition='text-left' size='lg:text-4xl md:text-4xl sm:text-2xl' font='font-bold'/>
                    <BackButton></BackButton>
                </div>
                <div className={`grid grid-rows-${itemsToGive.length + 1} grid-cols-5`}>
                    <div className={`bg-[#f5f5f5] sm:col-span-5 md:col-span-2 lg:col-span-2`}>
                        <Label font={'font-bold'} text={'Order:'} backgroundcolor={'bg-[#f5f5f5]'} textposition={'ml-8 mt-4'} width={'w-auto'} height={'h-auto'}></Label>
                        <ul className="ml-16 mb-4 list-disc">
                            {
                                itemsToGive.map(item => <li>{item.name}</li> )
                            }
                        </ul>
                    </div>
                    <div className={`sm:col-span-5 md:col-span-1 lg:col-span-1 flex justify-center items-center sm:rotate-90 md:rotate-0 lg:rotate-0`}>
                        <img 
                            src={require("../../Assets/twoWayArrows.png")}
                            alt='Page logo' 
                            className="scale-50"
                        />
                    </div>
                    <div className={`bg-[#f5f5f5] sm:col-span-5 md:col-span-2 lg:col-span-2`}>
                        <Label font={'font-bold'} text={'Order:'} backgroundcolor={'bg-[#f5f5f5]'} textposition={'ml-8 mt-4'} width={'w-auto'} height={'h-auto'}></Label>
                        <ul className="ml-16 mb-4 list-disc">
                            <li>{itemToReceive.name}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}