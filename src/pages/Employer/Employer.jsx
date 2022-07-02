import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Employer.module.scss';

const cx = classNames.bind(styles);

function Employer({ children }) {
  return (
    <div className={cx('wrapper')}>
      <h1>Employer Page</h1>
      <p>Not yet developed...</p>
    </div>
  );
}

Employer.propTypes = {
  children: PropTypes.node,
};

export default Employer;
