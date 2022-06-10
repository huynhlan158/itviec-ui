import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Employer.module.scss';

const cx = classNames.bind(styles);

function Employer({ children }) {
  return <h1>Employer</h1>;
}

Employer.propTypes = {
  children: PropTypes.node,
};

export default Employer;
