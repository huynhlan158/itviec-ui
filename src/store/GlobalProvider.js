import { useReducer, useState } from 'react';
import GlobalContext from './GlobalContext';
import reducer, { initState } from '~/state/reducer';

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const [headerShrink, setHeaderShrink] = useState(false);
  const [searchTextError, setSearchTextError] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [currentCity, setCurrentCity] = useState('All Cities');

  return (
    <GlobalContext.Provider
      value={[
        state,
        dispatch,
        headerShrink,
        setHeaderShrink,
        searchTextError,
        setSearchTextError,
        searchText,
        setSearchText,
        currentCity,
        setCurrentCity,
      ]}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
