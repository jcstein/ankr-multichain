import {
  useLoaderData
} from "/build/_shared/chunk-LES5B4B7.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/Users/joshstein/ankrremix/app/routes/results.tsx?browser
init_react();

// app/routes/results.tsx
init_react();
function Results() {
  var _a, _b;
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "gm"), /* @__PURE__ */ React.createElement("h1", null, data ? (_b = (_a = data == null ? void 0 : data.result) == null ? void 0 : _a.assets[0]) == null ? void 0 : _b.imageUrl : "no data"));
}
export {
  Results as default
};
//# sourceMappingURL=/build/routes/results-7OYTE2Z4.js.map
