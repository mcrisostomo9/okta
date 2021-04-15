function uniqueNames(names1, names2) {
  // Merge both arrays first
  const mergedArr = [...names1, ...names2];

  // Initialize unique name array
  let uniqueArr = [];

  // Loop through merged array
  mergedArr.forEach((name) => {
    // Check if current name is not in the unique array
    if (!uniqueArr.includes(name)) {
      // Push name into unique array if not found
      uniqueArr.push(name);
    }
  });

  return uniqueArr;
}
