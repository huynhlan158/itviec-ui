import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './FilterJobs.module.scss';
import * as actions from '~/state/actions';
import { useGlobalStore } from '~/store/useGlobalStore';
import { FILTER_TITLES } from '~/assess/constants';

const cx = classNames.bind(styles);

function FilterInput({ children, title, items = [], leftCharacter, rightCharacter }) {
  const [state, dispatch] = useGlobalStore();
  const { filterJobLevel, filterSalaryRange, filterCompanyType } = state;

  // update filter states when checking/unchecking filter items
  const handleFilterCheck = (e) => {
    let isChecked = e.target.checked;

    if (isChecked) {
      switch (title) {
        case FILTER_TITLES.level:
          dispatch(actions.addFilterLevel(e.target.value));
          break;
        case FILTER_TITLES.salary:
          dispatch(actions.addFilterSalary(Number(e.target.value)));
          break;
        case FILTER_TITLES.companyType:
          dispatch(actions.addFilterCompanyType(e.target.value));
          break;
      }
    } else {
      switch (title) {
        case FILTER_TITLES.level:
          dispatch(actions.removeFilterLevel(e.target.value));
          break;
        case FILTER_TITLES.salary:
          dispatch(actions.removeFilterSalary(Number(e.target.value)));
          break;
        case FILTER_TITLES.companyType:
          dispatch(actions.removeFilterCompanyType(e.target.value));
          break;
      }
    }
  };

  // reset checkbox on submit/clear all
  const handleResetCheckbox = (item) => {
    switch (title) {
      case FILTER_TITLES.level:
        return filterJobLevel.includes(item);
      case FILTER_TITLES.salary:
        return filterSalaryRange.includes(item);
      case FILTER_TITLES.companyType:
        return filterCompanyType.includes(item);
    }
  };

  return (
    <Tippy
      render={(attrs) => (
        <div className={cx('filter-popper')} tabIndex="-1" {...attrs}>
          {items.map((item, index) => {
            return (
              <div key={index} className={cx('check-item')}>
                <input
                  type="checkbox"
                  id={item}
                  value={item}
                  name={item}
                  onChange={handleFilterCheck}
                  checked={handleResetCheckbox(item)}
                />
                <label htmlFor={item}>
                  {leftCharacter && <span className={cx('left-character')}>{leftCharacter}</span>}
                  {typeof item === 'number' ? item.toLocaleString('en-US') : item}
                  {rightCharacter && <span className={cx('right-character')}>{rightCharacter}</span>}
                </label>
              </div>
            );
          })}
        </div>
      )}
      interactive
      placement="bottom-start"
      appendTo={document.body}
      trigger="click"
    >
      {children}
    </Tippy>
  );
}

FilterInput.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  items: PropTypes.array,
  leftCharacter: PropTypes.node,
  leftCharacter: PropTypes.node,
};

export default FilterInput;
