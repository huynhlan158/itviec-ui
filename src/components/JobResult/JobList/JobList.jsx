import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './JobList.module.scss';
import JobItem from '~/components/JobItem';
import Pagination from '~/components/Pagination';

const cx = classNames.bind(styles);

function JobList({ jobList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <aside className={cx('wrapper')}>
      <h1 className={cx('title')}>300 Jobs Recommended for A Nguyen Van</h1>
      <div className={cx('job-list')}>
        {jobList.map((job, index) => (
          <JobItem key={index} {...job} />
        ))}
      </div>
      <Pagination currentPage={currentPage} lastPage={10} paginate={paginate} />
    </aside>
  );
}

JobList.propTypes = {
  jobList: PropTypes.array,
};

export default JobList;
