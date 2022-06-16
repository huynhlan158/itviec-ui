import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, className, md }) {
  return <button className={cx('wrapper', className, { md })}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  md: PropTypes.bool,
};

export default Button;
