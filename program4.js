// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObj) {
    const result = {};
    for (const key in flatObj) {
      const parts = key.split('.'); // Split key by dots to get nested path
      let current = result;
      for (let i = 0; i < parts.length - 1; i++) { // Iterate until last part
        if (!current[parts[i]]) {
          current[parts[i]] = {}; // Create nested object if not exists
        }
        current = current[parts[i]]; // Move to next level
      }
      current[parts[parts.length - 1]] = flatObj[key]; // Set value at the last level
    }
    return result;
}
  