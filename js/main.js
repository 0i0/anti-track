if (typeof extension == "undefined") {
    var extension = {};
}

extension.Cook = (function(attributes){
  var Cook = {
    options:{}
    ,attributes:attributes
    ,f:function(){ return {
        init:function(){
          Cook.storage = localStorage;
          Cook.f.refreshOptions()
          Cook.f.firsTime()
          return Cook
        },readOptions : function() {
          return (!!Cook.storage.options)?JSON.parse(Cook.storage.options):{};
        },writeOptions : function(opts) {
          Cook.storage.options = JSON.stringify(opts)
          Cook.f.refreshOptions()
        },refreshOptions: function() {
          Cook.options = Cook.f.readOptions()
        },firsTime:function () {
            if (!!Cook.storage.firstTime)
              return;
            var now = new Date().getTime();
            Cook.storage.firstTime = now;
            chrome.tabs.create({url: "html/installed.html"});
        }
      }
    }()
  }

  return Cook.f.init()
})({
  test:'example'
})