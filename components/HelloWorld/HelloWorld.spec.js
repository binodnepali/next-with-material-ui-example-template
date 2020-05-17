import { createShallow } from "@material-ui/core/test-utils";

import HelloWorld from "./HelloWorld";

describe("<HelloWorld/>", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it("should render a button with hello world text", () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.children().text()).toContain("Hello World");
  });
});
