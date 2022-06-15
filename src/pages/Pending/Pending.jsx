import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Pending.module.scss';

const cx = classNames.bind(styles);

function Pending({ children }) {
  return <h1>Pending</h1>;
}

Pending.propTypes = {
  children: PropTypes.node,
};

export default Pending;
