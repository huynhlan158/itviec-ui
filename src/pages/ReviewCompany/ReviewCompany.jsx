import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ReviewCompany.module.scss';

const cx = classNames.bind(styles);

function ReviewCompany({ children }) {
  return (
    <div className={cx('wrapper')}>
      <h1>Review Companies Page</h1>
      <p>Not yet developed...</p>
    </div>
  );
}

ReviewCompany.propTypes = {
  children: PropTypes.node,
};

export default ReviewCompany;
