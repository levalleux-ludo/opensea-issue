import { Chain, OpenSeaSDK, OrderSide } from "opensea-js";
import { JsonRpcProvider } from "ethers";

const TOKEN_ID="1729162321012";
const NFT_CONTRACT="0x71ebc24b00f65d6cd5848cef5971595dab6027f9";
const JSON_RPC="https://rpc-amoy.polygon.technology/"

async function main() {
  const provider = new JsonRpcProvider(JSON_RPC);
  const fulfillerAddress = "0xC2E8F052924CA9432F0a416a1b9f9DAedabaEBF2";
  const openseaSdk = new OpenSeaSDK(
    provider,
    { chain: Chain.Amoy }
  );
  const osOrder = await openseaSdk.api.getOrder({
    assetContractAddress: NFT_CONTRACT,
    tokenId: TOKEN_ID,
    side: OrderSide.OFFER
  });
  console.log({
    fulfillerAddress,
    osOrder: {
      orderHash: osOrder.orderHash,
      protocolAddress: osOrder.protocolAddress,
      side: osOrder.side
    }
  });
  if (osOrder) {
    const ffd = await openseaSdk.api.generateFulfillmentData(
      fulfillerAddress,
      osOrder.orderHash || "",
      osOrder.protocolAddress,
      osOrder.side
    );
    console.log({ ffd });  
  }
};

main().then(() => {
  console.log("Success");
}).catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
