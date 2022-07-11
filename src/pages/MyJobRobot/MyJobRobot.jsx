import classNames from 'classnames/bind';

import styles from './MyJobRobot.module.scss';
import Jobs from './Jobs';
import Companies from './Companies';

const cx = classNames.bind(styles);

function MyJobRobot() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Jobs />
        <Companies />
      </div>
    </div>
  );
}

export default MyJobRobot;
