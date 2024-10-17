import { Chain } from "opensea-js";
import { config } from "dotenv";
import { main } from "./common";
config();

main({
  chain: Chain.Sepolia,
  jsonRpc: "https://eth-sepolia.g.alchemy.com/v2/demo",
  openseaApiKey: process.env.OPENSEA_API_KEY,
  nftContract: "0x4d7fc313Ee6ba716E7d21F26353dD006b209a54f",
  tokenId: "1729184592477"
}).then(() => {
  console.log("Success");
}).catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
