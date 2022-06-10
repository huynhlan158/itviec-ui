import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Jobs.module.scss';

const cx = classNames.bind(styles);

function Jobs({ children }) {
  return <h1>Jobs</h1>;
}

Jobs.propTypes = {
  children: PropTypes.node,
};

export default Jobs;
