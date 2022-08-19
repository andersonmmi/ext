// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

//example of using a message handler from the inject scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    chrome.pageAction.show(sender.tab.id);
    sendResponse();
  }
);
