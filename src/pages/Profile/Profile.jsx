import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile({ children }) {
  return <h1>Profile</h1>;
}

Profile.propTypes = {
  children: PropTypes.node,
};

export default Profile;
