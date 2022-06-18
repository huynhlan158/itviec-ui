import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import HeadSearch from './HeadSearch';
import JobResult from '~/components/JobResult';
import TopCompanies from './TopCompanies';
import BlogEntries from './BlogEntries';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <HeadSearch />
      <JobResult />
      <TopCompanies />
      <BlogEntries />
    </div>
  );
}

export default Home;
