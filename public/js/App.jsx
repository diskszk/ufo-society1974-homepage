import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import SongsTable from './components/SongsTable';

const App = () => {

  const selector = useSelector(state => state);

  console.log(selector.router);

  // いまいるページのURLを取得
  const pathName = selector.router.location.pathname

  console.log(pathName);

  return (
    <SongsTable />
  );
}

export default App;
