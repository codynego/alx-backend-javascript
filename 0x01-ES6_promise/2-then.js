export default function handleResponseFromAPI(promise) {
  const successObject = {
    status: 200,
    body: 'success',
  };
  const logMessage = 'Got a response from the API';

  return promise
    .then(() => (successObject))
    .catch(() => new Error())
    .finally(() => console.log(logMessage));
}
