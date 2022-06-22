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

  if (selectedCompany.id) {
    return (
      <div className={cx('wrapper')}>
        <div className={cx('header')}>
          <CompanyImage to={config.routes.companyProfile} src={selectedCompany.logo} />

          <div className={cx('name')}>
            <h3 className={cx('title')}>{selectedCompany.name}</h3>
            <span className={cx('sub-title')}>{selectedCompany.slogan}</span>
          </div>
        </div>

        <div className={cx('content')}>
          <div className={cx('characteristics')}>
            <CharacteristicItem icon={<FontAwesomeIcon icon={faGear} />}>{selectedCompany.type}</CharacteristicItem>
            <CharacteristicItem icon={<FontAwesomeIcon icon={faUserGroup} />}>
              {selectedCompany.size}
            </CharacteristicItem>
            <CharacteristicItem icon={<FontAwesomeIcon icon={faCalendarDays} />}>
              {selectedCompany.workingDays}
            </CharacteristicItem>
            <CharacteristicItem
              icon={<Flag code={selectedCompany.countryCode} fallback={<FontAwesomeIcon icon={faFlag} />} />}
            >
              {selectedCompany.country}
            </CharacteristicItem>
            {!selectedCompany.overtime && (
              <CharacteristicItem icon={<FontAwesomeIcon icon={faClock} />}>No OT</CharacteristicItem>
            )}
          </div>

          <div className={cx('view-profile')}>
            <Button to={config.routes.companyProfile} outline lg>
              View Company Profile
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyOverview;
