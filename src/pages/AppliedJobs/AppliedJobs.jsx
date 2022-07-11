import classNames from 'classnames/bind';

import styles from './AppliedJobs.module.scss';
import Image from '~/components/Image';
import images from '~/assess/images';
import JobItem from '~/components/JobItem';
import { useReduxSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function AppliedJobs() {
  const { jobList, currentUser } = useReduxSelector();

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {currentUser.appliedJobs?.length > 0 ? (
          <div className={cx('content')}>
            <h1 className={cx('title')}>You have {currentUser.appliedJobs.length} Applied Jobs</h1>
            {currentUser.appliedJobs.map((jobID, index) => (
              <JobItem key={index} data={jobList.find((job) => job.id === jobID)} />
            ))}
          </div>
        ) : (
          <>
            <h1 className={cx('title')}>You have 0 Applied Jobs</h1>
            <h3 className={cx('subtitle')}>Trời ơi! You haven't applied for any jobs yet.</h3>
            <Image className={cx('applied-jobs_img')} src={images.none_jobs_applied} alt="apply-now_img" />
          </>
        )}
      </div>
    </div>
  );
}

export default AppliedJobs;
