import {
  useLoaderData
} from "/build/_shared/chunk-TQNWTK54.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/Users/noahhein/Dev/ankr-multichain/app/routes/results.tsx?browser
init_react();

// app/routes/results.tsx
init_react();
function Results() {
  const { owner, assets } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "gm"), /* @__PURE__ */ React.createElement("h1", null, owner), assets.map((nft) => /* @__PURE__ */ React.createElement("div", {
    key: nft.tokenId
  }, /* @__PURE__ */ React.createElement("h3", null, nft.imageUrl ? nft.imageUrl : "imageUrl not found"), /* @__PURE__ */ React.createElement("p", null, nft.tokenUrl), /* @__PURE__ */ React.createElement("p", null, nft.collectionName))));
}
export {
  Results as default
};
//# sourceMappingURL=/build/routes/results-RUCCIQDA.js.map
