import axios from 'axios';

async function getApi() {
  await axios({
    method: 'get',
    url: 'https://makeup-api.herokuapp.com/api/v1/products.json',
    responseType: 'json',
  });
}
getApi()
  .then((response) => response.data)
  .catch((error) => console.error(error));
console.log(getApi());
// export default Api;
