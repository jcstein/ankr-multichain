import { useLoaderData } from "@remix-run/react";

const url = "https://rpc.ankr.com/multichain";

const body = {
  jsonrpc: "2.0",
  method: "ankr_getNFTsByOwner",
  params: {
    walletAddress: "0x186Ea56F0a40c5593A697B3E804968b8C5920Ff3",
    pageSize: 15,
    pageToken: "",
  },
  id: 1,
};

export const loader = async () => {
  const data = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  });
  console.log(data);
  return data;
};

export default function Results() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>gm</h1>
      <h1>{data}</h1>
    </div>
  );
}
