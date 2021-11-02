import React from "react";
import { render } from "@testing-library/react";
import Index from "./index";

test("renders deploy link", () => {
  const { getByText } = render(<Index />);
  const linkElement = getByText(/Next.js Material UI Template/);
  expect(linkElement).toBeInTheDocument();
});
