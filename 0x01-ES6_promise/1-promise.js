export default function getFullResponseFromAPI(success) {
  const successObject = {
    status: 200,
    body: 'Success',
  };
  const error = 'The fake API is not working currently';

  const myPromise = new Promise((resolve, reject) => {
    if (success) {
      resolve(successObject);
    } else {
      reject(error);
    }
  });
  return myPromise;
}
