import { Chain } from "opensea-js";
import { config } from "dotenv";
import { main } from "./common";
config();

main({
  chain: Chain.Amoy,
  jsonRpc: "https://rpc-amoy.polygon.technology/",
  openseaApiKey: process.env.OPENSEA_API_KEY,
  nftContract: "0x71ebc24b00f65d6cd5848cef5971595dab6027f9",
  tokenId: "1729162321012"
}).then(() => {
  console.log("Success");
}).catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
