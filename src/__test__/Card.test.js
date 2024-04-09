import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Cart } from "../Components/Cart/Cart";
import { Provider } from "react-redux";
import { appStore } from "../Utils/appStore";
import { BrowserRouter } from "react-router-dom";


// eslint-disable-next-line no-undef
test("Should render the Cart Component", () => {
    render(
        <BrowserRouter>
           <Provider store={appStore}>
              <Cart />
           </Provider>
        </BrowserRouter>
        
    );
   
});