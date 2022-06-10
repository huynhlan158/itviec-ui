import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Component.module.scss';

const cx = classNames.bind(styles);

function Component({ children }) {
  return <h1>Component</h1>;
}

Component.propTypes = {
  children: PropTypes.node,
};

export default Component;
