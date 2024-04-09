import { Routes, Route } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Body } from "../Components/Body/Body";
import {Error} from "../Components/Error/Error";
import { Search } from "../Components/Search/Search";
import { Help } from "../Components/Help/Help";
import { RestaurantMenu } from "../Components/RestaurantMenu/RestaurantMenue";
import { Cart } from "../Components/Cart/Cart";



function CustomRoutes() {
    return (
        
          <Routes>
            <Route path="/" element={<> <Header/><Body/> </>} />
            <Route path="/search" element={<> <Header/><Search/> </>} />
            <Route path="/help" element={<> <Header/><Help/> </>}/>
            <Route path="/restaurant/:resId" element={<> <Header/><RestaurantMenu/></>}/>
            <Route path="/cart" element={<> <Header/><Cart/> </>}/>
            <Route path="*" element={<Error/>} />
          </Routes>
        
    )
}



export {CustomRoutes};