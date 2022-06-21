import { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './JobList.module.scss';
import JobItem from '~/components/JobItem';
import Pagination from '~/components/Pagination';
import config from '~/config';
import { useStore } from '~/components/JobResult/store/useStore';
import * as actions from '~/components/JobResult/state/actions';

const cx = classNames.bind(styles);

function JobList({}) {
  const [state, dispatch] = useStore();
  const { currentPage, jobList, companyList } = state;

  const showNavigateButtons = config.pagination.showNavigateButtons;
  const jobsPerPage = config.pagination.jobsPerPage;
  const totalJob = jobList.length;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const currentJobList = jobList.slice(indexOfFirstJob, indexOfLastJob);

  useEffect(() => {
    if (jobList.length > 0) {
      dispatch(actions.setSelectedJob(currentJobList[0]));
    }
  }, [currentPage]);

  return (
    <aside className={cx('wrapper')}>
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
        paginate={(pageNumber) => dispatch(actions.setCurrentPage(pageNumber))}
      />
    </aside>
  );
}

export default JobList;
