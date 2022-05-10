var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/joshstein/Documents/GitHub/ankr-multichain/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/joshstein/Documents/GitHub/ankr-multichain/app/routes/results.tsx
var results_exports = {};
__export(results_exports, {
  default: () => Results,
  loader: () => loader
});
var import_react3 = require("@remix-run/react");
var url = "https://rpc.ankr.com/multichain";
var body = {
  jsonrpc: "2.0",
  method: "ankr_getNFTsByOwner",
  params: {
    walletAddress: "0x186Ea56F0a40c5593A697B3E804968b8C5920Ff3",
    pageSize: 15,
    pageToken: ""
  },
  id: 1
};
var loader = async () => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body)
  });
  const data = await res.json();
  return data.result;
};
function Results() {
  const { owner, assets } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "gm, ", owner), assets.map((nft) => /* @__PURE__ */ React.createElement("div", {
    key: nft.tokenId
  }, /* @__PURE__ */ React.createElement("h3", null, nft.name ? nft.name : "name not found"), /* @__PURE__ */ React.createElement("h4", null, "Collection Name:", " ", nft.collectionName ? nft.collectionName : "collectionName not found"), /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: nft.imageUrl ? nft.imageUrl : "imageUrl not found",
    rel: "noreferrer"
  }, nft.imageUrl ? nft.imageUrl : "imageUrl not found"), /* @__PURE__ */ React.createElement("p", null, "Blockchain: ", nft.blockchain), /* @__PURE__ */ React.createElement("p", null, "TokenID: ", nft.tokenId), /* @__PURE__ */ React.createElement("p", null, "TokenURL: ", nft.tokenUrl), /* @__PURE__ */ React.createElement("p", null, "Symbol: ", nft.symbol), /* @__PURE__ */ React.createElement("p", null, "Type: ", nft.contractType), /* @__PURE__ */ React.createElement("p", null, "Contract Address: ", nft.contractAddress), /* @__PURE__ */ React.createElement("br", null))));
}

// route:/Users/joshstein/Documents/GitHub/ankr-multichain/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/results",
    rel: "noreferrer"
  }, "Ankr Multichain API"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "564c4ee5", "entry": { "module": "/build/entry.client-ZKWJT4LP.js", "imports": ["/build/_shared/chunk-TQNWTK54.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-E74OD63S.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-EKJONMSH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/results": { "id": "routes/results", "parentId": "root", "path": "results", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/results-5Q422XAJ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-564C4EE5.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/results": {
    id: "routes/results",
    parentId: "root",
    path: "results",
    index: void 0,
    caseSensitive: void 0,
    module: results_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
