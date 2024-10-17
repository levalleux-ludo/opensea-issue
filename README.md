# opensea-issue
project to illustrate issue with Opensea API on testnet

The issue is a Bad response from the Opensea API server (resposne 500 Internal Server Error), when calling the [fulfill offer endpoint](https://docs.opensea.io/reference/generate_offer_fulfillment_data_v2)

## Install project dependencies
```
npm ci
```

## Set an Opensea Api Key in a .env file
(see .env.example file as a template)
```
OPENSEA_API_KEY=...
```

## Launch the script on mainnet
```
npm run mainnet
```
=> this should be working


## Launch the script on testnet
```
npm run testnet
```
=> this is failing when getting the fulfillment_data
```
Error: response body is not valid JSON (operation="bodyJson", info={ "response": {  } }, code=UNSUPPORTED_OPERATION, version=6.13.4)
```
Failure occurs when trying to convert the API response into JSON.
Debugger can be used to check the response from the API server: we see 500 - Internal Server Error
![image](https://github.com/user-attachments/assets/59080ee9-9bd7-4df9-9557-5b2247d711a8)
