import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import HeadSearch from './HeadSearch';
import JobResult from '~/components/JobResult';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <HeadSearch />
      <JobResult />
    </div>
  );
}

export default Home;
