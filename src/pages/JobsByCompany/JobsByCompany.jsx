import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './JobsByCompany.module.scss';

const cx = classNames.bind(styles);

function JobsByCompany({ children }) {
  return <h1>JobsByCompany</h1>;
}

JobsByCompany.propTypes = {
  children: PropTypes.node,
};

export default JobsByCompany;
