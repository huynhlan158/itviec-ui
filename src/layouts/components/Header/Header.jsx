import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function Header({ search = false }) {
  return (
    <div className={cx('wrapper')}>
      <h1>Header</h1>
      <div className={cx('logo')}></div>
      <nav className={cx('navbar')}>
        <div className={cx('links')}>
          <Link to={config.routes.jobs}>
            <span
              style={{ background: 'var(--primary)', padding: '10px 20px', borderRadius: '8px', color: 'var(--white)' }}
            >
              IT Jobs
            </span>
          </Link>
          <Link to={config.routes.bestCompanies}>
            <span
              style={{ background: 'var(--primary)', padding: '10px 20px', borderRadius: '8px', color: 'var(--white)' }}
            >
              Best Companies in Viet Nam
            </span>
          </Link>
          <Link to={config.routes.blog}>
            <span
              style={{ background: 'var(--primary)', padding: '10px 20px', borderRadius: '8px', color: 'var(--white)' }}
            >
              Blog
            </span>
          </Link>
        </div>

        <div className={cx('search')}></div>

        <div className={cx('actions')}></div>
      </nav>
    </div>
  );
}

Header.propTypes = {
  search: PropTypes.bool,
};

export default Header;
