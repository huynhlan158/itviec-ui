import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faFilter } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './FilterJobs.module.scss';
import FilterInput from './FilterInput';
import { FILTERS, FILTER_TITLES } from '~/assess/constants';
import { useReduxSelector } from '~/redux/selectors';
import { filtersSlice } from '~/redux/slices';

const cx = classNames.bind(styles);

function FilterJobs() {
  const dispatch = useDispatch();
  const { searchTextError } = useReduxSelector();

  const [levels, setLevels] = useState([]);
  const [salaryRanges, setSalaryRanges] = useState([]);
  const [companyTypes, setCompanyTypes] = useState([]);

  const UPDATED_FILTERS = FILTERS.map((filter) => ({
    ...filter,
    state:
      filter.title === FILTER_TITLES.level
        ? levels
        : filter.title === FILTER_TITLES.salary
        ? salaryRanges
        : filter.title === FILTER_TITLES.companyType
        ? companyTypes
        : {},
    setState:
      filter.title === FILTER_TITLES.level
        ? setLevels
        : filter.title === FILTER_TITLES.salary
        ? setSalaryRanges
        : filter.title === FILTER_TITLES.companyType
        ? setCompanyTypes
        : {},
  }));

  // reset filters when accessing the page
  useEffect(() => {
    handleClearFilters();
  }, []);

  const checkedCount = (title) => {
    switch (title) {
      case FILTER_TITLES.level:
        if (levels.length > 0) {
          return <span className={cx('filter-number')}>{levels.length}</span>;
        } else return;
      case FILTER_TITLES.salary:
        if (salaryRanges.length > 0) {
          return <span className={cx('filter-number')}>{salaryRanges.length}</span>;
        } else return;
      case FILTER_TITLES.companyType:
        if (companyTypes.length > 0) {
          return <span className={cx('filter-number')}>{companyTypes.length}</span>;
        } else return;
      default:
        return;
    }
  };

  const handleFilterJobs = () => {
    if (searchTextError) {
      dispatch(filtersSlice.actions.searchTextErrorChange(false));
    }

    dispatch(filtersSlice.actions.levelsFilterChange(levels));
    dispatch(filtersSlice.actions.salaryRangesFilterChange(salaryRanges));
    dispatch(filtersSlice.actions.companyTypesFilterChange(companyTypes));
  };

  const handleClearFilters = () => {
    dispatch(filtersSlice.actions.searchTextErrorChange(false));

    setLevels([]);
    setSalaryRanges([]);
    setCompanyTypes([]);
    dispatch(filtersSlice.actions.resetFilters());
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('filter-form')}>
        {UPDATED_FILTERS.map((filter, index) => (
          <FilterInput
            key={index}
            title={filter.title}
            items={filter.data}
            leftCharacter={filter.leftCharacter}
            rightCharacter={filter.rightCharacter}
            state={filter.state}
            setState={filter.setState}
          >
            <button className={cx('filter-item')}>
              {checkedCount(filter.title)}
              {<span>{filter.title}</span>}
              {
                <i>
                  <FontAwesomeIcon icon={faCaretDown} />
                </i>
              }
            </button>
          </FilterInput>
        ))}

        <button className={cx('filter-item', 'filter-btn')} onClick={handleFilterJobs}>
          <FontAwesomeIcon icon={faFilter} />
        </button>

        <button className={cx('clear-btn')} onClick={handleClearFilters}>
          Clear all filters
        </button>
      </div>
    </div>
  );
}

export default FilterJobs;
