import { render, screen } from "@testing-library/react"
import { Help } from "../Components/Help/Help"
import '@testing-library/jest-dom';


// eslint-disable-next-line no-undef
test("Should load Help component", () => {
    render(<Help />);

     const heading = screen.getByRole("heading");
     // eslint-disable-next-line no-undef
     expect(heading).toBeInTheDocument();
});


// eslint-disable-next-line no-undef
test("Should load button inside Help component", () => {
    render(<Help />);

     const button = screen.getByText("Submit");
     // eslint-disable-next-line no-undef
     expect(button).toBeInTheDocument();
});