import { useLoaderData } from "@remix-run/react";

const url = "https://rpc.ankr.com/multichain";

const body = {
  jsonrpc: "2.0",
  method: "ankr_getNFTsByOwner",
  params: {
    walletAddress:
      "0x186Ea56F0a40c5593A697B3E804968b8C5920Ff3",
    pageSize: 3,
    pageToken: "",
  },
  id: 1,
};

export const loader = async () => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data.result;
};

export default function Results() {
  const { owner, assets } = useLoaderData(); // data.result ----> {owner: somestring, assets: [nft]}
  return (
    <div>
      <h1>gm</h1>
      <h1>{owner}</h1>
      {assets.map((nft: any) => (
        <div key={nft.tokenId}>
          <h3>
            {nft.imageUrl
              ? nft.imageUrl
              : "imageUrl not found"}
          </h3>
          <p>{nft.tokenUrl}</p>
          <p>{nft.collectionName}</p>
        </div>
      ))}
    </div>
  );
}
