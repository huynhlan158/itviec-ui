import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ToggleSwitch.module.scss';

const cx = classNames.bind(styles);

function ToggleSwitch({ state, onToggle }) {
  return (
    <>
      <label className={cx('switch')}>
        <input type="checkbox" checked={state} onChange={onToggle} />
        <span className={cx('slider')}></span>
      </label>
    </>
  );
}

ToggleSwitch.propTypes = {
  children: PropTypes.node,
};

export default ToggleSwitch;
