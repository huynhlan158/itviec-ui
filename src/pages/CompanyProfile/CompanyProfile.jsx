import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Flag from 'react-world-flags';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faCalendarDays,
  faClock,
  faFlag,
  faGear,
  faLocationDot,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

import styles from './CompanyProfile.module.scss';
import CharacteristicItem from '~/components/CharacteristicItem';
import Button from '~/components/Button';
import Image from '~/components/Image';
import Path from '~/components/Path';
import config from '~/config';
import Jobs from './Jobs';
import Review from './Review';
import { useReduxSelector } from '~/redux/selectors';
import { jobsSlice } from '~/redux/slices';

const cx = classNames.bind(styles);

function CompanyProfile() {
  const dispatch = useDispatch();
  const { companyList, headerShrink } = useReduxSelector();

  const [currentCompany, setCurrentCompany] = useState({});
  const [type, setType] = useState('job');

  useEffect(() => {
    // set scroll to top when loading the page
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // get rid of styling for selected job on this page
    dispatch(jobsSlice.actions.selectJob({}));
  }, []);

  // set current company
  useEffect(() => {
    const companyId = window.location.pathname.slice(-7).replace('-', '_');
    const currCompany = companyList.find((company) => company.id.toLowerCase() === companyId);
    setCurrentCompany(currCompany);
  }, [companyList]);

  return (
    currentCompany && (
      <div className={cx('wrapper')}>
        <div className={cx('container', { shrink: headerShrink })}>
          {/* header */}
          {currentCompany.id && (
            <header className={cx('header')}>
              <div className={cx('logo')}>
                <Image to={config.routes.companyProfile} src={currentCompany.logo} />
              </div>

              <div className={cx('info')}>
                <h1 className={cx('title')}>{currentCompany.name}</h1>
                <div className={cx('characteristics')}>
                  <CharacteristicItem className={cx('location')} icon={<FontAwesomeIcon icon={faLocationDot} />}>
                    {typeof currentCompany.district === 'number'
                      ? `District ${currentCompany.district}, ${currentCompany.province}`
                      : `${currentCompany.district}, ${currentCompany.province}`}
                  </CharacteristicItem>
                  <CharacteristicItem icon={<FontAwesomeIcon icon={faGear} />}>
                    {currentCompany.type}
                  </CharacteristicItem>
                  <CharacteristicItem icon={<FontAwesomeIcon icon={faUserGroup} />}>
                    {currentCompany.size}
                  </CharacteristicItem>
                  <CharacteristicItem icon={<FontAwesomeIcon icon={faCalendarDays} />}>
                    {currentCompany.workingDays}
                  </CharacteristicItem>
                  <CharacteristicItem
                    icon={<Flag code={currentCompany.countryCode} fallback={<FontAwesomeIcon icon={faFlag} />} />}
                  >
                    {currentCompany.country}
                  </CharacteristicItem>
                  <CharacteristicItem icon={<FontAwesomeIcon icon={faClock} />}>
                    {!currentCompany.overtime ? 'No OT' : currentCompany.overtime}
                  </CharacteristicItem>
                </div>
              </div>

              <div className={cx('actions')}>
                <Button className={cx('actions-btn')} primary xl>
                  Write Review
                </Button>
                <Button className={cx('actions-btn')} outline xl>
                  Follow
                </Button>
              </div>
            </header>
          )}

          {/* navigation bar */}
          <ul className={cx('navigation')}>
            <li className={cx('tab', { active: type === 'job' })} onClick={() => setType('job')}>
              Jobs
            </li>
            <li className={cx('tab', { active: type === 'review' })} onClick={() => setType('review')}>
              {`${currentCompany.review ? currentCompany.review?.length : ''} ${
                currentCompany.review?.length > 0 ? 'Reviews' : 'Review'
              }`}
            </li>
            <li className={cx('website')}>
              <a href={currentCompany.website} target="_blank">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </a>
            </li>
          </ul>

          {/* company detail info */}
          <div className={cx('content')}>
            {type === 'job' ? (
              <Jobs currentCompany={currentCompany} />
            ) : type === 'review' ? (
              <Review currentCompany={currentCompany} />
            ) : (
              ''
            )}
          </div>

          <Path items={[{ title: 'Home', to: config.routes.home }, { title: currentCompany.name }]} />
        </div>
      </div>
    )
  );
}

CompanyProfile.propTypes = {
  children: PropTypes.node,
};

export default CompanyProfile;
