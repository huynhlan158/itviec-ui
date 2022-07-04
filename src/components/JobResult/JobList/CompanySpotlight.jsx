import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import styles from './JobList.module.scss';
import * as topCompaniesService from '~/services/topCompaniesService';
import CompanyImage from '~/components/CompanyImage';
import Image from '~/components/Image';
import config from '~/config';
import { useGlobalStore } from '~/store/useGlobalStore';

const cx = classNames.bind(styles);

function CompanySpotlight() {
  const [state] = useGlobalStore();
  const { jobList } = state;
  const [topCompany, setTopCompany] = useState({});
  const topCompanyJobList = jobList.filter((job) => job.companyId === topCompany.id);

  // get 1 top company randomly in company top list
  useEffect(() => {
    const fetchApi = async () => {
      const result = await topCompaniesService.getTopCompanies();

      const randomIndex = Math.floor(Math.random() * result.topCompanies.length);
      setTopCompany(result.topCompanies[randomIndex]);
    };

    fetchApi();
  }, []);

  return (
    topCompany.id && (
      <div className={cx('company-spotlight')}>
        <h3 className={cx('company-title')}>Company Spotlight</h3>
        <div className={cx('company-images')}>
          <Link
            to={config.routes.companyProfile.replace(
              ':companyname',
              topCompany.name.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() +
                topCompany.id.replace('_', '-').toLowerCase(),
            )}
          >
            <Image className={cx('image')} src={topCompany.images[0]} alt="company_img" />
          </Link>
          <CompanyImage
            className={cx('logo')}
            to={config.routes.companyProfile.replace(
              ':companyname',
              topCompany.name.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() +
                topCompany.id.replace('_', '-').toLowerCase(),
            )}
            src={topCompany.logo}
            alt="company_logo"
          />
        </div>

        <Link
          className={cx('company-info')}
          to={config.routes.companyProfile.replace(
            ':companyname',
            topCompany.name.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() +
              topCompany.id.replace('_', '-').toLowerCase(),
          )}
        >
          <h4>{topCompany.name}</h4>
          <p className={cx('location')}>
            {typeof topCompany.district === 'number'
              ? `District ${topCompany.district}, ${topCompany.province}`
              : `${topCompany.district}, ${topCompany.province}`}
          </p>
          <p className={cx('slogan')}>{topCompany.slogan || topCompany.name}</p>
        </Link>

        <div>
          {topCompanyJobList.slice(0, 3).map((job, index) => (
            <Link
              key={index}
              className={cx('job-item')}
              to={config.routes.job.replace(
                ':jobname',
                job.title.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() + job.id.replace('_', '-').toLowerCase(),
              )}
            >
              {job.title}
            </Link>
          ))}
          <Link
            to={config.routes.companyProfile.replace(
              ':companyname',
              topCompany.name.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() +
                topCompany.id.replace('_', '-').toLowerCase(),
            )}
            className={cx('job-item', 'view-all')}
          >
            {`View ${topCompanyJobList.length} jobs`}{' '}
            <i>
              <FontAwesomeIcon icon={faCaretRight} />
            </i>
          </Link>
        </div>
      </div>
    )
  );
}

export default CompanySpotlight;
