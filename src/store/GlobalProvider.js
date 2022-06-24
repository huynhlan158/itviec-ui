import { useReducer, useState } from 'react';
import GlobalContext from './GlobalContext';
import reducer, { initState } from '~/state/reducer';

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const [headerShrink, setHeaderShrink] = useState(false);
  const [searchTextError, setSearchTextError] = useState(false);

  return (
    <GlobalContext.Provider
      value={[state, dispatch, headerShrink, setHeaderShrink, searchTextError, setSearchTextError]}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
