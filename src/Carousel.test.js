import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

test('renders without crashing', () => {
  render(<Carousel />);
});

test('matches snapshot', () => {
  const { asFragment } =render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});


it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("hides and shows arrows", function() {
  const { queryByTestId } = render(<Carousel />);
  // first, only right arrow should show
  const rightArrow = queryByTestId("right-arrow");
  let leftArrow = queryByTestId("left-arrow"); // should return null
  // First, only the right arrow should show
  expect(rightArrow).toBeInTheDocument();
  expect(leftArrow).not.toBeInTheDocument();

  // move forward in the carousel
  fireEvent.click(rightArrow); 
  leftArrow = queryByTestId("left-arrow"); //update left arrow
  // both arrows should show
  expect(leftArrow).toBeInTheDocument();
  expect(rightArrow).toBeInTheDocument();

  // move forward in the carousel
  fireEvent.click(rightArrow);
  // lastly, only left arrow should show
  expect(leftArrow).toBeInTheDocument();
  expect(rightArrow).not.toBeInTheDocument();
});


it("works when you click on the left arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  // move forward in the carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
});
