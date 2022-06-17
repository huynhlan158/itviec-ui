import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

import styles from './JobHeader.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

// will replace by using context hook
const currentJobSelected = {
  jobTitle: 'Fullstack Dev (NodeJS, Angular/ReactJS)',
  companyName: 'Hanwha Financial Technology',
};

function JobHeader() {
  return (
    <header className={cx('wrapper')}>
      <h1 className={cx('title')}>{currentJobSelected.jobTitle}</h1>
      <span className={cx('sub-title')}>{currentJobSelected.companyName}</span>
      <div className={cx('apply')}>
        <Button primary xl>
          Apply Now
        </Button>
        <button className={cx('icons')}>
          {/* <FontAwesomeIcon icon={faHeart} /> */}
          <FontAwesomeIcon className={cx('like-icon')} icon={solidHeart} />
        </button>
      </div>
    </header>
  );
}

export default JobHeader;
