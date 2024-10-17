import { Chain, OpenSeaSDK, OrderSide } from "opensea-js";
import { JsonRpcProvider } from "ethers";

export async function main(args: {chain: Chain, jsonRpc: string, openseaApiKey: string, nftContract: string, tokenId: string}) {
  const provider = new JsonRpcProvider(args.jsonRpc);
  const fulfillerAddress = "0x50dDC6B8B078d650449Ecae5558b035215F9F886";
  const openseaSdk = new OpenSeaSDK(
    provider,
    {
      chain: args.chain,
      apiKey: args.openseaApiKey
    }
  );
  const osOrder = await openseaSdk.api.getOrder({
    assetContractAddress: args.nftContract,
    tokenId: args.tokenId,
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
