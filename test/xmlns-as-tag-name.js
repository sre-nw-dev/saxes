"use strict";

require(".").test({
  name: "xmlns as tag name",
  xml: "<xmlns/>",
  expect: [
    [
      "opentagstart",
      {
        name: "xmlns",
        attributes: {},
        ns: {},
      },
    ],
    [
      "opentag",
      {
        name: "xmlns",
        uri: "",
        prefix: "",
        local: "xmlns",
        attributes: {},
        ns: {},
        isSelfClosing: true,
      },
    ],
    [
      "closetag",
      "xmlns",
    ],
  ],
  opt: {
    xmlns: true,
  },
});
