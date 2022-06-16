import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

import styles from './JobHeader.module.scss';

const cx = classNames.bind(styles);

function JobHeader() {
  return (
    <header className={cx('wrapper')}>
      <h1 className={cx('title')}>Fullstack Dev (NodeJS, Angular/ReactJS)</h1>
      <span className={cx('sub-title')}>Hanwha Financial Technology</span>
      <div className={cx('apply')}>
        <button className={cx('btn-apply')}>Apply Now</button>
        <button className={cx('icons')}>
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon className={cx('like-icon')} icon={solidHeart} />
        </button>
      </div>
    </header>
  );
}

export default JobHeader;
