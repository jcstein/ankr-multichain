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
  const url = "https://rpc.ankr.com/multichain";
  const body = {
    jsonrpc: "2.0",
    method: "ankr_getNFTsByOwner",
    params: {
      walletAddress: "0x186Ea56F0a40c5593A697B3E804968b8C5920Ff3",
      pageSize: 15,
      pageToken: ""
    },
    id: 1
  };
  const [data, setData] = useState(null);
  async function fetchFromAnkr() {
    const data2 = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body)
    });
    const json = await data2.json();
    console.log("json: ", json);
    setData(json);
    return json;
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    onClick: fetchFromAnkr
  }, "test"), /* @__PURE__ */ React.createElement("h1", null, "gm"), /* @__PURE__ */ React.createElement("h1", null, data ? (_b = (_a = data == null ? void 0 : data.result) == null ? void 0 : _a.assets[0]) == null ? void 0 : _b.imageUrl : "no data"));
}
export {
  Results as default
};
//# sourceMappingURL=/build/routes/results-6L33PT4M.js.map
