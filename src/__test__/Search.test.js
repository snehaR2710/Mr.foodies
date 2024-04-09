import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
// import { Body } from "../Components/Body/Body"
import { Search } from "../Components/Search/Search"


// eslint-disable-next-line no-undef
test("Should render the input", () => {
    render(<Search/>)
    const input = screen.getByPlaceholderText("Search for restaurants and food")
    expect(input).toBeInTheDocument();
})