import { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Jobs.module.scss';
import FilterJobs from './FilterJobs';
import JobResult from '~/components/JobResult';
import { useGlobalStore } from '~/store/useGlobalStore';
import config from '~/config';
import Path from '~/components/Path';

const cx = classNames.bind(styles);

// will call api
const user = {
  skills: ['React', 'ReactJS', 'Front-end'],
};

function Jobs() {
  const [state] = useGlobalStore();
  const { filteredJobList } = state;

  // set scroll to top when loading the page
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <FilterJobs />
        <JobResult jobList={filteredJobList} />
      </div>

      <Path items={[{ title: 'Home', to: config.routes.home }, { title: 'All IT Jobs' }]} />
    </div>
  );
}

export default Jobs;
