// Async testing
const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people through ASYNC call', done => {
  expect.assertions(1);
  swapi.getStarWarsPeopleAsync(fetch).then(data => {
    //console.log('[ASYNC]: ', data);

    expect(data.count).toEqual(87);
    done();
  });
});

it('calls swapi to get people with a PROMISE', done => {
  expect.assertions(2);
  // Use return for promises....easier!
  return swapi.getStarWarsPeoplePromise(fetch).then(data => {
    //console.log('[PROMISE]: ', data);
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
    done();
  });
});
