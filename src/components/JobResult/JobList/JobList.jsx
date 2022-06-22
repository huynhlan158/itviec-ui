import { useEffect, useRef } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';

import styles from './JobList.module.scss';
import JobItem from '~/components/JobItem';
import Pagination from '~/components/Pagination';
import config from '~/config';
import * as actions from '~/state/actions';
import { useGlobalStore } from '~/store/useGlobalStore';
import { setupServer } from '~/fakeApis';

const cx = classNames.bind(styles);

setupServer();

function JobList() {
  const [state, dispatch] = useGlobalStore();
  const { currentPage, jobList, companyList } = state;
  const jobListRef = useRef();

  const showNavigateButtons = config.pagination.showNavigateButtons;
  const jobsPerPage = config.pagination.jobsPerPage;
  const totalJob = jobList.length;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const currentJobList = jobList.slice(indexOfFirstJob, indexOfLastJob);

  useEffect(() => {
    axios.get('/api/it-jobs').then((data) => {
      const jobList = data.data.jobs;
      const companyList = data.data.companies;

      dispatch(actions.setJobList(jobList));
      dispatch(actions.setSelectedJob(jobList[0]));
      dispatch(actions.setCompanyList(companyList));

      const selectedCompany = companyList.find((company) => company.id === jobList[0].companyId);
      dispatch(actions.setSelectedCompany(selectedCompany));
    });
  }, []);

  useEffect(() => {
    if (jobList.length > 0) {
      dispatch(actions.setSelectedJob(currentJobList[0]));
    }
  }, [currentPage]);

  return (
    <aside className={cx('wrapper')} ref={jobListRef}>
      <h1 className={cx('title')}>{jobList.length} Jobs Recommended for A Nguyen Van</h1>
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
          dispatch(actions.setCurrentPage(pageNumber));
          jobListRef.current.scrollTo(0, 0);
        }}
      />
    </aside>
  );
}

export default JobList;
