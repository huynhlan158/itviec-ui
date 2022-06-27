import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

import styles from './JobHeader.module.scss';
import Button from '~/components/Button';
import { useGlobalStore } from '~/store/useGlobalStore';
import { memo } from 'react';

const cx = classNames.bind(styles);

function JobHeader({ job, company }) {
  const [, , headerShrink] = useGlobalStore();

  return (
    <header className={cx('wrapper', { shrink: headerShrink })}>
      <h1 className={cx('title')}>{job.title}</h1>
      <span className={cx('sub-title')}>{company.name}</span>
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

JobHeader.propTypes = {
  job: PropTypes.object.isRequired,
  company: PropTypes.object.isRequired,
};

export default memo(JobHeader);
