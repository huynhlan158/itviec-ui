import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { useGlobalStore } from '~/store/useGlobalStore';
import config from '~/config';
import * as actions from '~/state/actions';

const cx = classNames.bind(styles);

function MenuSubItem({ children, className, search, searchBy }) {
  const [state, dispatch, , , , , , setSearchText, , setCurrentCity] = useGlobalStore();
  const { jobList, filteredJobList, searchJobList } = state;
  const navigate = useNavigate();

  const handleSearchJobs = () => {
    if (search) {
      // filter jobs by search values
      switch (searchBy) {
        case 'company':
          setSearchText('');
          dispatch(actions.setUserInputText(''));
          dispatch(actions.setSearchLocation('All Cities'));
          setCurrentCity('All Cities');
          break;
        case 'location':
          setSearchText('');
          dispatch(actions.setUserInputText(''));
          dispatch(actions.setSearchLocation(children));
          setCurrentCity(children);
          break;
        default:
          setSearchText(children);
          dispatch(actions.setUserInputText(children));
          dispatch(actions.setSearchLocation('All Cities'));
          setCurrentCity('All Cities');
          break;
      }

      // set default data to avoid setting default data again when calling api at job page that causes error when using quick search from home page for the 1st time
      // searchJobList.length === 0: to avoid reset data when clicking more than 1 time at the button
      if (searchJobList.length === 0) {
        dispatch(actions.setSearchJobList(jobList));
      }
      if (filteredJobList.length === 0) {
        dispatch(actions.setFilteredJobList(jobList));
      }

      // navigate to companyProfile/ job page and reset filters
      if (searchBy === 'company') {
        navigate(config.routes.companyProfile);
      } else {
        navigate(config.routes.jobs);
        dispatch(actions.removeAllFilters());
      }
    }
  };

  return (
    <div className={cx('menu-subitem', className)} onClick={handleSearchJobs}>
      {children}
    </div>
  );
}

MenuSubItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  search: PropTypes.bool,
  searchBy: PropTypes.string,
};

export default MenuSubItem;
