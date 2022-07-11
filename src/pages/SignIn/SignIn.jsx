import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './SignIn.module.scss';
import config from '~/config';
import images from '~/assess/images';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Form from '~/components/Form';
import { useReduxSelector } from '~/redux/selectors';
import { usersSlice } from '~/redux/slices';

const cx = classNames.bind(styles);

const inputItems = [
  {
    name: 'email',
    label: 'Email Address',
    type: 'text',
    id: 'email',
    placeholder: 'Email',
    require: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    id: 'password',
    placeholder: 'Password',
    require: true,
  },
];
function SignIn() {
  const dispatch = useDispatch();
  const { userList } = useReduxSelector();
  const navigate = useNavigate();

  const handleSignIn = (data) => {
    if (userList.some((user) => user.email === data.email && user.password === data.password)) {
      dispatch(usersSlice.actions.signIn(userList.find((user) => user.email === data.email).id));
      navigate(config.routes.home);
    } else {
      userList.some((user) => user.email === data.email && user.password !== data.password)
        ? alert('Wrong password')
        : alert('Email account does not exist');
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('user-authentication')}>
          <h3 className={cx('header')}>
            <span>Welcome to</span>
            <Image src={images.logo_dark} alt="logo_img" />
          </h3>

          <div className={cx('content')}>
            <div className={cx('signin-form')}>
              <Button
                className={cx('form-btn')}
                primary
                xl
                href="https://accounts.google.com/o/oauth2/auth/identifier?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fitviec.com%3Fid%3Dauth798522&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=854148892592-ojr6qf0k1bqbm0fm5ohgt7ep8bbiv1sn.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fitviec.com&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow"
                target="_blank"
              >
                <span className={cx('google-logo')}>
                  <Image src={images.google} alt="google-icon" />
                </span>
                <span>Sign in with Google</span>
              </Button>

              <div className={cx('separator')}>
                <span className={cx('separator-line')}></span>
                <span className={cx('separator-text')}>OR</span>
                <span className={cx('separator-line')}></span>
              </div>

              <Form items={inputItems} handleSubmit={(data) => handleSignIn(data)} submitBtn="Sign in with Email" />

              <div className={cx('sign-up')}>
                <span>Do not have an account? </span>
                <Link to={config.routes.signUp}>Sign up now!</Link>
              </div>
            </div>

            <div className={cx('sign-in_message')}>
              <h2>Sign in to get instant access to thousands of reviews and salary information</h2>
              <ul>
                <li>
                  <FontAwesomeIcon className={cx('list-icon')} icon={faCheck} />{' '}
                  <span>View salary to help you negotiate your offer or pay rise</span>
                </li>
                <li>
                  <FontAwesomeIcon className={cx('list-icon')} icon={faCheck} />{' '}
                  <span>Find out about benefits, interview, company culture via reviews</span>
                </li>
                <li>
                  <FontAwesomeIcon className={cx('list-icon')} icon={faCheck} />{' '}
                  <span>Easy apply with only 1 click</span>
                </li>
                <li>
                  <FontAwesomeIcon className={cx('list-icon')} icon={faCheck} />{' '}
                  <span>Manage your own profile & privacy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
