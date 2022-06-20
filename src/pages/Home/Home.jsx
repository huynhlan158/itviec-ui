import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import HeadSearch from './HeadSearch';
import JobResult from '~/components/JobResult';
import TopCompanies from './TopCompanies';
import BlogEntries from './BlogEntries';
import JobsProvider from '~/components/JobResult/store/JobsProvider';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <JobsProvider>
        <HeadSearch />
        <JobResult />
        <TopCompanies />
        <BlogEntries />
      </JobsProvider>
    </div>
  );
}

export default Home;
