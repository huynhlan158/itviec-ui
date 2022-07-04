import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faDollarSign, faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import styles from './JobOverview.module.scss';
import Button from '~/components/Button';
import CharacteristicItem from '~/components/CharacteristicItem';
import config from '~/config';
import { useGlobalStore } from '~/store/useGlobalStore';
import * as actions from '~/state/actions';

const cx = classNames.bind(styles);

function JobOverview({ job }) {
  const [state, dispatch, , , , setSearchTextError, , setSearchText] = useGlobalStore();
  const { jobList } = state;
  const navigate = useNavigate();

  const { postedTime, id, skills, salaryMin, salaryMax, address, mapLink, type } = job;

  const jobPostedDay = Math.floor(postedTime / 1000 / 60 / 60 / 24);
  const dayUnit = jobPostedDay > 1 ? 'days' : 'day';
  const jobPostedHour = Math.floor((postedTime / 1000 / 60 / 60) % 24);
  const hourUnit = jobPostedHour > 1 ? 'hours' : 'hour';
  const jobPostedMinute = Math.ceil((postedTime / 1000 / 60) % 60);
  const minuteUnit = jobPostedMinute > 1 ? 'minutes' : 'minute';

  const handleSearchJobs = (skill) => {
    // reset searchTextError
    setSearchTextError(false);

    // set value for searchText & location
    setSearchText(skill);
    dispatch(actions.setUserInputText(skill));
    dispatch(actions.setSearchLocation('All Cities'));

    // set default data here to avoid setting default data again when calling api at job page that causes error when using quick search from home page for the 1st time
    dispatch(actions.setSearchJobList(jobList));
    dispatch(actions.setFilteredJobList(jobList));

    // navigate to job page and reset filters
    navigate(config.routes.jobs);
    dispatch(actions.removeAllFilters());
  };

  if (id) {
    return (
      <div className={cx('wrapper')}>
        <div className={cx('skills')}>
          {skills?.map((skill, index) => (
            <Button key={index} basic md onClick={() => handleSearchJobs(skill)}>
              {skill}
            </Button>
          ))}
        </div>

        <CharacteristicItem className={cx('salary')} icon={<FontAwesomeIcon icon={faDollarSign} />}>
          {salaryMin && typeof salaryMin === 'number'
            ? `${salaryMin.toLocaleString('en-US')} - ${salaryMax.toLocaleString('en-US')} USD`
            : salaryMin && typeof salaryMin === 'string'
            ? salaryMin
            : `Up to ${salaryMax.toLocaleString('en-US')} USD`}
        </CharacteristicItem>

        <CharacteristicItem icon={<FontAwesomeIcon icon={faLocationDot} />}>
          <>
            <span>{address}</span>
            <a href={mapLink} className={cx('map-link')} target="_blank">
              See map
            </a>
          </>
        </CharacteristicItem>

        <CharacteristicItem icon={<FontAwesomeIcon icon={faDisplay} />}>{type}</CharacteristicItem>

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

JobOverview.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobOverview;
