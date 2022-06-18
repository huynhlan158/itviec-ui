import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './TopCompany.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function TopCompany({ data }) {
  const { companyName, profileLink, logo, location, jobOpening } = data;

  return (
    <Link className={cx('wrapper')} to={profileLink}>
      <div className={cx('logo')}>
        <Image src={logo} alt="company_logo" />
      </div>

      <h3 className={cx('name')}>{companyName}</h3>

      <div className={cx('info')}>
        {jobOpening > 0 && (
          <>
            <span className={cx('job-number')}>
              <span>{jobOpening > 1 ? `${jobOpening} Jobs` : `${jobOpening} Job`}</span>
              <span>-</span>
            </span>

            <span>{location}</span>
          </>
        )}
      </div>
    </Link>
  );
}

TopCompany.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TopCompany;
