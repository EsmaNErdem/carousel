import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./App";

it("renders without crashing", function() {
    render(<Card />);
});

test('matches snapshot', () => {
    const { asFragment } =render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});