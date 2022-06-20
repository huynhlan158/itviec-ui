import { useContext } from 'react';
import JobsContext from './JobsContext';

export const useStore = () => {
  const [state, dispatch] = useContext(JobsContext);
  return [state, dispatch];
};
