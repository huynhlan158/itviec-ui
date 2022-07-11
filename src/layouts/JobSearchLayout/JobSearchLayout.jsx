import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './JobSearchLayout.module.scss';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

const cx = classNames.bind(styles);

function JobSearchLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header search />
      <div className={cx('container')}>{children}</div>
      <Footer />
    </div>
  );
}

JobSearchLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default JobSearchLayout;
