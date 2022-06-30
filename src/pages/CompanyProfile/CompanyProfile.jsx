import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Flag from 'react-world-flags';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faCalendarDays,
  faClock,
  faFlag,
  faGear,
  faLocationDot,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

import styles from './CompanyProfile.module.scss';
import CharacteristicItem from '~/components/CharacteristicItem';
import Button from '~/components/Button';
import Image from '~/components/Image';
import config from '~/config';
import { useGlobalStore } from '~/store/useGlobalStore';
import * as actions from '~/state/actions';
import JobItem from '~/components/JobItem';
import Path from '~/components/Path';
import Rate from '~/components/Rate';

const cx = classNames.bind(styles);

function CompanyProfile() {
  const [, dispatch, headerShrink, , , setSearchTextError, , setSearchText] = useGlobalStore();
  const [currentCompany, setCurrentCompany] = useState({});
  const [type, setType] = useState('job');
  const [currentJobList, setCurrentJobList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // set scroll to top when loading the page
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // call api & set states
    axios.get('/api/it-jobs').then((res) => {
      const companyId = window.location.pathname.slice(-7).replace('-', '_');
      const currCompany = res.data.companies.find((company) => company.id.toLowerCase() === companyId);

      setCurrentCompany(currCompany);
      setCurrentJobList(res.data.jobs.filter((job) => job.companyId.toLowerCase() === companyId));
      dispatch(actions.setCompanyList(res.data.companies));
      dispatch(actions.setSelectedJob({}));
    });
  }, []);

  const handleSearchJobs = (skill) => {
    // reset searchTextError
    setSearchTextError(false);

    // set value for searchText & location
    setSearchText(skill);
    dispatch(actions.setUserInputText(skill));
    dispatch(actions.setSearchLocation('All Cities'));

    // navigate to job page and reset filters
    navigate(config.routes.jobs);
    dispatch(actions.removeAllFilters());
  };

  return (
    currentCompany && (
      <div className={cx('wrapper')}>
        <div className={cx('container', { shrink: headerShrink })}>
          {/* header */}
          {currentCompany.id && (
            <header className={cx('header')}>
              <div className={cx('logo')}>
                <Image to={config.routes.companyProfile} src={currentCompany.logo} />
              </div>

              <div className={cx('info')}>
                <h1 className={cx('title')}>{currentCompany.name}</h1>
                <div className={cx('characteristics')}>
                  <CharacteristicItem className={cx('location')} icon={<FontAwesomeIcon icon={faLocationDot} />}>
                    {typeof currentCompany.district === 'number'
                      ? `District ${currentCompany.district}, ${currentCompany.province}`
                      : `${currentCompany.district}, ${currentCompany.province}`}
                  </CharacteristicItem>
                  <CharacteristicItem icon={<FontAwesomeIcon icon={faGear} />}>
                    {currentCompany.type}
                  </CharacteristicItem>
                  <CharacteristicItem icon={<FontAwesomeIcon icon={faUserGroup} />}>
                    {currentCompany.size}
                  </CharacteristicItem>
                  <CharacteristicItem icon={<FontAwesomeIcon icon={faCalendarDays} />}>
                    {currentCompany.workingDays}
                  </CharacteristicItem>
                  <CharacteristicItem
                    icon={<Flag code={currentCompany.countryCode} fallback={<FontAwesomeIcon icon={faFlag} />} />}
                  >
                    {currentCompany.country}
                  </CharacteristicItem>
                  <CharacteristicItem icon={<FontAwesomeIcon icon={faClock} />}>
                    {!currentCompany.overtime ? 'No OT' : currentCompany.overtime}
                  </CharacteristicItem>
                </div>
              </div>

              <div className={cx('actions')}>
                <Button className={cx('actions-btn')} primary xl>
                  Write Review
                </Button>
                <Button className={cx('actions-btn')} outline xl>
                  Follow
                </Button>
              </div>
            </header>
          )}

          {/* navigation bar */}
          <ul className={cx('navigation')}>
            <li className={cx('tab', { active: type === 'job' })} onClick={() => setType('job')}>
              Jobs
            </li>
            <li className={cx('tab', { active: type === 'review' })} onClick={() => setType('review')}>
              {`${currentCompany.review ? currentCompany.review?.length : ''} ${
                currentCompany.review?.length > 0 ? 'Reviews' : 'Review'
              }`}
            </li>
            <li className={cx('website')}>
              <a href={currentCompany.website} target="_blank">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </a>
            </li>
          </ul>

          {/* company detail info */}
          <div className={cx('content')}>
            {type === 'job' ? (
              <>
                {/* left side */}
                <div>
                  {/* company job list */}
                  <div className={cx('content-left_item')}>
                    <h3 className={cx('content-title')}>{currentCompany.name} Jobs</h3>
                    {currentJobList?.length > 0 &&
                      currentJobList?.map((job, index) => <JobItem key={index} data={job} />)}
                  </div>

                  {/* company overview */}
                  <div className={cx('content-left_item')}>
                    {currentCompany.overview && (
                      <>
                        <h3 className={cx('content-title')}>Overview about {currentCompany.name}</h3>
                        {currentCompany.overview?.map((item, index) => (
                          <div key={index}>
                            <h4 className={cx('content-subtitle')}>{item.subTitle}</h4>
                            {item.content?.map((item2, index2) => (
                              <p key={index2}>{item2}</p>
                            ))}
                          </div>
                        ))}
                      </>
                    )}

                    {currentCompany.skills && (
                      <>
                        <h3 className={cx('content-title')}>
                          {currentCompany.skills?.title || 'Latest Technology We Trust'}
                        </h3>
                        <div className={cx('skill-list')}>
                          {currentCompany.skills.list?.map((skill, index) => (
                            <Button key={index} basic onClick={() => handleSearchJobs(skill)}>
                              {skill}
                            </Button>
                          ))}
                        </div>
                        <ul className={cx('list-item')}>
                          {currentCompany.skills.detail?.length > 1 ? (
                            currentCompany.skills.detail?.map((item, index) => <li key={index}>{item}</li>)
                          ) : (
                            <p>{currentCompany.skills.detail}</p>
                          )}
                        </ul>
                      </>
                    )}
                  </div>

                  {/* company benefits */}
                  {currentCompany.benefit && (
                    <div className={cx('content-left_item')}>
                      <h3 className={cx('content-title')}>Why You'll Love Working Here</h3>
                      <div className={cx('list-item', 'benefit')}>
                        {currentCompany.benefit.hightlight?.map((item, index) => (
                          <div key={index}>
                            <span>{index + 1}</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className={cx('company-photos')}>
                        <img src={currentCompany.images[0]} alt="company_img" />
                      </div>

                      <h4 className={cx('content-subtitle')}>{currentCompany.benefit.title}</h4>
                      <ul className={cx('list-item')}>
                        {currentCompany.benefit.detail?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* right side */}
                {!currentCompany.review || currentCompany.review.length === 0 ? (
                  <div>
                    <div className={cx('content-right_item')}>
                      <h3 className={cx('content-title')}>Let your voice be heard.</h3>
                      <div>
                        <p className={cx('review-title')}>Review {currentCompany.name} now</p>
                        <Button primary xl>
                          Write review
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : currentCompany.review.length < 4 ? (
                  <div>
                    <div className={cx('content-right_item')}>
                      <h3 className={cx('content-title')}>Top Reviews</h3>
                      {currentCompany.review?.map((review, index) => (
                        <div key={index} className={cx('review-content')}>
                          <p className={cx('review-title')}>{review.title}</p>
                          <Rate small score={review.score} background />
                          <p className={cx('review-comment')}>{review.comment}</p>
                        </div>
                      ))}
                      <Button primary xl>
                        Write review
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className={cx('content-right_item')}>
                      <h3 className={cx('content-title')}>Overall Rating</h3>
                      <div className={cx('overall-rating')}>
                        <Rate big score={currentCompany.recommendation.overallScore} background />
                        <span className={cx('overall-score')}>{currentCompany.recommendation.overallScore}</span>
                      </div>
                      <div className={cx('rating-overall')}>
                        <div className={cx('rating-ratio')}>{currentCompany.recommendation.ratio}%</div>
                        <div className={cx('rating-comment')}>Recommend working here to a friend</div>
                      </div>
                      <div className={cx('rating-detail')}>
                        {currentCompany.recommendation.detail?.map((item, index) => (
                          <div key={index} className={cx('rating-item')}>
                            <span>{item.title}</span>
                            <div className={cx('rating-item_score')}>
                              <Rate small score={item.score} />
                              <span>{item.score}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <Button primary xl>
                          See all ratings and reviews
                        </Button>
                      </div>
                    </div>

                    <div className={cx('content-right_item')}>
                      <h3 className={cx('content-title')}>Top Reviews</h3>
                      {currentCompany.review?.slice(0, 3).map((review, index) => (
                        <div key={index} className={cx('review-content')}>
                          <p className={cx('review-title')}>{review.title}</p>
                          <Rate small score={review.score} background />
                          <p className={cx('review-comment')}>{review.comment}</p>
                        </div>
                      ))}
                      <Button primary xl>
                        Write review
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : type === 'review' ? (
              <>
                {currentCompany.recommendation && (
                  <div className={cx('content-left')}>
                    <div className={cx('rating-overall_left')}>
                      <div className={cx('rating-item_left')}>
                        <span className={cx('overall-score')}>{currentCompany.recommendation.overallScore}</span>
                        <Rate big score={currentCompany.recommendation.overallScore} background />
                      </div>
                      <div className={cx('rating-item_left')}>
                        <div className={cx('rating-ratio')}>{currentCompany.recommendation.ratio}%</div>
                        <div className={cx('rating-comment')}>Recommend working here to a friend</div>
                      </div>
                    </div>

                    <div className={cx('content-left_item')}>
                      <h3 className={cx('content-title')}>
                        {currentCompany.review && currentCompany.review?.length} Employee Reviews
                      </h3>
                      {currentCompany.review &&
                        currentCompany.review?.map((item, index) => (
                          <div className={cx('review-comment')} key={index}>
                            <h3 className={cx('content-title')}>{item.title}</h3>
                            <Rate small score={item.score} />
                            <span>{item.comment}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                <div className={cx('content-right')}>
                  <div className={cx('content-right_item')}>
                    <h3 className={cx('content-title')}>Let your voice be heard.</h3>
                    <div>
                      <p className={cx('review-title')}>Review {currentCompany.name} now</p>
                      <Button primary xl>
                        Write review
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ''
            )}
          </div>
          <Path items={[{ title: 'Home', to: config.routes.home }, { title: currentCompany.name }]} />
        </div>
      </div>
    )
  );
}

CompanyProfile.propTypes = {
  children: PropTypes.node,
};

export default CompanyProfile;
