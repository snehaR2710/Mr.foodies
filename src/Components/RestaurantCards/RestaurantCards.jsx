
function RestaurantCards(props) {
    // eslint-disable-next-line react/prop-types
    const {resData} = props;
    // console.log('resdata:-', resData) ;

    // eslint-disable-next-line no-unsafe-optional-chaining, react/prop-types
    const {name, cuisines, avgRating, aggregatedDiscountInfoV3, sla, cloudinaryImageId} = resData && resData?.info || {} ;

    return(
        <div className=" flex items-center cursor-pointer justify-center max-w-[300px] mt-5 transition-transform transform hover:scale-105 rounded-lg bg-zinc-100">
            
            <div>
                <div className="relative min-h-[200px] w-[260px] m-auto mb-3 mt-[6px]">
                 <img className=" absolute bottom-0  bg-gradient-to-t from-black via-transparent to-transparent opacity-100 border w-full h-full object-cover rounded-[10px]" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/${cloudinaryImageId}`} alt="" />
                 <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black opacity-55 rounded-bl-[10px] rounded-br-[20px]"></div>

                   <p className='absolute top-[170px] text-[#FFFFFF] left-[20px] text-[22px] font-extrabold'>{aggregatedDiscountInfoV3?.header}</p>
                   <p className='pl-1 text-center absolute top-[170px] left-[120px] text-[#FFFFFF] text-[22px] font-extrabold'>{aggregatedDiscountInfoV3?.subHeader}</p>
                </div>

                <h1 className="ml-[9px] pb-[7px] text-xl font-medium text-[#3E4152] font-serif w-[270px]" >{name}</h1>
            
                <div className="flex gap-4 text-base ml-[9px] pb-[7px] font-medium text-[#3E4152]">
                <h2 className="text-lg bg-green-500 pr-[5px] pl-[2px] rounded-[8px] text-[#fff]"> &#9733; {avgRating}</h2>
                <h2 className="text-lg ">{sla && sla.slaString}</h2>
                </div>
                 
                <p className="ml-[9px] mb-2 text-[#9DA1A8] text-[18px] font-serif w-[270px] pb-[9px] pt-[8px]">{cuisines && cuisines.join(", ")}</p>
                  
            </div>         

        </div>
    )
}


export { RestaurantCards};
