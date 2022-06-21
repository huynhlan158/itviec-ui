import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './TopCompany.module.scss';
import Image from '~/components/Image';
import { useStore } from '~/components/JobResult/store/useStore';

const cx = classNames.bind(styles);

function TopCompany({ data }) {
  const [state] = useStore();
  const { jobList } = state;

  const { id, name, profileLink, logo, location } = data;
  const numberOfJobOpening = jobList.filter((job) => job.companyId === id).length;

  return (
    <Link className={cx('wrapper')} to={profileLink}>
      <div className={cx('logo')}>
        <Image src={logo} alt="company_logo" />
      </div>

      <h3 className={cx('name')}>{name}</h3>

      <div className={cx('info')}>
        {numberOfJobOpening > 0 && (
          <>
            <span className={cx('job-number')}>
              <span>{numberOfJobOpening > 1 ? `${numberOfJobOpening} Jobs` : `${numberOfJobOpening} Job`}</span>
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
