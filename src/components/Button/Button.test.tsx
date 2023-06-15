import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Test", () => {
  it("asd", () => {
    render(<Button label="asd" color="red" handleClick={() => {}} />);
  });
});
