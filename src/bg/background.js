// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed!');
});

//example of using a message handler from the inject scripts
chrome.runtime.onMessage.addListener((//message, sender, sendResponse//
  ) => {
    console.log('Extension message handler running')
  }
);
