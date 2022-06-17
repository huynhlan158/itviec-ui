import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faDollarSign, faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import styles from './JobOverview.module.scss';
import Button from '~/components/Button';
import CharacteristicItem from '~/components/CharacteristicItem';

const cx = classNames.bind(styles);

// will replace by calling api
const job = {
  skills: ['NodeJS', 'ReactJS', 'Angular'],
  salary: '1,000 - 2,000 USD',
  address: '19th Floor, 81-85 Ham Nghi Street, Nguyen Thai Binh Ward, District 1, Ho Chi Minh',
  mapLink: '#',
  type: 'On-site',
  postedTime: 600000,
};
function JobOverview() {
  const jobPostedDay = Math.floor(job.postedTime / 1000 / 60 / 60 / 24);
  const dayUnit = jobPostedDay > 1 ? 'days' : 'day';
  const jobPostedHour = Math.ceil((job.postedTime / 1000 / 60 / 60) % 24);
  const hourUnit = jobPostedHour > 1 ? 'hours' : 'hour';

  return (
    <div className={cx('wrapper')}>
      <div className={cx('skills')}>
        {job.skills.map((skill, index) => (
          <Button key={index} basic md>
            {skill}
          </Button>
        ))}
      </div>

      <CharacteristicItem className={cx('salary')} icon={<FontAwesomeIcon icon={faDollarSign} />}>
        {job.salary}
      </CharacteristicItem>

      <CharacteristicItem icon={<FontAwesomeIcon icon={faLocationDot} />}>
        <>
          <span>{job.address}</span>
          <a href={job.mapLink} className={cx('map-link')}>
            See map
          </a>
        </>
      </CharacteristicItem>

      <CharacteristicItem icon={<FontAwesomeIcon icon={faDisplay} />}>{job.type}</CharacteristicItem>

      <CharacteristicItem className={cx({ newPost: !jobPostedDay })} icon={<FontAwesomeIcon icon={faCalendarDays} />}>
        {jobPostedDay > 0 ? `${jobPostedDay} ${dayUnit} ago` : `${jobPostedHour} ${hourUnit} ago`}
      </CharacteristicItem>
    </div>
  );
}

export default JobOverview;
