function serializeArray(arr){
  var str = ''
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] != '') {
      str += arr[i] + '\n'
    }
  };
  return str
}
function deserializeArray(str){
  var arr = []
  str = str.split('\n')
  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] != '') {
      arr.push(str[i])
    }
  };
  return arr
}