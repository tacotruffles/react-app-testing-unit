const fetch = require('node-fetch');
const uri = 'https://swapi.co/api/people'; //'https://jsonplaceholder.typicode.com/users';

const getStarWarsPeoplePromise = fetch => {
  return fetch(uri)
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      return {
        count: data.count,
        results: data.results
      };
    });
};

const getStarWarsPeopleAsync = async fetch => {
  const getRequest = await fetch(uri);
  const data = await getRequest.json();

  //console.log(data);

  return {
    count: data.count,
    results: data.results
  };
};

module.exports = {
  getStarWarsPeoplePromise,
  getStarWarsPeopleAsync
};
