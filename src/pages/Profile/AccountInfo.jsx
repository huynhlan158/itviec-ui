import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import Button from '~/components/Button';
import ToggleSwitch from '~/components/ToggleSwitch';
import config from '~/config';
import { useReduxSelector } from '~/redux/selectors';
import { usersSliceActions } from '~/redux/slices';

const cx = classNames.bind(styles);

function AccountInfo() {
  const dispatch = useDispatch();
  const { currentUser } = useReduxSelector();

  const [isAccountToggle, setIsAccountToggle] = useState(false);
  const [isLetterToggle, setIsLetterToggle] = useState(false);
  const [isInvitationToggle, setIsInvitationToggle] = useState(true);
  const [fullname, setFullname] = useState(currentUser.fullname);
  const [coverLetter, setCoverLetter] = useState(currentUser.coverLetter ? currentUser.coverLetter : '');

  const handleUserNameChange = () => {
    dispatch(
      usersSliceActions.updateUser({
        id: currentUser.id,
        key: 'fullname',
        payload: fullname,
      }),
    );
  };

  const handleUserCoverLetterChange = () => {
    dispatch(
      usersSliceActions.updateUser({
        id: currentUser.id,
        key: 'coverLetter',
        payload: coverLetter,
      }),
    );
  };

  return (
    <>
      {/* account */}
      <div className={cx('title-container')}>
        <h3 className={cx('profile-title')}>Account</h3>
        <span
          className={cx('toggle-btn', 'account')}
          onClick={() => {
            setIsAccountToggle(!isAccountToggle);
          }}
        >
          Change
        </span>
      </div>

      <h5 className={cx('profile-fullname')}>{currentUser.fullname}</h5>
      <p>Email: {currentUser.email}</p>

      <div className={cx('profile-collapse', { show: isAccountToggle })}>
        <div className={cx('form-group')}>
          <label>Email</label>
          <div>{currentUser.email}</div>
        </div>

        <div className={cx('form-group')}>
          <label>Username</label>
          <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
        </div>

        <div className={cx('edit-btn')}>
          <Button outline onClick={() => setIsAccountToggle(!isAccountToggle)}>
            Cancel
          </Button>
          <Button primary onClick={handleUserNameChange}>
            Save
          </Button>
        </div>
      </div>

      {/* cover letter */}
      <div className={cx('title-container')}>
        <h3 className={cx('profile-title')}>Cover Letter</h3>
        <span className={cx('toggle-btn', 'cover-letter')} onClick={() => setIsLetterToggle(!isLetterToggle)}>
          Change
        </span>
      </div>

      <div className={cx('profile-collapse', { show: isLetterToggle })}>
        <textarea
          className={cx('')}
          rows={4}
          placeholder="Detail and specific examples will make your application stronger..."
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
        />

        <div className={cx('edit-btn')}>
          <Button outline onClick={() => setIsLetterToggle(!isLetterToggle)}>
            Cancel
          </Button>
          <Button primary onClick={handleUserCoverLetterChange}>
            Save
          </Button>
        </div>
      </div>

      <div className={cx('profile-policy')}>
        <h3 className={cx('profile-title')}>Profile Privacy</h3>
        <p className={cx('profile-policy_text')}>
          If you turn off this option, we won't send you any invitation for a year from our latest product - AI Match
          for employers. Check out the <Link to={config.routes.pending.replace(':pathname', 'faq')}>FQA</Link> for more
          details.
        </p>
        <div className={cx('profile-policy_toggle-btn')}>
          <span>Receive Job Invitation</span>
          <ToggleSwitch state={isInvitationToggle} onToggle={() => setIsInvitationToggle(!isInvitationToggle)} />
        </div>
      </div>
    </>
  );
}

export default AccountInfo;
