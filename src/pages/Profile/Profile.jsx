import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import JobItem from '~/components/JobItem';
import ProfileInfo from './ProfileInfo';
import AccountInfo from './AccountInfo';
import { useReduxSelector } from '~/redux/selectors';
import { jobsSlice } from '~/redux/slices';

const cx = classNames.bind(styles);

function Profile() {
  const dispatch = useDispatch();
  const { recommendedJobList, jobList } = useReduxSelector();
  const [type, setType] = useState('profile');

  const recommendedJobListShow = recommendedJobList.length > 0 ? recommendedJobList : jobList;

  useEffect(() => {
    dispatch(jobsSlice.actions.selectJob({}));
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('profile-info')}>
          <header className={cx('profile-header')}>
            <span className={cx({ active: type === 'profile' })} onClick={() => setType('profile')}>
              Profile
            </span>
            <span className={cx({ active: type === 'account' })} onClick={() => setType('account')}>
              Edit Account
            </span>
          </header>

          {type === 'profile' ? <ProfileInfo /> : <AccountInfo />}
        </div>

        <div className={cx('recommended-jobs')}>
          <h3>Recommended Jobs for you</h3>
          {recommendedJobListShow.slice(0, 3).map((job, index) => (
            <JobItem key={index} data={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
