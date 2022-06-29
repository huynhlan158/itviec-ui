import classNames from 'classnames/bind';
import Flag from 'react-world-flags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import styles from './CompanyOverview.module.scss';
import CompanyImage from '~/components/CompanyImage';
import Button from '~/components/Button';
import config from '~/config';
import CharacteristicItem from '~/components/CharacteristicItem';
import { faCalendarDays, faClock, faFlag } from '@fortawesome/free-regular-svg-icons';
import { useGlobalStore } from '~/store/useGlobalStore';

const cx = classNames.bind(styles);

function CompanyOverview() {
  const [state] = useGlobalStore();
  const { selectedCompany } = state;
  const { id, logo, name, slogan, type, size, workingDays, countryCode, country, overtime } = selectedCompany;

  if (id) {
    return (
      <div className={cx('wrapper')}>
        <div className={cx('header')}>
          <CompanyImage to={config.routes.companyProfile} src={logo} />

          <div className={cx('name')}>
            <h3 className={cx('title')}>{name}</h3>
            <span className={cx('sub-title')}>{slogan || name}</span>
          </div>
        </div>

        <div className={cx('content')}>
          <div className={cx('characteristics')}>
            <CharacteristicItem icon={<FontAwesomeIcon icon={faGear} />}>{type}</CharacteristicItem>
            <CharacteristicItem icon={<FontAwesomeIcon icon={faUserGroup} />}>{size}</CharacteristicItem>
            <CharacteristicItem icon={<FontAwesomeIcon icon={faCalendarDays} />}>{workingDays}</CharacteristicItem>
            <CharacteristicItem icon={<Flag code={countryCode} fallback={<FontAwesomeIcon icon={faFlag} />} />}>
              {country}
            </CharacteristicItem>
            {!overtime && <CharacteristicItem icon={<FontAwesomeIcon icon={faClock} />}>No OT</CharacteristicItem>}
          </div>

          <div className={cx('view-profile')}>
            <Button
              to={config.routes.companyProfile.replace(
                ':companyname',
                selectedCompany.name.replace(/[^a-zA-Z1-10000]/g, '-').toLowerCase() +
                  selectedCompany.id.replace('_', '-').toLowerCase(),
              )}
              outline
              lg
            >
              View Company Profile
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyOverview;
