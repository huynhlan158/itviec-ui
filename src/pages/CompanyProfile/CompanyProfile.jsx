import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './CompanyProfile.module.scss';

const cx = classNames.bind(styles);

function CompanyProfile({ children }) {
  return <h1>CompanyProfile</h1>;
}

CompanyProfile.propTypes = {
  children: PropTypes.node,
};

export default CompanyProfile;
