import { useEffect, useState } from "react";
import axios from 'axios';
import { RestaurantCards } from "../RestaurantCards/RestaurantCards";
import { Link } from "react-router-dom";
import { Shimmer } from "../Shimmer/Simmer";
import { Footer } from "../Footer/Footer";



function Body() {
     
    // state variables for Restaurant Lists
    const [listOfRestaurents, setListOfRestaurent] = useState([]);
    // console.log("listOfRestaurents", listOfRestaurents);

    const [nextOffSet, setNextOffSet] = useState(null);
    // console.log("nextOffset", nextOffSet);  

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchData();
    }, []);

useEffect(() => {
    const handleScroll = () => {
        if(
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            fetchMoreData();
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
}, [nextOffSet]);



    const fetchData = async () => {
    try {
            const response = await axios.get(import.meta.env.VITE_BASE_URL + "/api/proxy/swiggy/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");    
            console.log("response:-", response.data);
            const resListsFromData = response.data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            const nextPageData = response.data?.data?.pageOffset?.nextOffset;
            setNextOffSet(nextPageData);
            setListOfRestaurent(resListsFromData);
            setLoading(false);
    } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
    }        
   };


    const fetchMoreData = async () => {
        if (!nextOffSet) return;

        try {
            const response = await axios.get(import.meta.env.VITE_BASE_URL + "/api/proxy/swiggy/dapi/restaurants/list/v5", {
                params: {
                    lat: 12.9351929,
                    lng: 77.62448069999999,
                    'is-seo-homepage-enabled': true,
                    page_type: 'DESKTOP_WEB_LISTING',
                    offset: nextOffSet
                }
            })
            // console.log("next", response);
            const resListsDataForNext = await response.data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log("resListData", resListsDataForNext);
            const next = await response.data?.data?.pageOffset?.nextOffset;
            // append the newly fetch data to the existing list 
            setListOfRestaurent(prevData => [...prevData, ...resListsDataForNext]);

            // update next offset for the next fetch
            setNextOffSet(next);

        } catch (error) {
            console.error("Error while fetching next data", error);
        }
    }

  

    return(
    <div>
        {loading ? (
            <Shimmer />
            // {}
        ) : (
            <div className={` flex justify-center items-center gap-14 flex-wrap mt-8 ml-10 mr-10 mb-10 md:min-h-[425.5px] lg:min-h-[427px] `} data-testid="restaurant-list">
                {
                   listOfRestaurents && listOfRestaurents.map((restaurant) => (
                        <Link style={{ textDecoration: 'none' }} key={restaurant.info.id} to={`/restaurant/${restaurant && restaurant.info?.id}`} data-testid="loading-indicator">
                            <RestaurantCards key={restaurant.info.id} resData={restaurant}/>
                        </Link>
                    ))}
            </div>
        )}
        <Footer/>
    </div>
    
    )
}



export {Body};