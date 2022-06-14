import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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

function Header({ search = false }) {
  return (
    <nav className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('logo')}>
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
            {actionLinks.map((link, index) => (
              <NavLink key={index} to={link.to} multilevel={link.multilevel}>
                {link.title}
              </NavLink>
            ))}

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
          <div className={cx('hambuger-btn')}>
            <FontAwesomeIcon className={cx('hambuger-icon')} icon={faBars} />
          </div>
        </Tippy>
      </div>
    </nav>
  );
}

Header.propTypes = {
  search: PropTypes.bool,
};

export default Header;
