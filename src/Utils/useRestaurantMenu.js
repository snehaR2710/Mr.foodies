import axios from "axios";
import { useEffect, useState } from "react"


function useRestaurantMenu(resId) {

    const [resInfo, setResInfo] = useState([]);
    console.log("resInfo in hook folder;-", resInfo);


    useEffect(() => {
        fetchResMenu();
    }, []);



    const fetchResMenu = async () => {

        try {
            const response = await axios.get(`/api/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    
            const data = await response?.data?.data?.cards
            console.log("data;", data);
            setResInfo(data)
        } catch (error) {
            console.error("Error while fetching Data:- ", error);
        }
    }

    return resInfo;

}


export {useRestaurantMenu}