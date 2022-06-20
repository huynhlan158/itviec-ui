import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

import styles from './JobHeader.module.scss';
import Button from '~/components/Button';
import { useStore } from '~/components/JobResult/store/useStore';

const cx = classNames.bind(styles);

function JobHeader() {
  const [state] = useStore();
  const { selectedJob, dispatch } = state;

  console.log('Header: ', selectedJob);

  return (
    <header className={cx('wrapper')}>
      <h1 className={cx('title')}>{selectedJob.jobTitle}</h1>
      <span className={cx('sub-title')}>{selectedJob.companyName}</span>
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
