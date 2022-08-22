// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

import * as detectEthereumProvider from "https://unpkg.com/@metamask/detect-provider@1.2.0/dist/detect-provider.min.js"

chrome.runtime.onInstalled.addListener(async() => {
  console.log('Extension installed!');

  const provider = await detectEthereumProvider

if (provider) {

  console.log('Ethereum successfully detected!')

  // From now on, this should always be true:
  // provider === window.ethereum

  // Access the decentralized web!

  // Legacy providers may only have ethereum.sendAsync
  // const chainId = await provider.request({
  //   method: 'eth_chainId'
  // })

  console.log("provider should equal window.ethereum: ", provider)
} else {

  // if the provider is not detected, detectEthereumProvider resolves to null
  console.error('Please install MetaMask!', error)
}

});

//example of using a message handler from the inject scripts
chrome.runtime.onMessage.addListener((//message, sender, sendResponse//
  ) => {
    console.log('Extension message handler running')
  }
);
