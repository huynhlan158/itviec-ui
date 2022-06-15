import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import PopperWrapper from '../PopperWrapper';
import MenuItem from './MenuItem';
import MenuSubItem from './MenuSubItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [subMenu, setSubMenu] = useState(items[0]);

  const handleMenuHover = (item) => {
    setSubMenu(item);
  };

  return (
    <Tippy
      render={(attrs) => (
        <div className={cx('container')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')} fixed>
            <div className={cx('title')}>
              {items.map((item, index) => (
                <MenuItem
                  key={index}
                  leftIcon={item.icon}
                  nextIcon={item.data && true}
                  to={item.to}
                  onMouseEnter={() => handleMenuHover(item)}
                >
                  {item.title}
                </MenuItem>
              ))}
            </div>

            {subMenu.data && (
              <div
                className={cx(
                  'sub-menu',
                  Math.ceil(subMenu.data.length / 8) === 2
                    ? 'twoColumn'
                    : Math.ceil(subMenu.data.length / 8) === 3
                    ? 'threeColumn'
                    : Math.ceil(subMenu.data.length / 8) === 4
                    ? 'fourColumn'
                    : 'oneColumn',
                )}
              >
                {subMenu.data.map((subItem, index) => {
                  return <MenuSubItem key={index}>{subItem}</MenuSubItem>;
                })}

                {subMenu.viewAll && (
                  <MenuSubItem className={cx('view-all')}>
                    <Link to={subMenu.link}>{`View all Jobs by ${subMenu.viewAll}`}</Link>
                  </MenuSubItem>
                )}
              </div>
            )}
          </PopperWrapper>
        </div>
      )}
      interactive
      placement="bottom-start"
      appendTo={document.body}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  items: PropTypes.array,
  leftIcon: PropTypes.bool,
};

export default Menu;
