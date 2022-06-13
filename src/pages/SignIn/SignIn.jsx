import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SignIn.module.scss';

const cx = classNames.bind(styles);

function SignIn({ children }) {
  return <h1>SignIn</h1>;
}

SignIn.propTypes = {
  children: PropTypes.node,
};

export default SignIn;
