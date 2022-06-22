import { useContext } from 'react';
import GlobalContext from './GlobalContext';

export const useGlobalStore = () => {
  const [state, dispatch] = useContext(GlobalContext);
  return [state, dispatch];
};
