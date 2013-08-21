chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    var isBlacklisted = false
      , isFiltered = false
      , options = extension.Cook.options
    var url = parseURL(details.url)
    for (var i = options.blacklist.length - 1; i >= 0; i--) {
      isBlacklisted |= !!url.host.match(new RegExp(options.blacklist[i]))
      if(isBlacklisted) break
    };
    if (!isBlacklisted) {
      console.log('not blacklisted:',url.host)
    }else{
      console.log('blacklisted:',url.host)
      for (var i = options.filter.length - 1; i >= 0; i--) {
        isFiltered |= !!url.host.match(new RegExp(options.filter[i]))
        if(isFiltered) break
      };
      if(isFiltered) {
        console.log('leaving cookies:',url.host)
      }else{
        console.log(details.requestHeaders)
        for (var i = 0; i < details.requestHeaders.length; ++i) {
          if (details.requestHeaders[i].name === 'Cookie') {
            console.log('removeing cookies:',url.host)
            details.requestHeaders.splice(i, 1);
          }
        }
      }
    }
    return {requestHeaders: details.requestHeaders};
  },
  {urls: ["<all_urls>"]},
  ["blocking", "requestHeaders"]);
