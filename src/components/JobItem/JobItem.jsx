import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

import styles from './JobItem.module.scss';
import CompanyImage from '~/components/CompanyImage';
import Button from '../Button';
import config from '~/config';
import CharacteristicItem from '~/components/CharacteristicItem';

const cx = classNames.bind(styles);

function JobItem({ logo, title, salary, skills, location, postedTime, hotJob, seen, special, active }) {
  const jobPostedDay = Math.floor(postedTime / 1000 / 60 / 60 / 24);
  const jobPostedHour = Math.ceil((postedTime / 1000 / 60 / 60) % 24);
  const timeUnit = jobPostedDay > 0 ? 'd' : 'h';

  return (
    <div className={cx('wrapper', { special, active })}>
      <CompanyImage className={cx('logo-image')} to={config.routes.companyProfile} src={logo} alt="company_img" />

      <div className={cx('info')}>
        <NavLink to={config.routes.pending} className={cx('job-title')}>
          {title}
        </NavLink>

        <CharacteristicItem className={cx('salary')} icon={<FontAwesomeIcon icon={faDollarSign} />}>
          {salary}
        </CharacteristicItem>

        <div className={cx('skills')}>
          {skills.map((skill, index) => (
            <Button className={cx('', { active })} key={index} basic>
              {skill}
            </Button>
          ))}
        </div>
      </div>

      <div className={cx('hight-light')}>
        {hotJob ? <span className={cx('hot-tag')}>Hot</span> : ''}
        {!seen ? <span className={cx('new-tag')}>New For You</span> : ''}
        <span>{location}</span>
        <span className={cx({ newPost: !jobPostedDay })}>
          {jobPostedDay > 0 ? `${jobPostedDay} ${timeUnit}` : `${jobPostedHour} ${timeUnit}`}
        </span>
      </div>
    </div>
  );
}

JobItem.propTypes = {
  logo: PropTypes.node,
  title: PropTypes.string,
  salary: PropTypes.string,
  skills: PropTypes.array,
  location: PropTypes.string,
  postedDate: PropTypes.string,
  hotTag: PropTypes.bool,
  newTag: PropTypes.bool,
  special: PropTypes.bool,
  active: PropTypes.bool,
};

export default JobItem;
