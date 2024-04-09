// import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { ItemLists } from "../itemLists/ItemLists";

// eslint-disable-next-line react/prop-types
function RestaurantCategory({ accordianData, isExpand, setShowIndex}) {

    // const [isOpen, setIsOpen] = useState(false);
    // console.log("isExpand", isExpand);

    const toggleAccordian = () => {
        // setIsExpand(!isExpand);
        setShowIndex();
    }
    
    // const {accordianData} = props || {}
    // console.log(accordianData);
    const {title, itemCards} = accordianData || {};
    return(
        <div className="">
            {/* header */}
            <button onClick={toggleAccordian} className="lg:w-[1050px] md:w-[700px] flex shadow-lg  p-[10px]  mt-[10px] justify-between lg:ml-[11px]">
                <span className="text-[#3E4152] font-medium text-[17px] lg:text-[18px] font-serif">{title} ({itemCards && itemCards.length})</span>
                <span className="flex items-center text-[20px] text-[#3E4152]">{isExpand ? <RiArrowUpSLine/> : <RiArrowDownSLine/>}</span>
            </button>
            {
                isExpand && (
                    <div className="">
                        <ItemLists items={itemCards}/>
                    </div>
                )
            }
        </div>
    )
}


export {RestaurantCategory}