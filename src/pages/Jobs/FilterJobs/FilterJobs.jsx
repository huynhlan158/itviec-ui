import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faFilter } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './FilterJobs.module.scss';
import { FILTERS, FILTER_TITLES } from '~/assess/constants';
import FilterInput from './FilterInput';
import { useGlobalStore } from '~/store/useGlobalStore';
import * as actions from '~/state/actions';
import config from '~/config';

const cx = classNames.bind(styles);

function FilterJobs() {
  const [state, dispatch, , , , setSearchTextError] = useGlobalStore();
  const { filterJobLevel, filterSalaryRange, filterCompanyType, searchJobList, companyList } = state;
  const navigate = useNavigate();

  const checkedCount = (item) => {
    switch (item) {
      case FILTER_TITLES.level:
        if (filterJobLevel.length > 0) {
          return <span className={cx('filter-number')}>{filterJobLevel.length}</span>;
        } else return;
      case FILTER_TITLES.salary:
        if (filterSalaryRange.length > 0) {
          return <span className={cx('filter-number')}>{filterSalaryRange.length}</span>;
        } else return;
      case FILTER_TITLES.companyType:
        if (filterCompanyType.length > 0) {
          return <span className={cx('filter-number')}>{filterCompanyType.length}</span>;
        } else return;
      default:
        return;
    }
  };

  const handleFilterJobs = () => {
    let result = searchJobList;

    // handle clear filters manually on filter bar & prevent filter when searchText is not found
    if (filterJobLevel.length === 0 && filterSalaryRange.length === 0 && filterCompanyType.length === 0) {
      // set result
      if (searchJobList.length > 0) {
        setSearchTextError(false);
        dispatch(actions.setFilteredJobList(searchJobList));
        dispatch(actions.setSelectedJob(searchJobList[0]));

        const selectedCompany = companyList.find((company) => company.id === searchJobList[0].companyId);
        dispatch(actions.setSelectedCompany(selectedCompany));
      } else {
        setSearchTextError(true);
        dispatch(actions.setFilteredJobList([]));
      }
    }

    // filter by job level
    if (filterJobLevel.length > 0) {
      result = result.filter((job) => {
        return filterJobLevel.map((level) => level.toLowerCase()).includes(job.jobLevel.toLowerCase());
      });
    }

    // filter by salary
    if (filterSalaryRange.length > 0) {
      result = result.filter((job) => {
        if (job.salaryMin && typeof job.salaryMin === 'string') {
          return job;
        } else {
          return job.salaryMax >= Math.min(...filterSalaryRange);
        }
      });
    }

    // filter by company type
    if (filterCompanyType.length > 0) {
      result = result.filter((job) => {
        const company = companyList.find((company) => company.id === job.companyId);
        return filterCompanyType.map((type) => type.toLowerCase()).includes(company.type.toLowerCase());
      });
    }

    // set result
    if (result.length > 0) {
      setSearchTextError(false);
      dispatch(actions.setFilteredJobList(result));
      dispatch(actions.setSelectedJob(result[0]));
      const selectedCompany = companyList.find((company) => company.id === result[0].companyId);
      dispatch(actions.setSelectedCompany(selectedCompany));
    } else {
      setSearchTextError(true);
      dispatch(actions.setFilteredJobList([]));
    }
  };

  const handleClearFilters = () => {
    // setSearchTextError(false);

    // set result
    if (searchJobList.length > 0) {
      setSearchTextError(false);
      dispatch(actions.setFilteredJobList(searchJobList));
      dispatch(actions.setSelectedJob(searchJobList[0]));
      const selectedCompany = companyList.find((company) => company.id === searchJobList[0].companyId);
      dispatch(actions.setSelectedCompany(selectedCompany));
    } else {
      setSearchTextError(true);
      dispatch(actions.setFilteredJobList([]));
    }

    // reset filters
    dispatch(actions.removeAllFilters());
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('filter-form')}>
        {FILTERS.map((filter, index) => (
          <FilterInput
            key={index}
            title={filter.title}
            items={filter.data}
            leftCharacter={filter.leftCharacter}
            rightCharacter={filter.rightCharacter}
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
