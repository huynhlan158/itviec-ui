import { useState, useEffect, useRef, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import styles from './JobList.module.scss';
import JobItem from '~/components/JobItem';
import Pagination from '~/components/Pagination';
import config from '~/config';
import * as actions from '~/state/actions';
import { useGlobalStore } from '~/store/useGlobalStore';
import Image from '~/components/Image';
import CompanyImage from '~/components/CompanyImage';

const cx = classNames.bind(styles);

// will call api
const user = {
  firstName: 'A',
  lastName: 'Nguyen Van',
  skills: ['AngularJS', 'ReactJS'],
};

function JobList({ jobList: passedJobList = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [topCompany, setTopCompany] = useState({});
  const [state, dispatch, headerShrink, , searchTextError] = useGlobalStore();
  const { companyList, jobList, searchText, searchLocation, filteredJobList } = state;
  const jobListRef = useRef();
  const location = useLocation();
  const topCompanyJobList = jobList.filter((job) => job.companyId === topCompany.id);

  // pagination settings
  const showNavigateButtons = config.pagination.showNavigateButtons;
  const jobsPerPage = config.pagination.jobsPerPage;
  const totalJob = passedJobList.length;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const currentJobList = passedJobList.slice(indexOfFirstJob, indexOfLastJob);

  // reset selected job when changing current page
  useEffect(() => {
    if (passedJobList.length > 0) {
      dispatch(actions.setSelectedJob(currentJobList[0]));
    }
  }, [currentPage]);

  // set title for job list
  let title = `${passedJobList.length} Jobs recommended for ${user.firstName} ${user.lastName}`;
  if (location.pathname === config.routes.jobs) {
    if (searchTextError && filteredJobList.length > 0) {
      title = (
        <>
          <p className={cx('hightlight-text')}>Oops!</p>
          <p className={cx('result-text')}>The job you're looking for doesn't exist.</p>
          <p className={cx('result-text')}>Here are some recommended jobs for you.</p>
        </>
      );
    } else if (searchTextError && filteredJobList.length === 0) {
      title = (
        <>
          <p className={cx('hightlight-text')}>Oops!</p>
          <p className={cx('result-text')}>The job you're looking for doesn't exist.</p>
        </>
      );
    } else {
      title = `${passedJobList.length} ${searchText} jobs in ${searchLocation}`;
    }
  }

  useEffect(() => {
    axios.get('/api/top-companies').then((res) => {
      const randomIndex = Math.floor(Math.random() * res.data.topCompanies.length);
      setTopCompany(res.data.topCompanies[randomIndex]);
    });
  }, []);

  return (
    <aside className={cx('wrapper', { shrink: headerShrink })} ref={jobListRef}>
      <h1 className={cx('title')}>
        {passedJobList.length === jobList.length ? `${passedJobList.length} IT jobs in Vietnam` : title}
      </h1>
      <div className={cx('job-list')}>
        {currentJobList.map((job, index) => (
          <JobItem
            key={index}
            data={job}
            selectJob={(job) => {
              dispatch(actions.setSelectedJob(job));
              const selectedCompany = companyList.find((company) => company.id === job.companyId);
              dispatch(actions.setSelectedCompany(selectedCompany));
            }}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalJob={totalJob}
        jobsPerPage={jobsPerPage}
        showNavigateButtons={showNavigateButtons}
        paginate={(pageNumber) => {
          setCurrentPage(pageNumber);
          jobListRef.current.scrollTo(0, 0);
        }}
      />

      {topCompany.id && (
        <div className={cx('company-spotlight')}>
          <h3 className={cx('company-title')}>Company Spotlight</h3>
          <div className={cx('company-images')}>
            <Link to={topCompany.profileLink}>
              <Image className={cx('image')} src={topCompany.images[0]} alt="company_img" />
            </Link>
            <CompanyImage className={cx('logo')} to={topCompany.profileLink} src={topCompany.logo} alt="company_logo" />
          </div>

          <Link className={cx('company-info')} to={topCompany.profileLink}>
            <h4>{topCompany.name}</h4>
            <p className={cx('location')}>{topCompany.district}</p>
            <p className={cx('slogan')}>{topCompany.slogan || topCompany.name}</p>
          </Link>

          <div>
            {topCompanyJobList.slice(0, 3).map((job, index) => (
              <div key={index} className={cx('job-item')}>
                {job.title}
              </div>
            ))}
            <div className={cx('job-item', 'view-all')}>
              {`View ${topCompanyJobList.length} jobs`} <FontAwesomeIcon icon={faCaretRight} />
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}

JobList.propTypes = {
  jobList: PropTypes.array.isRequired,
};

export default memo(JobList);
