import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import config from '~/config';
import { images } from '~/assess';
import NavLink from './components/NavLink';
import Menu from '~/components/Popper/Menu';
import { JOBS, IT_COMPANIES } from '~/assess/constants';

const cx = classNames.bind(styles);

const navLinks = [
  { title: 'All Jobs', to: config.routes.jobs, multilevel: true, data: JOBS },
  { title: 'IT Companies', multilevel: true },
  { title: 'Blog', to: config.routes.blog },
];

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

            {search && <div className={cx('search')}></div>}
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
      </div>
    </nav>
  );
}

Header.propTypes = {
  search: PropTypes.bool,
};

export default Header;
