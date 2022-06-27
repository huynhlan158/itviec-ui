import { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faBars,
  faCheckToSlot,
  faHeart,
  faRobot,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.scss';
import config from '~/config';
import images from '~/assess/images';
import { JOBS, IT_COMPANIES } from '~/assess/constants';
import NavItem from './components/NavItem';
import Menu from '~/components/Popper/Menu';
import Search from './components/Search';
import { useGlobalStore } from '~/store/useGlobalStore';

const cx = classNames.bind(styles);

const actionLinks = [
  { title: 'For Employers', to: config.routes.employer },
  { title: 'Sign in', to: config.routes.signIn },
];

const userLinks = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'My Account',
    to: config.routes.profile,
  },
  {
    icon: <FontAwesomeIcon icon={faRobot} />,
    title: 'My Jobs Robot',
    to: config.routes.profile,
  },
  {
    icon: <FontAwesomeIcon icon={faHeart} />,
    title: 'Saved Jobs',
    to: config.routes.profile,
  },
  {
    icon: <FontAwesomeIcon icon={faCheckToSlot} />,
    title: 'Applied Jobs',
    to: config.routes.profile,
  },
  {
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    title: 'Sign Out',
    to: config.routes.profile,
  },
];

function Header({ search = false }) {
  // will call api
  const user = true;

  const [, , headerShrink, setHeaderShrink] = useGlobalStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !search) {
        setHeaderShrink(true);
      } else {
        setHeaderShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cx('wrapper', { shrink: headerShrink })}>
      <div className={cx('container')}>
        <div className={cx('logo', { shrink: headerShrink })}>
          <Link to={config.routes.home}>
            <img src={images.logo} alt="logo_img" />
          </Link>
        </div>

        <div className={cx('navbar')}>
          <div className={cx('links')}>
            {/* Jobs  */}
            <Menu items={JOBS} search>
              <NavItem to={config.routes.jobs} multilevel>
                All Jobs
              </NavItem>
            </Menu>

            {/* IT Companies  */}
            <Menu items={IT_COMPANIES}>
              <NavItem multilevel>IT Companies</NavItem>
            </Menu>

            {/* Blog  */}
            <NavItem to={config.routes.blog}>Blog</NavItem>

            {search && <Search />}
          </div>

          <div className={cx('actions')}>
            {user ? (
              <Menu items={userLinks} smallItem>
                <NavItem>
                  <div className={cx('user', { showLess: search })}>
                    <div className={cx('user-name')}>
                      <span className={cx('user-name_text')}>A Nguyen Van</span>
                      <i className={cx('user-name_icon')}>
                        <FontAwesomeIcon icon={faSortDown} />
                      </i>
                    </div>
                    <div className={cx('avatar', { shrink: headerShrink })}>A</div>
                  </div>
                </NavItem>
              </Menu>
            ) : (
              actionLinks.map((link, index) => (
                <NavItem key={index} to={link.to} multilevel={link.multilevel}>
                  {link.title}
                </NavItem>
              ))
            )}

            <div className={cx('language')}>
              <button>EN</button>
              <span className={cx('slash')}></span>
              <button>VI</button>
            </div>
          </div>
        </div>

        <Tippy
          render={(attrs) => <div className={cx('mobile-menu')} tabIndex="-1" {...attrs}></div>}
          interactive
          placement="bottom"
          appendTo={document.body}
          trigger="click"
        >
          <button className={cx('hambuger-btn')}>
            <FontAwesomeIcon className={cx('hambuger-icon')} icon={faBars} />
          </button>
        </Tippy>
      </div>
    </nav>
  );
}

Header.propTypes = {
  search: PropTypes.bool,
};

export default memo(Header);
