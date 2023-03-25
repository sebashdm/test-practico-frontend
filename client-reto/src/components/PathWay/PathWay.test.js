import React from "react";
import { render, screen } from "@testing-library/react";
import PathWay from "./index";

describe("PathWay component", () => {
  test("renders the PathWay with categories", () => {
    const categories = ["Home", "Electronics", "Smartphones"];
    render(<PathWay PathWay={categories} />);
    const PathWayElement = screen.getByTestId("PathWay");
    expect(PathWayElement).toBeInTheDocument();
    expect(PathWayElement.childNodes).toHaveLength(categories.length);
  });

  test("renders the PathWay without categories", () => {
    render(<PathWay />);
    const PathWayElement = screen.getByTestId("PathWay");
    expect(PathWayElement).toBeInTheDocument();
    expect(PathWayElement.childNodes).toHaveLength(0);
  });
});
