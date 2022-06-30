import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Blog.module.scss';

const cx = classNames.bind(styles);

function Blog({ children }) {
  return (
    <div className={cx('wrapper')}>
      <h1>Blog Page</h1>
      <p>Not yet developed...</p>
    </div>
  );
}

Blog.propTypes = {
  children: PropTypes.node,
};

export default Blog;
