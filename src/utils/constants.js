
export const iconCategoryClasses = 'mr-4 lg:text-3xl md:text-3xl sm:text-4xl  text-black border border-black rounded-xl p-[1px]';
export const menuOptionClasses = 'cursor-pointer text-white hover:text-[#51e5ff] hover:font-bold';

export const getLocationById = (id) => {
    let location = '';
    switch(id){
        case 1:
            location = "San José";
            break;
        case 2:
            location = "Alajuela";
            break;
        case 3:
            location = "Cartago";
            break;
        case 4:
            location = "Heredia";
            break;
        case 5:
            location = "Guanacaste";
            break;
        case 6:
            location = "Puntarenas";
            break;
        case 7:
            location = "Limón";
            break;
        default:
            location = "No es de Costa Rica";
            break;
    }

    return location;
}
