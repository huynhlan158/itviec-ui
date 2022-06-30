import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Pending.module.scss';

const cx = classNames.bind(styles);

function Pending({ children }) {
  return (
    <div className={cx('wrapper')}>
      <h1>{window.location.pathname.slice(10, window.location.pathname.length)} Pending Page</h1>
      <p>Not yet developed...</p>
    </div>
  );
}

Pending.propTypes = {
  children: PropTypes.node,
};

export default Pending;
