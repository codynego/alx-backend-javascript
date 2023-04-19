export default function getResponseFromAPI() {
  const message = true;
  return new Promise((resolve, reject) => {
    if (message) {
      resolve();
    } else {
      reject();
    }
  });
}
