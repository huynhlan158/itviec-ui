import { useReducer } from 'react';
import GlobalContext from './GlobalContext';
import reducer, { initState } from '~/state/reducer';

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return <GlobalContext.Provider value={[state, dispatch]}>{children}</GlobalContext.Provider>;
}

export default GlobalProvider;
