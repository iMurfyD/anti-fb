chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(!changeInfo.url) {
    return;
  }
  if(changeInfo.url.includes("facebook")) {
    if(confirm("You're defaulting to facebook. You want to leave, right?")) {
      chrome.tabs.remove(tab.id, function() { });
    } else {
      // Do nothing
    }
  }
}); 

chrome.tabs.onActivated.addListener(function(activeInfo) {
 // how to fetch tab url using activeInfo.tabid
 chrome.tabs.get(activeInfo.tabId, function(tab){
    console.log(tab.url);
 });
}); 