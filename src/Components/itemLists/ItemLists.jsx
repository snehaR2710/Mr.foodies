/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { addItem} from "../../Utils/cartSlice";
import { toast } from "react-toastify";
import { useState } from "react";


// eslint-disable-next-line react/prop-types
function ItemLists({items}) {
    console.log("itemCards", items);
    const [cartItemCount, setCartItemCount] = useState(0);
    console.log("cartItemCount", cartItemCount);


    const dispatch = useDispatch();


    const addItems = (info) => {

        const isDuplicate = items.some((item) => {
            console.log("inside itemList:-",item.card.info.id, info.card.info.id);
            item.card.info.id === info.card.info.id
        })
        if (!isDuplicate) {
    
            // If the item doesn't exist in the cart, add it
            dispatch(addItem(info));

            // Update cart item count
            setCartItemCount(prevCount => prevCount + 1);

            toast.success(`${cartItemCount + 1} Item added to cart!😋`, {
                position: "bottom-right",
                hideProgressBar: false,
                autoClose: 2000,
            });
        }else{
             // If the item already exists, you can choose to update its quantity or ignore it
             console.log('Item already exists in the cart');
        }

        // dispatch an action 
        // console.log("info", info);

        // setCartItemCount(prevCount => prevCount + 1);
        
        // dispatch(addItem(info));

        // toast.success(`${cartItemCount + 1} Item added to cart!😋`, {
        //     position: "bottom-right", // Customize toast position if needed
        //     autoClose: 2000, // Close the toast automatically after 2 seconds
        // });
    }

    return(
        <div className=" flex flex-col">
            {/* // eslint-disable-next-line react/prop-types */}
            {items && items.map((info, id) => {
                const {name, imageId, description, price, defaultPrice} = info && info?.card?.info || {}
                return (
                    <div key={id} className="border border-[#686B78] border-opacity-50 relative mb-[70px] md:min-h-[240px] lg:min-h-[290px] lg:mt-[10px] md:pl-[10px] lg:pl-[10px] shadow-md rounded-md lg:w-[1010px] lg:ml-[29px] md:w-[700px]">
                        <div className="flex justify-center items-center flex-col relative pt-[10px] lg:ml-[-50px]">
                           <h2 className="text-[#3E4152] text-[17px] font-semibold md:w-[400px] md:ml-[-270px] lg:w-[650px] lg:mt-[10px] md:pt-[20px] lg:ml-[-280px] font-serif">{name}</h2>
                           <p className="text-[#686B78] font-medium pt-[5px] pb-[6px] lg:ml-[-890px] lg:pt-[10px] md:ml-[-620px]">₹{(price || defaultPrice) / 100} </p>
                           <p className="md:w-[460px] lg:w-[700px] text-[#686B78] lg:ml-[-230px] lg:pt-[10px] font-serif md:ml-[-200px] md:pb-[10px]">{description}</p>
                           <div className="flex justify-center flex-col items-center absolute  md:top-[50px] md:right-[20px]">
                             <img className=" object-cover md:w-[140px] md:h-[110px] lg:w-[140px] lg:h-[110px] rounded-[10px]" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150/${imageId}`} alt="food-logo" />
                             <button className="bg-[#e0e0e1] px-[5px] py-[1px] text-[19px] font-semibold rounded-[6px] border border-red-400 text-[#000] font-serif text-center" onClick={() => addItems(info)}>ADD + </button>
                           </div>
                        </div>

                        <div className="flex items-center justify-center relative">
                            {/* <img className="absolute lg:top-[-70px] lg:left-[82%] md:top-[-120px] md:left-[73%] md:w-[130px] lg:w-[140px] rounded-[10px] " src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`} alt="food-logo" />
                            <button className="bg-[#e0e0e1] absolute lg:top-[40px] lg:left-[85.3%] md:top-[-9px] md:left-[78%] px-[5px] py-[1px] text-[19px] font-semibold rounded-[6px] border border-red-400 text-[#000] font-serif text-center" onClick={() => addItems(info)}>ADD + </button> */}
                        </div>
                        {/* <div className=" border-solid border border-[#686B78] border-opacity-50 lg:w-[100%] absolute md:mt-[50px] md:w-[560px]  lg:mt-[80px]"></div> */}
                    </div>
               )
            })}
            {/* <div className=" border-dashed border border-[#686B78] border-opacity-50 w-[79%] mt-5 "></div> */}
        </div>
    )
}


export { ItemLists }