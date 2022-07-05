import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faLocationDot, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './MyJobRobot.module.scss';
import PopperWrapper from '~/components/Popper/PopperWrapper';
import Button from '~/components/Button';
import { useGlobalStore } from '~/store/useGlobalStore';
import config from '~/config';

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

const cities = ['Ho Chi Minh', 'Ha Noi', 'Da Nang'];

function MyJobRobot() {
  const [state, dispatch] = useGlobalStore();
  const { jobList, companyList } = state;
  let result = [];
  jobList.forEach((job) => {
    result = [...result, ...job.skills, job.title];
  });
  const recommendSkillAndTitle = [...new Set(result)];

  const [currentCity, setCurrentCity] = useState(user.location);
  const [keyWord, setKeyWord] = useState('');
  const [activeCityOption, setActiveCityOption] = useState(false);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {/* 1st div: my job robot */}
        <div className={cx('box')}>
          {/* header */}
          <header className={cx('header')}>
            <h1 className={cx('title')}>My Job Robot</h1>
            <p className={cx('subtitle')}>
              Add new, or delete your Job Robots here. You can create up to 5 Job Robots.
            </p>
          </header>

          {/* job robot list */}
          {user.jobRobot && (
            <div className={cx('subscribed-list')}>
              {user.jobRobot.map((item, index) => (
                <div key={index} className={cx('subscribed-item')}>
                  <div className={cx('subscribed-item_child')}>
                    <button className={cx('clear-btn')}>
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <span>{item.keyWord}</span>
                  </div>

                  <div className={cx('subscribed-item_child', 'detail')}>
                    <span>
                      <i>
                        <FontAwesomeIcon icon={faLocationDot} />
                      </i>
                      {item.location}
                    </span>

                    <span className={cx('myjr-status')}>Subscribed</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* actions */}
          <div className={cx('form')}>
            <div className={cx('form-input')}>
              <i>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </i>
              <input
                type="text"
                placeholder="Keyword skill (Java, iOS, ...), Job Title..."
                value={keyWord}
                onChange={(e) => setKeyWord(e.target.value)}
              />
            </div>

            <div className={cx('form-actions')}>
              <Tippy
                render={(attrs) => (
                  <div className={cx('city-container')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('city-option')} stretch>
                      {cities.map((city, index) => (
                        <span key={index} className={cx('city-item')} onClick={() => setCurrentCity(city)}>
                          {city}
                        </span>
                      ))}
                    </PopperWrapper>
                  </div>
                )}
                interactive
                placement="bottom"
                appendTo={document.body}
                trigger="click"
                hideOnClick="true"
                onClickOutside={(instance) => {
                  instance.hide();
                  setActiveCityOption(false);
                }}
              >
                <div
                  className={cx('city', { active: activeCityOption })}
                  onClick={() => setActiveCityOption(!activeCityOption)}
                >
                  <div>
                    <i className={cx('city-icon')}>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </i>

                    <span className={cx('city-title')}>{currentCity}</span>
                  </div>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </Tippy>

              <Button className={cx('myrj-btn')} primary>
                Get Jobs
              </Button>
            </div>
          </div>

          {/* more infomation */}
          <div className={cx('explanation')}>
            <p className={cx('explanation-waring')}>Don't miss your next job!</p>
            <p>
              Add your skill and city, then click "Get Jobs". We'll email you suitable new jobs, up to 1 email per day.
            </p>
          </div>
        </div>

        {/* 2nd div: My Following Company */}
        <div className={cx('box')}>
          {/* header */}
          <header className={cx('header')}>
            <h1 className={cx('title')}>My Following Company</h1>
            <p className={cx('subtitle')}>
              Add new, or delete your Following Companies here. You can follow up to 5 companies.
            </p>
          </header>

          {/* followed company list */}
          {user.followedCompany && (
            <div className={cx('subscribed-list')}>
              {user.followedCompany.map((item, index) => (
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
              Add the company name that you're interested in, then click "Follow Company". We'll email you new reviews
              about your following companies and new jobs from them, up to 1 email per day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyJobRobot;
