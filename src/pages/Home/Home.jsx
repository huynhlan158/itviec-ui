import { memo, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import HeadSearch from './HeadSearch';
import JobResult from '~/components/JobResult';
import TopCompanies from './TopCompanies';
import BlogEntries from './BlogEntries';
import * as actions from '~/state/actions';
import { useGlobalStore } from '~/store/useGlobalStore';
import { setupServer } from '~/utils/fakeApis';

const cx = classNames.bind(styles);

setupServer();

function Home() {
  const [state, dispatch, , , , , , setSearchText] = useGlobalStore();
  const { recommendedJobList, loginStatus, currentUser } = state;

  useEffect(() => {
    // reset searchText when loading the home page
    dispatch(actions.setUserInputText(''));
    setSearchText('');

    // set scroll to top when loading the page
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className={cx('wrapper')}>
      <HeadSearch />
      <JobResult jobList={recommendedJobList} />
      <TopCompanies />
      <BlogEntries />
    </div>
  );
}

export default memo(Home);
