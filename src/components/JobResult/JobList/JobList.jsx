import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './JobList.module.scss';
import JobItem from '~/components/JobItem';
import Pagination from '~/components/Pagination';
import config from '~/config';

const cx = classNames.bind(styles);

function JobList({ jobList }) {
  const [currentPage, setCurrentPage] = useState(1);

  const showNavigate = config.pagination.showNavigate;
  const jobsPerPage = config.pagination.jobsPerPage;
  const totalJob = jobList.length;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const currentJobList = jobList.slice(indexOfFirstJob, indexOfLastJob);

  const [jobSelected, setJobSelected] = useState(jobList[0].id);

  useEffect(() => {
    setJobSelected(currentJobList[0].id);
  }, [currentPage]);

  return (
    <aside className={cx('wrapper')}>
      <h1 className={cx('title')}>{jobList.length} Jobs Recommended for A Nguyen Van</h1>
      <div className={cx('job-list')}>
        {currentJobList.map((job, index) => (
          <JobItem key={index} data={job} jobSelected={jobSelected} selectJob={(id) => setJobSelected(id)} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalJob={totalJob}
        jobsPerPage={jobsPerPage}
        showNavigate={showNavigate}
        paginate={(pageNumber) => setCurrentPage(pageNumber)}
      />
    </aside>
  );
}

JobList.propTypes = {
  jobList: PropTypes.array,
};

export default JobList;
