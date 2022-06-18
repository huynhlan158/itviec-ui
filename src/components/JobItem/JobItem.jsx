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

function JobItem({ data, jobSelected, selectJob }) {
  const { logo, title, salary, highlightBenefits, skills, location, postedTime, hotJob, seen, id } = data;

  const jobPostedDay = Math.floor(postedTime / 1000 / 60 / 60 / 24);
  const jobPostedHour = Math.ceil((postedTime / 1000 / 60 / 60) % 24);
  const timeUnit = jobPostedDay > 0 ? 'd' : 'h';

  return (
    <div
      className={cx('wrapper', { special: !!highlightBenefits, selected: jobSelected === id })}
      onClick={() => selectJob(id)}
    >
      <CompanyImage className={cx('logo-image')} to={config.routes.companyProfile} src={logo} alt="company_img" />

      <div className={cx('info')}>
        <NavLink to={config.routes.pending} className={cx('job-title')}>
          {title}
        </NavLink>

        <CharacteristicItem className={cx('salary')} icon={<FontAwesomeIcon icon={faDollarSign} />}>
          {salary}
        </CharacteristicItem>

        {highlightBenefits && (
          <ul className={cx('benefits')}>
            {highlightBenefits.map((benefit, index) => (
              <li key={index} className={cx('benefit-item')}>
                {benefit}
              </li>
            ))}
          </ul>
        )}

        <div className={cx('skills')}>
          {skills.map((skill, index) => (
            <Button className={cx('', { active: jobSelected === id })} key={index} basic>
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
  data: PropTypes.object.isRequired,
  jobSelected: PropTypes.string,
  selectJob: PropTypes.func,
};

export default JobItem;
