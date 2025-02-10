// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
    let result = {};
    helper(unflatObject,result,"");
    return result;
}
function helper(obj, result, prefix) {
    for (const key in obj) {
      const value = obj[key];
      let newPrefix = prefix.length>0?prefix+"."+key:key;
      if (typeof value === 'object' && value !== null) {
        // Recursively flatten nested objects
        helper(value, result, newPrefix);
      } else {
        // Add key-value pair to result with proper prefix
        result[newPrefix] = value;
      }
    }
}