import { useNavigate } from 'react-router-dom';
import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronDown, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import NavItem from '../NavItem';
import { CITIES } from '~/assess/constants';
import PopperWrapper from '~/components/Popper/PopperWrapper';
import { useGlobalStore } from '~/store/useGlobalStore';
import * as actions from '~/state/actions';
import config from '~/config';

const cx = classNames.bind(styles);

function Search({ className, big }) {
  const [state, dispatch, , , , setSearchTextError, , setSearchText, currentCity, setCurrentCity] = useGlobalStore();
  const { userInputText } = state;
  const navigate = useNavigate();

  const [activeOverlay, setActiveOverlay] = useState(false);
  const [activeInputSearch, setActiveInputSearch] = useState(false);
  const [activeCityOption, setActiveCityOption] = useState(false);

  const handleSearchJobs = () => {
    // reset searchTextError
    setSearchTextError(false);

    // set value for searchText & location
    setSearchText(userInputText);
    dispatch(actions.setSearchLocation(currentCity));

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
            value={userInputText}
            onChange={(e) => dispatch(actions.setUserInputText(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearchJobs();
                setActiveOverlay(false);
                setActiveInputSearch(false);
                setActiveCityOption(false);
              }
            }}
          />
          <i className={cx({ show: !!userInputText })} onClick={() => dispatch(actions.setUserInputText(''))}>
            <FontAwesomeIcon icon={faXmark} />
          </i>
        </div>

        {/* city options */}
        <Tippy
          render={(attrs) => (
            <div className={cx('city-container')} tabIndex="-1" {...attrs}>
              <PopperWrapper className={cx('city-option')} fixed>
                {CITIES.map((city, index) => (
                  <span key={index} className={cx('city-item')} onClick={() => setCurrentCity(city)}>
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
              <span className={cx('city-title')}>{currentCity}</span>
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
