import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './TextOnly.module.scss';

const cx = classNames.bind(styles);

function TextOnly({ children }) {
  return <h1>TextOnly</h1>;
}

TextOnly.propTypes = {
  children: PropTypes.node,
};

export default TextOnly;
