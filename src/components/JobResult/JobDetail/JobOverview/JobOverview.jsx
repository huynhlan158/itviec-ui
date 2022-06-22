import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faDollarSign, faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import styles from './JobOverview.module.scss';
import Button from '~/components/Button';
import CharacteristicItem from '~/components/CharacteristicItem';
import { useGlobalStore } from '~/store/useGlobalStore';

const cx = classNames.bind(styles);

function JobOverview() {
  const [state] = useGlobalStore();
  const { selectedJob } = state;

  const jobPostedDay = Math.floor(selectedJob.postedTime / 1000 / 60 / 60 / 24);
  const dayUnit = jobPostedDay > 1 ? 'days' : 'day';
  const jobPostedHour = Math.floor((selectedJob.postedTime / 1000 / 60 / 60) % 24);
  const hourUnit = jobPostedHour > 1 ? 'hours' : 'hour';
  const jobPostedMinute = Math.ceil((selectedJob.postedTime / 1000 / 60) % 60);
  const minuteUnit = jobPostedMinute > 1 ? 'minutes' : 'minute';

  if (selectedJob.id) {
    return (
      <div className={cx('wrapper')}>
        <div className={cx('skills')}>
          {selectedJob.skills?.map((skill, index) => (
            <Button key={index} basic md>
              {skill}
            </Button>
          ))}
        </div>

        <CharacteristicItem className={cx('salary')} icon={<FontAwesomeIcon icon={faDollarSign} />}>
          {selectedJob.salary}
        </CharacteristicItem>

        <CharacteristicItem icon={<FontAwesomeIcon icon={faLocationDot} />}>
          <>
            <span>{selectedJob.address}</span>
            <a href={selectedJob.mapLink} className={cx('map-link')} target="_blank">
              See map
            </a>
          </>
        </CharacteristicItem>

        <CharacteristicItem icon={<FontAwesomeIcon icon={faDisplay} />}>{selectedJob.type}</CharacteristicItem>

        <CharacteristicItem className={cx({ newPost: !jobPostedDay })} icon={<FontAwesomeIcon icon={faCalendarDays} />}>
          {jobPostedDay > 0
            ? `${jobPostedDay} ${dayUnit} ago`
            : jobPostedHour > 0
            ? `${jobPostedHour} ${hourUnit} ago`
            : `${jobPostedMinute} ${minuteUnit} ago`}
        </CharacteristicItem>
      </div>
    );
  }
}

export default JobOverview;
