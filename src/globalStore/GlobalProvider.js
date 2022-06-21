import { useState } from 'react';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [headerShrink, setHeaderShrink] = useState(false);

  return <GlobalContext.Provider value={[headerShrink, setHeaderShrink]}>{children}</GlobalContext.Provider>;
}

export default GlobalProvider;
