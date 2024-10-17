import { Chain } from "opensea-js";
import { config } from "dotenv";
import { main } from "./common";
config();

main({
  chain: Chain.Mainnet,
  jsonRpc: "https://ethereum-rpc.publicnode.com",
  openseaApiKey: process.env.OPENSEA_API_KEY,
  nftContract: "0x3999877754904d8542ad1845d368fa01a5e6e9a5",
  tokenId: "63"
}).then(() => {
  console.log("Success");
}).catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
