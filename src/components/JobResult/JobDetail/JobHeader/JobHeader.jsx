import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

import styles from './JobHeader.module.scss';
import Button from '~/components/Button';
import { useGlobalStore } from '~/store/useGlobalStore';

const cx = classNames.bind(styles);

function JobHeader() {
  const [state] = useGlobalStore();
  const { selectedJob, selectedCompany, headerShrink } = state;

  return (
    <header className={cx('wrapper', { shrink: headerShrink })}>
      <h1 className={cx('title')}>{selectedJob.title}</h1>
      <span className={cx('sub-title')}>{selectedCompany.name}</span>
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
