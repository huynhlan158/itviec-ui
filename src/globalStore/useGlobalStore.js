import { useContext } from 'react';
import GlobalContext from './GlobalContext';

export const useGlobalStore = () => {
  const [headerShrink, setHeaderShrink] = useContext(GlobalContext);
  return [headerShrink, setHeaderShrink];
};
