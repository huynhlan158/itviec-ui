import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

import styles from './JobItem.module.scss';
import Image from '~/components/Image';
import Button from '../Button';
import config from '~/config';

const cx = classNames.bind(styles);

function JobItem({ logo, title, salary, skills, location, postedDate, hotTag, newTag, special, active }) {
  return (
    <div className={cx('wrapper', { special, active })}>
      <NavLink to={config.routes.pending} className={cx('photo')}>
        <Image className={cx('photo_image')} src={logo} alt="company_img" />
      </NavLink>

      <div className={cx('info')}>
        <NavLink to={config.routes.pending} className={cx('job-title')}>
          {title}
        </NavLink>
        <div className={cx('salary')}>
          <i>
            <FontAwesomeIcon icon={faDollarSign} />
          </i>
          <span>{salary}</span>
        </div>
        <div className={cx('skills')}>
          {skills.map((skill, index) => (
            <Button className={cx('', { active })} key={index}>
              {skill}
            </Button>
          ))}
        </div>
      </div>

      <div className={cx('hight-light')}>
        {hotTag ? <span className={cx('hot-tag')}>Hot</span> : ''}
        {newTag ? <span className={cx('new-tag')}>New For You</span> : ''}
        <span>{location}</span>
        <span>{postedDate}</span>
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
