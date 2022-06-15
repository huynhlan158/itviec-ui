import { useEffect, useState } from 'react';
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
import { images } from '~/assess';
import { JOBS, IT_COMPANIES } from '~/assess/constants';
import NavLink from './components/NavLink';
import Menu from '~/components/Popper/Menu';
import Search from './components/Search';

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
  const user = true;
  const [isShrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !search) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, [isShrink]);

  return (
    <nav className={cx('wrapper', { shrink: isShrink })}>
      <div className={cx('container')}>
        <div className={cx('logo', { shrink: isShrink })}>
          <Link to={config.routes.home}>
            <img src={images.logo} alt="logo_img" />
          </Link>
        </div>

        <div className={cx('navbar')}>
          <div className={cx('links')}>
            {/* Jobs  */}
            <Menu items={JOBS}>
              <NavLink to={config.routes.jobs} multilevel>
                All jobs
              </NavLink>
            </Menu>

            {/* IT Companies  */}
            <Menu items={IT_COMPANIES}>
              <NavLink multilevel>IT Companies</NavLink>
            </Menu>

            {/* Blog  */}
            <NavLink to={config.routes.blog}>Blog</NavLink>

            {search && <Search />}
          </div>

          <div className={cx('actions')}>
            {user ? (
              <Menu items={userLinks} smallItem>
                <NavLink>
                  <div className={cx('user')}>
                    <div className={cx('user-name')}>
                      <span>A Nguyen Van</span>
                      <i>
                        <FontAwesomeIcon icon={faSortDown} />
                      </i>
                    </div>
                    <div className={cx('avatar', { shrink: isShrink })}>A</div>
                  </div>
                </NavLink>
              </Menu>
            ) : (
              actionLinks.map((link, index) => (
                <NavLink key={index} to={link.to} multilevel={link.multilevel}>
                  {link.title}
                </NavLink>
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

export default Header;
