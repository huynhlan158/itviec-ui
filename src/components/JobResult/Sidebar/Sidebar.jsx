import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import JobItem from '~/components/JobItem';

const cx = classNames.bind(styles);

function Sidebar({ jobList }) {
  return (
    <aside className={cx('wrapper')}>
      <h1 className={cx('title')}>300 Jobs Recommended for A Nguyen Van</h1>
      <div className={cx('job-list')}>
        {jobList.map((job, index) => (
          <JobItem key={index} {...job} />
        ))}
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  jobList: PropTypes.array,
};

export default Sidebar;
