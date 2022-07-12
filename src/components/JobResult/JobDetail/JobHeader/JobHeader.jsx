import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

import styles from './JobHeader.module.scss';
import Button from '~/components/Button';
import config from '~/config';
import { useReduxSelector } from '~/redux/selectors';
import { usersSliceActions } from '~/redux/slices';

const cx = classNames.bind(styles);

function JobHeader({ job = {}, company = {} }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, headerShrink } = useReduxSelector();

  const handleToggleSaveJob = () => {
    if (currentUser) {
      let savedJobList = currentUser.savedJobs || [];
      if (savedJobList.includes(job.id)) {
        savedJobList = savedJobList.filter((jobId) => jobId !== job.id);
      } else {
        savedJobList = [...savedJobList, job.id];
      }

      dispatch(
        usersSliceActions.updateUser({
          id: currentUser.id,
          key: 'savedJobs',
          payload: savedJobList,
        }),
      );
    } else {
      navigate(config.routes.signIn);
    }
  };

  if (job && company) {
    return (
      <header className={cx('wrapper', { shrink: headerShrink })}>
        <h1 className={cx('title')}>{job.title}</h1>
        <span className={cx('sub-title')}>{company.name}</span>
        <div className={cx('apply')}>
          <Button primary xl>
            Apply Now
          </Button>
          <button className={cx('icons')} onClick={handleToggleSaveJob}>
            {currentUser && currentUser.savedJobs?.includes(job.id) ? (
              <FontAwesomeIcon className={cx('like-icon')} icon={solidHeart} />
            ) : (
              <FontAwesomeIcon icon={faHeart} />
            )}
          </button>
        </div>
      </header>
    );
  }
}

JobHeader.propTypes = {
  job: PropTypes.object.isRequired,
  company: PropTypes.object.isRequired,
};

export default memo(JobHeader);
