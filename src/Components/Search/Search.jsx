import axios from "axios";
import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { Footer } from "../Footer/Footer";

function Search() {
  const [search, setSearch] = useState(null);
  console.log("search", search);

  // const [slide, setSlide] = useState(0);

  useEffect(() => {
    fetchSearchData();
  }, []);

  const fetchSearchData = async () => {
    try {
      const data = await axios.get(
        "/api/dapi/landing/PRE_SEARCH?lat=12.9351929&lng=77.62448069999999"
      );
      console.log("search data:- ", data);

      const searchData = data.data.data.cards[1].card.card;
      console.log("cuisines", searchData);
      setSearch(searchData);
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  };

  const { header, imageGridCards } = (search && search) || {};
  // const totalImages = imageGridCards && imageGridCards?.info || {};
  // console.log("totalImages:-", totalImages);

  return (
    <div className="md:min-h-[568px] mt-[30px] relative md:text-center">
      <div className="lg:h-[67.3vh] md:h-[67.2vh]">
      <div className="relative ">
        <input
          className="outline-none pt-[15px] pb-[15px] pl-[20px] mt-[30px] ml-[30px] md:w-[520px] lg:w-[600px] border border-solid border-[#DFE0E3] rounded-[3px] text-[18px] m-auto"
          type=" text"
          placeholder="Search for restaurants and food"
        />

        <RiSearchLine className="absolute text-[#3E4152] text-[22px] md:top-[49px] opacity-80 md:left-[640px] lg:left-[1030px]"/>
      </div>

      <h1 className="mt-[30px] ml-[40px] text-[#3E4152] text-[26px] font-serif font-bold opacity-90">
        {header && header.title}
      </h1>

      <div className="flex lg:mt-[50px] lg:ml-[170px] lg:mr-[80px] md:mt-[40px] md:ml-[10px] md:mr-[10px]">
        {imageGridCards &&
          imageGridCards?.info.map((img, id) => {
            console.log("img:-", img)
            return (
              <div key={id} className={`w-[690px]`}>
                <img
                  key={id}
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${img?.imageId}`}
                  alt=""
                  className="md:w-[75px] lg:w-[80px] cursor-pointer"
                />
              </div>
            );
          })}
      </div>
      </div>
      <Footer />
    </div>
  );
}

export { Search };
