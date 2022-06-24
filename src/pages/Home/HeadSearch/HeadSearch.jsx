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
  skills: ['AngularJS', 'ReactJS'],
};

function HeadSearch() {
  const [state, dispatch, , , , setSearchTextError] = useGlobalStore();
  const { jobList, searchText, searchLocation, recommendedJobList, filteredJobList } = state;
  const navigate = useNavigate();

  const handleSearchJobs = (skill) => {
    dispatch(actions.setSearchText(skill));

    // reset searchTextError
    setSearchTextError(false);

    // filter location
    let locationFilteredJobList;
    switch (searchLocation) {
      case 'All Cities':
        locationFilteredJobList = jobList;
        break;
      case 'Others':
        locationFilteredJobList = jobList.filter((job) => job.location !== 'Ho Chi Minh' || 'Ha Noi' || 'Da Nang');
      default:
        locationFilteredJobList = jobList.filter((job) => job.location === searchLocation);
    }

    // filter search input
    const result = locationFilteredJobList.filter(
      (job) =>
        job.title.toLowerCase().includes(searchText.toLowerCase()) ||
        job.skills.map((skill) => skill.toLowerCase()).includes(searchText.toLowerCase()),
    );

    if (result.length > 0) {
      dispatch(actions.setSearchJobList(result));
      dispatch(actions.setFilteredJobList(result));
      dispatch(actions.setSelectedJob(result[0]));
    } else {
      setSearchTextError(true);
      dispatch(actions.setFilteredJobList(recommendedJobList.slice(0, 5)));
    }

    // navigate to job page and reset filters
    navigate(config.routes.jobs);
    dispatch(actions.removeAllFilters());

    console.log(searchText, skill);
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
            <button key={index} className={cx('skill')} onClick={() => handleSearchJobs(skill)}>
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(HeadSearch);
