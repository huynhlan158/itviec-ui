import classNames from 'classnames/bind';

import styles from './AppliedJobs.module.scss';
import Image from '~/components/Image';
import images from '~/assess/images';
import { useGlobalStore } from '~/store/useGlobalStore';
import JobItem from '~/components/JobItem';

const cx = classNames.bind(styles);

// will call api
const user = {
  firstName: 'A',
  lastName: 'Nguyen Van',
  skills: ['AngularJS', 'ReactJS', 'front-end'],
  location: 'Ho Chi Minh',
  jobRobot: [
    {
      keyWord: 'ReactJS',
      location: 'Ho Chi Minh',
    },
    {
      keyWord: 'AngularJS',
      location: 'Ha Noi',
    },
  ],
  followedCompany: ['COM_001', 'COM_003', 'COM_007'],
  savedJobs: ['JOB_003', 'JOB_005', 'JOB_025'],
  appliedJobs: ['JOB_003', 'JOB_005', 'JOB_025'],
};

function AppliedJobs() {
  const [state] = useGlobalStore();
  const { jobList } = state;

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {user.appliedJobs?.length > 0 ? (
          <div className={cx('content')}>
            <h1 className={cx('title')}>You have {user.appliedJobs?.length} Applied Jobs</h1>
            {user.appliedJobs.map((jobID, index) => (
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
