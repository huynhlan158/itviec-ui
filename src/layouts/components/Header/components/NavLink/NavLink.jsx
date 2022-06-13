import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './NavLink.module.scss';

const cx = classNames.bind(styles);

const NavLink = forwardRef(({ children, multilevel = false, to, className, ...passProps }, ref) => {
  let Wrap = 'div';

  if (to) {
    Wrap = Link;
  }

  return (
    <Wrap className={cx('nav-link', className)} to={to} ref={ref} {...passProps}>
      <span className={cx('content', { multilevel })}>{children}</span>
    </Wrap>
  );
});

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  multilevel: PropTypes.bool,
  to: PropTypes.string,
};

export default NavLink;
