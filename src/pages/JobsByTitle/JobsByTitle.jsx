import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './JobsByTitle.module.scss';

const cx = classNames.bind(styles);

function JobsByTitle({ children }) {
  return <h1>JobsByTitle</h1>;
}

JobsByTitle.propTypes = {
  children: PropTypes.node,
};

export default JobsByTitle;
