//import Label from "../DragAndDrop";
//51E5FF

import ImageCheckbox from "../ImageCheckbox";
import ExchangeSelection from "../ExchangeSelection";
import { Checkbox } from "@createnl/grouped-checkboxes";

let items=['Item 1','Item 2','Item 3','Item 4','Item 5'];

let itemList=[];

items.forEach((item,index)=>{
    itemList.push( 
        <li key={item.id}>
            <ImageCheckbox file={item}></ImageCheckbox>
        </li>
    )
})

export default function Showcase() {
    return (
        <>
            <ExchangeSelection fileList={itemList}></ExchangeSelection>
        </>
    )
}

