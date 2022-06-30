import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './BestCompanies.module.scss';

const cx = classNames.bind(styles);

function BestCompanies({ children }) {
  return (
    <div className={cx('wrapper')}>
      <h1>Best Companies Page</h1>
      <p>Not yet developed...</p>
    </div>
  );
}

BestCompanies.propTypes = {
  children: PropTypes.node,
};

export default BestCompanies;
