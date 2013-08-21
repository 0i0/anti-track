console.log("firsttime")
var options = {
  blacklist:['google\.','goog\.','gstatic\.'],
  filter:['talkgadget\.google','mail\.google','accounts\.google']
}

extension.Cook.f.writeOptions(options);
extension.Cook.f.refreshOptions()