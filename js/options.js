function saveOptions() {
  var opts = extension.Cook.f.readOptions();
    
  blacklist = document.getElementById('blacklist').value;
  filter = document.getElementById('filters').value;


  opts.blacklist = deserializeArray(blacklist)
  opts.filter = deserializeArray(filter)

  extension.Cook.f.writeOptions(opts);

  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);

}

function loadOptions() {
  var opts = extension.Cook.options;
  document.getElementById("blacklist").value = serializeArray(opts.blacklist);
  document.getElementById("filters").value = serializeArray(opts.filter);

}

function onLoad() {
    loadOptions();
    document.querySelector('#submit').addEventListener('click', saveOptions);
}

document.addEventListener('DOMContentLoaded', onLoad);