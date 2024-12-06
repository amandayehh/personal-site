import { navigate } from 'gatsby';
import { useEffect } from 'react';

const ExampleRedirect = () => {
  useEffect(() => {
    navigate('https://docs.google.com/spreadsheets/d/1whP8bzFwvkcDQD66ZhSizF6V3a93LIkv1IqubUQb9sg/edit?ouid=117237055574131097484&usp=sheets_home&ths=true', { replace: true });
  }, []);

  return null;
};

export default ExampleRedirect;