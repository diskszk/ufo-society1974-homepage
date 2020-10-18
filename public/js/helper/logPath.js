import { useSelector } from 'react-redux';

export const logPath = () => {

  const selector = useSelector(state => state);
  const currentPath = selector.router.location.pathname
  console.log(`current path: ${currentPath}`);
}