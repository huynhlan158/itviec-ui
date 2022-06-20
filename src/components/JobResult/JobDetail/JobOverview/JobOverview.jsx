import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faDollarSign, faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import styles from './JobOverview.module.scss';
import Button from '~/components/Button';
import CharacteristicItem from '~/components/CharacteristicItem';
import { useStore } from '~/components/JobResult/store/useStore';

const cx = classNames.bind(styles);

function JobOverview() {
  const [state] = useStore();
  const { selectedJob } = state;

  const jobPostedDay = Math.floor(selectedJob.postedTime / 1000 / 60 / 60 / 24);
  const dayUnit = jobPostedDay > 1 ? 'days' : 'day';
  const jobPostedHour = Math.ceil((selectedJob.postedTime / 1000 / 60 / 60) % 24);
  const hourUnit = jobPostedHour > 1 ? 'hours' : 'hour';

  return (
    <h1>Overview</h1>

    // <div className={cx('wrapper')}>
    //   <div className={cx('skills')}>
    //     {selectedJob.skills.map((skill, index) => (
    //       <Button key={index} basic md>
    //         {skill}
    //       </Button>
    //     ))}
    //   </div>

    //   <CharacteristicItem className={cx('salary')} icon={<FontAwesomeIcon icon={faDollarSign} />}>
    //     {selectedJob.id} {selectedJob.salary}
    //   </CharacteristicItem>

    //   <CharacteristicItem icon={<FontAwesomeIcon icon={faLocationDot} />}>
    //     <>
    //       <span>{selectedJob.address}</span>
    //       <a href={selectedJob.mapLink} className={cx('map-link')}>
    //         See map
    //       </a>
    //     </>
    //   </CharacteristicItem>

    //   <CharacteristicItem icon={<FontAwesomeIcon icon={faDisplay} />}>{selectedJob.type}</CharacteristicItem>

    //   <CharacteristicItem className={cx({ newPost: !jobPostedDay })} icon={<FontAwesomeIcon icon={faCalendarDays} />}>
    //     {jobPostedDay > 0 ? `${jobPostedDay} ${dayUnit} ago` : `${jobPostedHour} ${hourUnit} ago`}
    //   </CharacteristicItem>
    // </div>
  );
}

export default JobOverview;
