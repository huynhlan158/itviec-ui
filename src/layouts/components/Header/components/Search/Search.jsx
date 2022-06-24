import { useLocation, useNavigate } from 'react-router-dom';
import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronDown, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import NavItem from '../NavItem';
import { CITIES } from '~/assess/constants';
import PopperWrapper from '~/components/Popper/PopperWrapper';
import { useGlobalStore } from '~/store/useGlobalStore';
import * as actions from '~/state/actions';
import config from '~/config';

const cx = classNames.bind(styles);

function Search({ className, big }) {
  const [state, dispatch, , , , setSearchTextError] = useGlobalStore();
  const { jobList, recommendedJobList, searchText, searchLocation } = state;
  const navigate = useNavigate();

  const [activeOverlay, setActiveOverlay] = useState(false);
  const [activeInputSearch, setActiveInputSearch] = useState(false);
  const [activeCityOption, setActiveCityOption] = useState(false);

  // reset searchText when loading the page
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === config.routes.home) {
      dispatch(actions.setSearchText(''));
    }
  }, []);

  const handleSearchJobs = () => {
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
  };

  return (
    <NavItem className={cx('search', className, { big })}>
      <div className={cx('container')}>
        {/* search input */}
        <div className={cx('search-input', { active: activeInputSearch })}>
          {big ? <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} /> : ''}
          <input
            type="text"
            placeholder="Keyword skill (Java, iOS...), Job Title, Company..."
            onFocus={() => {
              setActiveOverlay(true);
              setActiveInputSearch(true);
            }}
            value={searchText}
            onChange={(e) => dispatch(actions.setSearchText(e.target.value))}
          />
        </div>

        {/* city options */}
        <Tippy
          render={(attrs) => (
            <div className={cx('city-container')} tabIndex="-1" {...attrs}>
              <PopperWrapper className={cx('city-option')} fixed>
                {CITIES.map((city, index) => (
                  <span
                    key={index}
                    className={cx('city-item')}
                    onClick={() => dispatch(actions.setSearchLocation(city))}
                  >
                    {city}
                  </span>
                ))}
              </PopperWrapper>
            </div>
          )}
          interactive
          placement="bottom"
          appendTo={document.body}
          trigger="click"
          hideOnClick="true"
          onClickOutside={(instance) => instance.hide()}
        >
          <div
            className={cx('city', { active: activeCityOption })}
            onClick={() => {
              setActiveOverlay(true);
              setActiveCityOption(true);
            }}
          >
            <div>
              {big ? (
                <i className={cx('city-icon')}>
                  <FontAwesomeIcon icon={faLocationDot} />
                </i>
              ) : (
                ''
              )}
              <span className={cx('city-title')}>{searchLocation}</span>
            </div>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </Tippy>

        {/* search button */}
        <button className={cx('search-btn')} onClick={handleSearchJobs}>
          {big ? <span>Search</span> : <FontAwesomeIcon icon={faMagnifyingGlass} />}
        </button>

        {/* overlay */}
        <div
          className={cx('overlay', { active: activeOverlay })}
          onClick={() => {
            setActiveOverlay(false);
            setActiveInputSearch(false);
            setActiveCityOption(false);
          }}
        ></div>
      </div>
    </NavItem>
  );
}

Search.propTypes = {
  className: PropTypes.string,
  big: PropTypes.bool,
};

export default memo(Search);
