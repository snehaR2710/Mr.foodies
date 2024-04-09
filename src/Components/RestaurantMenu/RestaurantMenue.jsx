import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../../Utils/useRestaurantMenu";
import { RestaurantCategory } from "../RestaurentCategorie/RestaurantCategories";
import { useState } from "react";
import { Footer } from "../Footer/Footer";
import { MenuCardSimmer } from "../MenuShimmer/MenuShimmer";

function RestaurantMenu() {
  // call useParams and get value of restaurant id using object destructuring
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);
  const { info } = (resInfo && resInfo[2]?.card?.card) || {};

  const categories =
    resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories);

  return !info ? (
    <div className="m-auto lg:ml-[280px]">
      <MenuCardSimmer />
    </div>
  ) : (
    <div className=" flex justify-center items-center m-auto flex-col md:w-[100%] md:min-h-[600px] mt-[10px] lg:w-[full]">
      {/* <MenuCardSimmer/> */}
      <div className=" md:w-[740px] md:min-h-[498px] lg:min-h-[505px] mb-[20p] md:mt-[-15px] lg:mt-[-5px]">
        <div className="lg:ml-[-150px] shadow-lg rounded-[10px] lg:h-[250px] md:w-[700px] bg-[#fff] lg:w-[1050px] mb-[20px]">
          <div className="flex justify-center flex-col lg:h-[260px] mt-[10px]">
            <img
              className="md:w-[260px] md:h-[210px] lg:w-[360px] lg:h-[230px] object-cover rounded-[10px] mt-[-27px] ml-[10px]"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500/${info?.cloudinaryImageId}`}
              alt=""
            />

            <div className="flex items-center justify-center flex-col mt-[-190px] pl-[50px] lg:mt-[-210px] lg:ml-[120px] relative">
              <h2 className="text-[#3E4152] md:text-[26px] font-bold lg:text-[30px] tracking-[2.5px] font-serif absolute md:top-[-18px] md:w-[400px] lg:w-[500px] md:left-[290px] lg:top-[0px] leading-7">
                {info?.name}
              </h2>
              <p className="text-[#686B78] md:text-[22px] lg:text-[22px] tracking-[1.4px] font-serif absolute md:top-[40px] md:left-[310px] lg:top-[55px]">
                {info?.cuisines && info?.cuisines.join(", ")}
              </p>

              <p className="flex md:w-[55px] md:h-[35px] lg:h-[40px] lg:w-[60px] items-center justify-center rounded-[6px] text-[#fff] text-[19px] text-center font-semibold bg-green-500 absolute md:left-[315px] md:top-[120px] lg:right-[70px] lg:top-[140px]">
                &#9733; {info?.avgRating}
              </p>
            </div>

            <div className="flex items-center mt-[190px] ml-[330px] gap-[10px] lg:ml-[450px]">
              <h2 className="text-[#3E4152] text-[18px] font-semibold tracking-[1px] font-mono md:mt-[-107px] md:ml-[55px] lg:mt-[-55px] lg:ml-[70px]">
                {info?.sla && info?.sla?.slaString}
              </h2>
              <h2 className="text-[#3E4152] text-[18px] font-semibold tracking-[1px] font-mono md:mt-[-107px] md:ml-[20px] lg:mt-[-55px]">
                {info?.costForTwoMessage}
              </h2>
            </div>
          </div>
        </div>

        {/* accordian menu */}
        <div className=" lg:w-[1070px] lg:ml-[-160px] flex flex-col">
          {categories &&
            categories.map((category, index) => (
              <div key={index} className="  mb-[10px]">
                <RestaurantCategory
                  accordianData={category && category?.card?.card}
                  isExpand={index === showIndex}
                  setShowIndex={() => setShowIndex(index)}
                />
              </div>
            ))}
        </div>
      </div>

      <div className="lg:w-[1519.5px] md:w-[802px]">
        <Footer />
      </div>
    </div>
  );
}

export { RestaurantMenu };
