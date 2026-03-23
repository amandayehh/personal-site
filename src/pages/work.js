import { useEffect } from 'react';

const ExampleRedirect = () => {
  useEffect(() => {
    window.location.replace('https://docs.google.com/spreadsheets/d/1whP8bzFwvkcDQD66ZhSizF6V3a93LIkv1IqubUQb9sg/edit?ouid=117237055574131097484&usp=sheets_home&ths=true');
  }, []);

  return null;
};

export default ExampleRedirect;
