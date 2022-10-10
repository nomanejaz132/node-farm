import getSuspender from './getSuspender';

function fetchData(url) {
  const promise = fetch(url).then((res) => res.json());
  // .then((res) => res.message);
  return getSuspender(promise);
}

export default fetchData;
