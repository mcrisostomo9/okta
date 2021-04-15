function validatePhone(phone) {
  // Accepts format xxx-xxx-xxxx, (xxx)-xxx-xxxx, xxxxxxxxxx etc.
  const isPhoneValid = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
    phone
  );

  return isPhoneValid;
}

function returnDuplicates(arr) {
  // Flatten array first
  const flattenedArr = [].concat(
    ...arr.map((el) => {
      return Object.values(el);
    })
  );

  // Indices that do not match will return the duplicate item
  return flattenedArr.filter(
    (item, index) => flattenedArr.indexOf(item) !== index
  );
}
