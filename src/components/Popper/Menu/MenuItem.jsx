import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PopperWrapper from '../PopperWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ children, nextIcon, onMouseEnter }) {
  return (
    <div className={cx('menu-item')} onMouseEnter={onMouseEnter}>
      {children}
      {nextIcon && (
        <span>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      )}
    </div>
  );
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  nextIcon: PropTypes.bool,
  onMouseEnter: PropTypes.func,
};

export default MenuItem;
