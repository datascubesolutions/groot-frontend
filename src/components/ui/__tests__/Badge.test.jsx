// @ts-nocheck
import React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "../Badge";

describe("Badge Component", () => {
  it("renders badge with default variant", () => {
    render(<Badge data-testid="badge">Default</Badge>);
    const badge = screen.getByTestId("badge");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent("Default");
    expect(badge).toHaveClass("bg-primary");
  });

  it("applies variant classes correctly", () => {
    render(
      <Badge variant="destructive" data-testid="badge2">
        Error
      </Badge>
    );
    const badge = screen.getByTestId("badge2");

    expect(badge).toHaveClass("bg-destructive");
  });

  it("accepts and merges custom classes", () => {
    render(
      <Badge className="custom-padding" data-testid="badge3">
        Custom
      </Badge>
    );
    const badge = screen.getByTestId("badge3");

    expect(badge).toHaveClass("custom-padding");
    expect(badge).toHaveClass("bg-primary"); // Still retains default variant
  });
});
