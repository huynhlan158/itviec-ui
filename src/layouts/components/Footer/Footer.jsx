import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('links')}>
          <div className={cx('links-about')}>
            <h4 className={cx('title')}>About Us</h4>
            <div className={cx('items')}>
              <Link className={cx('item')} to={config.routes.home}>
                Home
              </Link>
              <Link className={cx('item')} to={config.routes.textOnly}>
                About Us
              </Link>
              <Link className={cx('item')} to={config.routes.textOnly}>
                Contact Us
              </Link>
              <Link className={cx('item')} to={config.routes.jobs}>
                All Jobs
              </Link>
              <Link className={cx('item')} to={config.routes.textOnly}>
                FAQ
              </Link>
            </div>
          </div>

          <div className={cx('links-terms')}>
            <h4 className={cx('title')}>Terms & Conditions</h4>
            <div className={cx('items')}>
              <Link className={cx('item')} to={config.routes.textOnly}>
                Privacy Policy
              </Link>
              <Link className={cx('item')} to={config.routes.textOnly}>
                Operating Regulation
              </Link>
              <Link className={cx('item')} to={config.routes.textOnly}>
                Complaint Handling
              </Link>
              <Link className={cx('item')} to={config.routes.textOnly}>
                Terms & Conditions
              </Link>
              <Link className={cx('item')} to={config.routes.textOnly}>
                Press
              </Link>
            </div>
          </div>

          <div className={cx('links-copy-right')}>
            <span className={cx('item')}>Copyright © IT VIEC JSC</span>
            <span className={cx('item')}>Tax code: 0312192258</span>
            <div className={cx('icons')}>
              <a href="https://www.facebook.com/">
                <i>
                  <FontAwesomeIcon icon={faFacebook} />
                </i>
              </a>
              <a href="https://www.linkedin.com/">
                <i>
                  <FontAwesomeIcon icon={faLinkedin} />
                </i>
              </a>
              <a href="https://www.youtube.com/">
                <i>
                  <FontAwesomeIcon icon={faYoutube} />
                </i>
              </a>
            </div>
          </div>
        </div>

        <div className={cx('info')}>
          <h4 className={cx('title')}>Want to post a job? Contact us at:</h4>
          <span className={cx('item')}>
            Ho Chi Minh: (+84) 977 460 519 - Ha Noi: (+84) 983 131 351 - Email: love@itviec.com
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
