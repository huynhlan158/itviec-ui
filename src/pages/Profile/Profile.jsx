import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import { useGlobalStore } from '~/store/useGlobalStore';
import * as actions from '~/state/actions';
import JobItem from '~/components/JobItem';
import ProfileInfo from './ProfileInfo';
import AccountInfo from './AccountInfo';

const cx = classNames.bind(styles);

function Profile() {
  const [state, dispatch] = useGlobalStore();
  const { recommendedJobList } = state;
  const [type, setType] = useState('profile');

  useEffect(() => {
    dispatch(actions.setSelectedJob({}));
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
          {recommendedJobList.slice(0, 3).map((job, index) => (
            <JobItem key={index} data={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
