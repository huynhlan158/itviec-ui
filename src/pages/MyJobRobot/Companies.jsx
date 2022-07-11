import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './MyJobRobot.module.scss';
import Button from '~/components/Button';
import config from '~/config';
import { useReduxSelector } from '~/redux/selectors';

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
};

function Companies() {
  const { companyList, currentUser } = useReduxSelector();
  const [keyWord, setKeyWord] = useState('');

  return (
    <div className={cx('box')}>
      {/* header */}
      <header className={cx('header')}>
        <h1 className={cx('title')}>My Following Company</h1>
        <p className={cx('subtitle')}>
          Add new, or delete your Following Companies here. You can follow up to 5 companies.
        </p>
      </header>

      {/* followed company list */}
      {currentUser?.followedCompany && (
        <div className={cx('subscribed-list')}>
          {currentUser.followedCompany.map((item, index) => (
            <div key={index} className={cx('subscribed-item')}>
              <div>
                <button className={cx('clear-btn')}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
                <Link
                  to={config.routes.companyProfile.replace(
                    ':companyname',
                    companyList
                      .find((company) => company.id === item)
                      .name.replace(/[^a-zA-Z1-10000]/g, '-')
                      .toLowerCase() + item.replace('_', '-').toLowerCase(),
                  )}
                  className={cx('company-name')}
                >
                  {companyList.find((company) => company.id === item).name}
                </Link>
              </div>

              <span className={cx('myjr-status')}>Following</span>
            </div>
          ))}
        </div>
      )}

      {/* actions */}
      <div className={cx('form')}>
        <div className={cx('form-input')}>
          <input
            type="text"
            placeholder="Select Company"
            value={keyWord}
            onChange={(e) => setKeyWord(e.target.value)}
          />
          <i>
            <FontAwesomeIcon icon={faChevronDown} />
          </i>
        </div>

        <div className={cx('form-actions', 'float-right')}>
          <Button className={cx('myrj-btn')} primary>
            Follow Company
          </Button>
        </div>
      </div>

      {/* more infomation */}
      <div className={cx('explanation')}>
        <p className={cx('explanation-waring')}>Don't miss your next job!</p>
        <p>
          Add the company name that you're interested in, then click "Follow Company". We'll email you new reviews about
          your following companies and new jobs from them, up to 1 email per day.
        </p>
      </div>
    </div>
  );
}

export default Companies;
