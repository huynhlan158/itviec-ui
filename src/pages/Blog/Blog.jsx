import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Blog.module.scss';

const cx = classNames.bind(styles);

function Blog({ children }) {
  return <h1>Blog</h1>;
}

Blog.propTypes = {
  children: PropTypes.node,
};

export default Blog;
