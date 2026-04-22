// @ts-nocheck
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "../Input";

describe("Input Component", () => {
  it("renders an input element", () => {
    render(<Input placeholder="Enter something" data-testid="input" />);
    const inputElement = screen.getByTestId("input");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("placeholder", "Enter something");
  });

  it("handles user typing correctly", async () => {
    const user = userEvent.setup();
    render(<Input data-testid="input2" />);

    const inputElement = screen.getByTestId("input2");
    await user.type(inputElement, "Hello World");

    expect(inputElement).toHaveValue("Hello World");
  });

  it("has disabled styles when disabled", () => {
    render(<Input disabled data-testid="input3" />);
    expect(screen.getByTestId("input3")).toBeDisabled();
    expect(screen.getByTestId("input3")).toHaveClass("disabled:opacity-50");
  });
});
