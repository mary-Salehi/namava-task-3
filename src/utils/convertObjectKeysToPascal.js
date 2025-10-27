import convertCamelToPascal from "./convertCamelToPascal";

function convertObjectKeysToPascal(object) {
  const formattedObject = {};
  for (let key in object) {
    const pascalKey = convertCamelToPascal(key);
    formattedObject[pascalKey] = object[key];
  }
  return formattedObject;
}

export default convertObjectKeysToPascal;