import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import styles from './JobOverview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function JobOverview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('skills')}>
        <Button>NodeJS</Button>
        <Button>ReactJS</Button>
        <Button>Angular</Button>
      </div>

      <div className={cx('salary')}>
        <i>
          <FontAwesomeIcon icon={faDollarSign} />
        </i>
        <span>1,000 - 2,000 USD</span>
      </div>

      <div className={cx('address')}>
        <i>
          <FontAwesomeIcon icon={faLocationDot} />
        </i>
        <span>19th Floor, 81-85 Ham Nghi Street, Nguyen Thai Binh Ward, District 1, Ho Chi Minh</span>
        <a href="">See map</a>
      </div>

      <div className={cx('type')}>
        <i>
          <FontAwesomeIcon icon={faComputer} />
        </i>
        <span>On-site</span>
      </div>

      <div className={cx('date-posted')}>
        <span>6 hours ago</span>
      </div>
    </div>
  );
}

export default JobOverview;
