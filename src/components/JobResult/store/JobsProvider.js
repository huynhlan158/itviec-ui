import { useReducer } from 'react';
import reducer, { initState } from '../state/reducer';
import JobsContext from './JobsContext';

function JobsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return <JobsContext.Provider value={[state, dispatch]}>{children}</JobsContext.Provider>;
}

export default JobsProvider;
