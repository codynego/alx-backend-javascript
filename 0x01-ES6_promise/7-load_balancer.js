export default function loadBalancer(chinaDownload, USDownload) {
  const promises = [chinaDownload, USDownload];
  Promise.race(promises)
    .then((value) => {
      console.log(value);
    });
}
