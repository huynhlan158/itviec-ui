import { memo } from 'react';
import PropTypes from 'prop-types';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function JobSearchLayout({ children }) {
  return (
    <div>
      <Header search />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

JobSearchLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(JobSearchLayout);
