import classNames from 'classnames/bind';

import styles from './SavedJobs.module.scss';
import Image from '~/components/Image';
import images from '~/assess/images';
import JobItem from '~/components/JobItem';
import { useGlobalStore } from '~/store/useGlobalStore';

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
};

function SavedJobs() {
  const [state] = useGlobalStore();
  const { jobList } = state;

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {user.savedJobs?.length > 0 ? (
          <div className={cx('content')}>
            <h1 className={cx('title')}>You have {user.savedJobs?.length} Saved Jobs</h1>
            {user.savedJobs.map((jobID, index) => (
              <JobItem key={index} data={jobList.find((job) => job.id === jobID)} />
            ))}
          </div>
        ) : (
          <>
            <h1 className={cx('title')}>You have 0 Saved Jobs</h1>
            <h3 className={cx('subtitle')}>Trời ơi! You haven't saved any jobs yet.</h3>
            <Image src={images.none_jobs_saved} alt="apply-now_img" />
            <h3 className={cx('subtitle')}>Click the heart to save jobs.</h3>
          </>
        )}
      </div>
    </div>
  );
}

export default SavedJobs;
