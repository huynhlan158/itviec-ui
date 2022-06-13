import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuSubItem({ children, className }) {
  return <div className={cx('menu-subitem', className)}>{children}</div>;
}

MenuSubItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default MenuSubItem;
