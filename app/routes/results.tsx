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
      <h1>gm, {owner}</h1>
      {assets.map((nft: any) => (
        <div key={nft.tokenId}>
          <h3>{nft.name ? nft.name : "name not found"}</h3>
          <h4>
            Collection Name:{" "}
            {nft.collectionName
              ? nft.collectionName
              : "collectionName not found"}
          </h4>
          <a
            target="_blank"
            href={nft.imageUrl ? nft.imageUrl : "imageUrl not found"}
            rel="noreferrer"
          >
            {nft.imageUrl ? nft.imageUrl : "imageUrl not found"}
          </a>
          <p>Blockchain: {nft.blockchain}</p>
          <p>TokenID: {nft.tokenId}</p>
          <p>TokenURL: {nft.tokenUrl}</p>
          <p>Symbol: {nft.symbol}</p>
          <p>Type: {nft.contractType}</p>
          <p>Contract Address: {nft.contractAddress}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
