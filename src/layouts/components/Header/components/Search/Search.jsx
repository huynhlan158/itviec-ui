import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import NavLink from '../NavLink';
import { CITIES } from '~/assess/constants';
import PopperWrapper from '~/components/Popper/PopperWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Search() {
  const [activeOverlay, setActiveOverlay] = useState(false);
  const [activeInputSearch, setActiveInputSearch] = useState(false);
  const [activeCityOption, setActiveCityOption] = useState(false);

  return (
    <NavLink className={cx('search')}>
      <div className={cx('container')}>
        {/* search input */}
        <div className={cx('search-input', { active: activeInputSearch })}>
          <input
            type="text"
            placeholder="Keyword skill (Java, iOS...), Job Title, Company..."
            onFocus={() => {
              setActiveOverlay(true);
              setActiveInputSearch(true);
            }}
          />
        </div>

        {/* city options */}
        <Tippy
          render={(attrs) => (
            <div className={cx('city-container')} tabIndex="-1" {...attrs}>
              <PopperWrapper className={cx('city-option')} fixed>
                <span className={cx('city-item')}>All Cities</span>
                {CITIES.map((city, index) => (
                  <span key={index} className={cx('city-item')}>
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
        >
          <div
            className={cx('city', { active: activeCityOption })}
            onClick={() => {
              setActiveOverlay(true);
              setActiveCityOption(true);
            }}
          >
            <span>Ho Chi Minh</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </Tippy>

        {/* search button */}
        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
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
    </NavLink>
  );
}

Search.propTypes = {
  // children: PropTypes.node,
};

export default Search;
