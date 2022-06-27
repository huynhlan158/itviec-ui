import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './HeadSearch.module.scss';
import Search from '~/layouts/components/Header/components/Search';
import { useGlobalStore } from '~/store/useGlobalStore';
import config from '~/config';
import * as actions from '~/state/actions';

const cx = classNames.bind(styles);

// will call api
const user = {
  firstName: 'A',
  lastName: 'Nguyen Van',
  skills: ['AngularJS', 'ReactJS', 'front-end'],
  location: 'Ho Chi Minh',
};

function HeadSearch() {
  const [state, dispatch, , , , , , setSearchText] = useGlobalStore();
  const { jobList } = state;
  const navigate = useNavigate();

  const handleSearchText = (skill) => {
    dispatch(actions.setUserInputText(skill));
    setSearchText(skill);
    dispatch(actions.setSearchLocation(user.location));

    // set default data here to avoid setting default data again when calling api at job page that causes error when using quick search from home page for the 1st time
    dispatch(actions.setSearchJobList(jobList));
    dispatch(actions.setFilteredJobList(jobList));

    // navigate to job page and reset filters
    navigate(config.routes.jobs);
    dispatch(actions.removeAllFilters());
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <h1 className={cx('title')}>{`${jobList.length} IT Jobs "Chất" for ${user.firstName} ${user.lastName}`}</h1>
        <div className={cx('search-form')}>
          <Search className={cx('head-search')} big />
        </div>
        <div className={cx('search-skills')}>
          {user.skills.map((skill, index) => (
            <button key={index} className={cx('skill')} onClick={() => handleSearchText(skill)}>
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(HeadSearch);
