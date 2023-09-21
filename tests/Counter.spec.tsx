import React from "react";
import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../src/Counter";

describe("Counter", () => {
  test("should show count", () => {
    render(<Counter />);

    expect(screen.getByText(/Count is 0/i)).toBeDefined();
  });

  test("should increase count", () => {
    render(<Counter />);
    expect(screen.getByText(/Count is 0/i)).toBeDefined();

    const plusButton = screen.getByRole("button", {
      name: "+",
    });

    fireEvent.click(plusButton);

    expect(screen.getByText(/Count is 1/i)).toBeDefined();
  });

  test("should decrease count", () => {
    render(<Counter defaultValue={1} />);

    const minusButton = screen.getByRole("button", {
      name: "-",
    });

    fireEvent.click(minusButton);

    expect(screen.getByText(/Count is 0/i)).toBeDefined();
  });

  test("should not decrease count when count is 0", () => {
    render(<Counter />);

    const minusButton = screen.getByRole("button", {
      name: "-",
    });

    fireEvent.click(minusButton);

    expect(screen.getByText(/Count is 0/i)).toBeDefined();
  });
});
