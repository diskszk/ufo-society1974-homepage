import React from 'react';
import Router from './Router';

import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();
  const selector = useSelector(state => state);

  console.log(selector.router);

  // いまいるページのURLを取得
  const pathName = selector.router.location.pathname

  console.log(pathName);

  return (
    <div>
      <Router rootPath={pathName} />
    </div>
  );
}

export default App;

// import AllSongs from './components/AllSongs';
// import SingUp from './pages/SignUp';

// import { useDispatch, useSelector } from 'react-redux';


// const App = () => {
//   const dispatch = useDispatch();
//   const selector = useSelector((state) => state);
//   console.log(selector.users);
//   return (
//     <div className="lyric-page">
//       {/* <AllSongs /> */}
//       <SingUp />

//     </div>
//   );
// }

// export default App;