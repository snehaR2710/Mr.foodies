import { render, screen } from "@testing-library/react"
import { Header } from "../Components/Header/Header"
import { Provider } from "react-redux";
import { appStore } from "../Utils/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';


// eslint-disable-next-line no-undef
it("Should render Header with logo", () => {
    render(
        <BrowserRouter>
           <Provider store={appStore}>
              <Header />
           </Provider>
        </BrowserRouter>
        
    );

    const logoPng = screen.getByAltText("Logo Png");
    expect(logoPng).toBeInTheDocument();
});

test("Should render Header with Home", () => {
    render(
        <BrowserRouter>
           <Provider store={appStore}>
              <Header />
           </Provider>
        </BrowserRouter>
        
    );

    const homeText = screen.getByText("Home");
    expect(homeText).toBeInTheDocument();
});



test("Should render Header with Search", () => {
    render(
        <BrowserRouter>
           <Provider store={appStore}>
              <Header />
           </Provider>
        </BrowserRouter>
        
    );

    const searchText = screen.getByText("Search");
    expect(searchText).toBeInTheDocument();
});



test("Should render Header with Help", () => {
    render(
        <BrowserRouter>
           <Provider store={appStore}>
              <Header />
           </Provider>
        </BrowserRouter>
        
    );

    const helpText = screen.getByText("Help");
    expect(helpText).toBeInTheDocument();
});


test("Should render Header with Cart item 0", () => {
    render(
        <BrowserRouter>
           <Provider store={appStore}>
              <Header />
           </Provider>
        </BrowserRouter>
        
    );

    // Assert that the shopping cart icon is rendered
    const cartItem = screen.getByText("0");
    expect(cartItem).toBeInTheDocument();
});



test("Should render Header with Cart item 0", () => {
    render(
        <BrowserRouter>
           <Provider store={appStore}>
              <Header />
           </Provider>
        </BrowserRouter>
        
    );

    // Assert that the shopping cart icon is rendered
    const cartItem = screen.getByText("0");
    expect(cartItem).toBeInTheDocument();
});



// queries:-
// getByLabelText: Finds an element by its associated label text.
// getByPlaceholderText: Finds an element by its placeholder text.
// getByAltText: Finds an element by its alt attribute text.
// getByTestId: Finds an element by its data-testid attribute.
// getByText: Finds an element by its text content.
// getByRole: Finds an element by its ARIA role.
// getByTitle: Finds an element by its title attribute.
// getBySelectText: Finds a <select> element by its selected option text.
