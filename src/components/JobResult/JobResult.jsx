import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './JobResult.module.scss';
import JobList from './JobList';
import JobHeader from './JobDetail/JobHeader';
import JobOverview from './JobDetail/JobOverview';
import JobContent from './JobDetail/JobContent';
import CompanyOverview from './CompanyOverview';

const cx = classNames.bind(styles);

function JobResult({ jobList }) {
  return (
    <div className={cx('wrapper')}>
      <JobList jobList={jobList} />

      <div className={cx('detail')}>
        <div className={cx('job')}>
          <JobHeader />
          <JobOverview />
          <JobContent />
        </div>
        <div className={cx('company')}>
          <CompanyOverview />
        </div>
      </div>
    </div>
  );
}

JobResult.propTypes = {
  jobList: PropTypes.array.isRequired,
};

export default JobResult;
