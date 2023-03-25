import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";

describe("Button component", () => {
  it("Renders", () => {
    render(<Button text="Button" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("shows props text", () => {
    render(<Button text="buy" />);
    const button = screen.getByText("buy");
    expect(button).toBeInTheDocument();
  });

  test("does not throw error when clicked", () => {
    const buttonText = "Click me";
    render(<Button text={buttonText} />);
    const buttonElement = screen.getByText(buttonText);
    fireEvent.click(buttonElement);
    expect(() => {
      fireEvent.click(buttonElement);
    }).not.toThrow();
  });
});
