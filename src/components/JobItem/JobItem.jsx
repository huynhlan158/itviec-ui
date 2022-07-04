import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

import styles from './JobItem.module.scss';
import CompanyImage from '~/components/CompanyImage';
import Button from '../Button';
import config from '~/config';
import CharacteristicItem from '~/components/CharacteristicItem';
import { useGlobalStore } from '~/store/useGlobalStore';
import * as actions from '~/state/actions';

const cx = classNames.bind(styles);

function JobItem({ data, selectJob = () => {} }) {
  const [state, dispatch, , , , setSearchTextError, , setSearchText] = useGlobalStore();
  const { selectedJob, companyList, jobList } = state;
  const navigate = useNavigate();

  const {
    id,
    logo,
    title,
    salaryMin,
    salaryMax,
    highlightBenefits,
    skills,
    location,
    postedTime,
    hotJob,
    seen,
    companyId,
  } = data;

  const jobPostedDay = Math.floor(postedTime / 1000 / 60 / 60 / 24);
  const jobPostedHour = Math.floor((postedTime / 1000 / 60 / 60) % 24);
  const jobPostedMinute = Math.ceil((postedTime / 1000 / 60) % 60);
  const timeUnit = jobPostedDay > 0 ? 'd' : jobPostedHour > 0 ? 'h' : 'm';

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

  return (
    <div
      className={cx('wrapper', { special: !!highlightBenefits, selected: selectedJob.id === id })}
      onClick={() => selectJob(data)}
    >
      <CompanyImage
        className={cx('logo-image')}
        to={config.routes.companyProfile.replace(
          ':companyname',
          companyList.length > 0 &&
            companyList
              .find((company) => company.id === companyId)
              .name.replace(/[^a-zA-Z1-10000]/g, '-')
              .toLowerCase() + companyId.replace('_', '-').toLowerCase(),
        )}
        src={logo}
        alt="company_img"
      />

      <div className={cx('info')}>
        <Link
          to={config.routes.job.replace(
            ':jobname',
            title.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() + id.replace('_', '-').toLowerCase(),
          )}
          className={cx('job-title')}
        >
          {title}
        </Link>

        <CharacteristicItem className={cx('salary')} icon={<FontAwesomeIcon icon={faDollarSign} />}>
          {salaryMin && typeof salaryMin === 'number'
            ? `${salaryMin.toLocaleString('en-US')} - ${salaryMax.toLocaleString('en-US')} USD`
            : salaryMin && typeof salaryMin === 'string'
            ? salaryMin
            : `Up to ${salaryMax.toLocaleString('en-US')} USD`}
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
            <Button
              className={cx({ active: selectedJob.id === id })}
              key={index}
              basic
              onClick={() => handleSearchJobs(skill)}
            >
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
          {jobPostedDay > 0
            ? `${jobPostedDay} ${timeUnit}`
            : jobPostedHour > 0
            ? `${jobPostedHour} ${timeUnit}`
            : `${jobPostedMinute} ${timeUnit}`}
        </span>
      </div>
    </div>
  );
}

JobItem.propTypes = {
  data: PropTypes.object.isRequired,
  selectJob: PropTypes.func,
};

export default JobItem;
