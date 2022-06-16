import classNames from 'classnames/bind';

import styles from './HeadSearch.module.scss';
import Search from '~/layouts/components/Header/components/Search';

const cx = classNames.bind(styles);

function HeadSearch() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <h1 className={cx('title')}>1,000 IT Jobs "Chất" for A Nguyen Van</h1>
        <div className={cx('search-form')}>
          <Search className={cx('head-search')} big />
        </div>
        <div className={cx('search-skills')}>
          <span className={cx('skill')}>ReactJS</span>
          <span className={cx('skill')}>Angular</span>
        </div>
      </div>
    </div>
  );
}

export default HeadSearch;
