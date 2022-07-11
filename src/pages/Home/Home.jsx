import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import HeadSearch from './HeadSearch';
import JobResult from '~/components/JobResult';
import TopCompanies from './TopCompanies';
import BlogEntries from './BlogEntries';
import { filtersSlice, jobsSlice } from '~/redux/slices';
import { useReduxSelector } from '~/redux/selectors';

const cx = classNames.bind(styles);

function Home() {
  const dispatch = useDispatch();
  const { recommendedJobList, currentUser } = useReduxSelector();

  useEffect(() => {
    // set scroll to top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // reset searchText
    dispatch(filtersSlice.actions.searchFilterChange(''));

    // reset selectedJob
    dispatch(jobsSlice.actions.selectJob(recommendedJobList[0]));
  }, []);

  return (
    <div className={cx('wrapper')}>
      <HeadSearch />
      {currentUser && currentUser.skills?.length > 0 && <JobResult jobList={recommendedJobList} />}
      <TopCompanies />
      <BlogEntries />
    </div>
  );
}

export default memo(Home);
