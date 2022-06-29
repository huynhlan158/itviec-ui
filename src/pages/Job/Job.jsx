import { useEffect, useState } from 'react';
import axios from 'axios';
import Flag from 'react-world-flags';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClock, faFlag, faGear, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import styles from './Job.module.scss';
import Path from '~/components/Path';
import config from '~/config';
import JobHeader from '~/components/JobResult/JobDetail/JobHeader';
import JobOverview from '~/components/JobResult/JobDetail/JobOverview';
import JobContent from '~/components/JobResult/JobDetail/JobContent';
import JobItem from '~/components/JobItem';
import Image from '~/components/Image';
import CharacteristicItem from '~/components/CharacteristicItem';
import Button from '~/components/Button';
import { useGlobalStore } from '~/store/useGlobalStore';
import * as actions from '~/state/actions';

const cx = classNames.bind(styles);

function Job() {
  const [, , headerShrink] = useGlobalStore();
  const [jobId, setJobId] = useState(window.location.pathname.slice(-7).replace('-', '_'));
  const [currentJob, setCurrentJob] = useState({});
  const [currentCompany, setCurrentCompany] = useState({});
  const [recommendedJobList, setRecommendedJobList] = useState([]);
  const [, dispatch] = useGlobalStore();

  useEffect(() => {
    // set scroll to top when loading the page
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // call api & set states
    axios.get('/api/it-jobs').then((res) => {
      const currjob = res.data.jobs.find((job) => job.id.toLowerCase() === jobId);

      setCurrentJob(currjob);
      setCurrentCompany(res.data.companies.find((company) => company.id === currjob.companyId));
      setRecommendedJobList(
        res.data.jobs.filter((job) => job.skills.some((skill) => currjob.skills.includes(skill))).slice(0, 10),
      );
      dispatch(actions.setSelectedJob({}));
    });
  }, []);

  useEffect(() => {
    setJobId(window.location.pathname.slice(-7).replace('-', '_'));
  }, [window.location.pathname]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {/* company photos */}
        {currentCompany.images &&
          currentCompany.images
            .slice(0, 3)
            .map((image, index) => (
              <div key={index} className={cx('company-photo')} style={{ backgroundImage: `url(${image})` }}></div>
            ))}

        {/* job info */}
        <div className={cx('job-info')}>
          <JobHeader job={currentJob} company={currentCompany} />
          <JobOverview job={currentJob} />
          <JobContent job={currentJob} />
        </div>

        {/* company info */}
        <div>
          {currentCompany.id && (
            <div className={cx('company-info', { shrink: headerShrink })}>
              <div className={cx('header')}>
                <Image className={cx('logo')} to={config.routes.companyProfile} src={currentCompany.logo} />
                <h3 className={cx('title')}>{currentCompany.name}</h3>
                <span className={cx('sub-title')}>{currentCompany.slogan || currentCompany.name}</span>
              </div>

              <div className={cx('content')}>
                <div className={cx('characteristics')}>
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
                  {!currentCompany.overtime && (
                    <CharacteristicItem icon={<FontAwesomeIcon icon={faClock} />}>No OT</CharacteristicItem>
                  )}
                </div>

                <div className={cx('view-profile')}>
                  <Button
                    to={config.routes.companyProfile.replace(
                      ':companyname',
                      currentCompany.name.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() +
                        currentCompany.id.replace('_', '-').toLowerCase(),
                    )}
                    outline
                    lg
                  >
                    View Company Profile
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* more jobs */}
        <div className={cx('more-jobs')}>
          <h3 className={cx('more-jobs_title')}>More Jobs for You</h3>
          <Button className={cx('subscribe-btn')} outline lg>
            <i>
              <FontAwesomeIcon icon={faBell} />
            </i>
            Get similar jobs by email
          </Button>

          <div className={cx('joblist')}>
            {recommendedJobList.map((job, index) => (
              <JobItem
                key={index}
                data={job}
                selectJob={() => {
                  jobId !== window.location.pathname.slice(-7).replace('-', '_') && window.location.reload(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <Path
        items={[
          { title: 'Home', to: config.routes.home },
          { title: 'All IT Jobs', to: config.routes.jobs },
          { title: currentJob.title },
        ]}
      />
    </div>
  );
}

Job.propTypes = {
  children: PropTypes.node,
};

export default Job;
