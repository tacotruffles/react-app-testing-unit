// Async testing
const fetch = require('node-fetch');
const swapi = require('./script2');

describe('Real-world async api calls', () => {
  it('calls swapi to get people through ASYNC call', done => {
    expect.assertions(1);
    swapi.getStarWarsPeopleAsync(fetch).then(data => {
      expect(data.count).toEqual(87);
      done();
    });
  });

  it('calls swapi to get people with a PROMISE', done => {
    expect.assertions(2);
    // Use return for promises....easier!
    return swapi.getStarWarsPeoplePromise(fetch).then(data => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
      done();
    });
  });
}); // end describe

describe('Mock API call', () => {
  it('getPeople returns count and results', () => {
    const mockFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () =>
          Promise.resolve({
            count: 87,
            results: [0, 1, 2, 3, 4, 5]
          })
      })
    );

    expect.assertions(4);
    return swapi.getStarWarsPeoplePromise(mockFetch).then(data => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });
}); // end describe
