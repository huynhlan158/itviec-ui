import { useContext } from 'react';
import GlobalContext from './GlobalContext';

export const useGlobalStore = () => {
  const [state, dispatch, headerShrink, setHeaderShrink, searchTextError, setSearchTextError] =
    useContext(GlobalContext);
  return [state, dispatch, headerShrink, setHeaderShrink, searchTextError, setSearchTextError];
};
