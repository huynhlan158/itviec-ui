import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './SignUp.module.scss';
import config from '~/config';
import images from '~/assess/images';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Form from '~/components/Form';
import { useGlobalStore } from '~/store/useGlobalStore';
import * as actions from '~/state/actions';

const cx = classNames.bind(styles);

function SignUp() {
  const [state, dispatch] = useGlobalStore();

  const inputItems = [
    {
      name: 'fullname',
      label: 'Fullname',
      type: 'text',
      id: 'fullname',
      placeholder: 'Name',
      require: true,
    },
    {
      name: 'email',
      label: 'Email',
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

  const handleSignUp = (data) => {};

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('user-authentication')}>
          <h3 className={cx('header')}>
            <span>Welcome to</span>
            <Image src={images.logo_dark} alt="logo_img" />
          </h3>

          <div className={cx('content')}>
            <div className={cx('signup-form')}>
              <h2 className={cx('form-title')}>Sign Up</h2>
              <Button
                className={cx('form-btn')}
                primary
                xl
                href="https://accounts.google.com/o/oauth2/auth/identifier?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fitviec.com%3Fid%3Dauth195748&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=854148892592-ojr6qf0k1bqbm0fm5ohgt7ep8bbiv1sn.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fitviec.com&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow"
                target="_blank"
              >
                <span className={cx('google-logo')}>
                  <Image src={images.google} alt="google-icon" />
                </span>
                <span>Sign up with Google</span>
              </Button>

              <div className={cx('separator')}>
                <span className={cx('separator-line')}></span>
                <span className={cx('separator-text')}>OR</span>
                <span className={cx('separator-line')}></span>
              </div>

              <Form items={inputItems} handleSubmit={(data) => handleSignUp(data)} submitBtn="Sign up with Email" />

              <div className={cx('sign-in')}>
                <span>Already had an account? </span>
                <Link to={config.routes.signIn}>Sign in now!</Link>
              </div>

              <div className={cx('form-note')}>
                <span className={cx('note-title')}>Note:</span>
                <span className={cx('note-text')}>
                  Password must contain at least 8 characters. Combination of symbols, numbers, uppercase letters,
                  lowercase letters.
                </span>
              </div>
            </div>

            <div className={cx('sign-up_image')}>
              <Image src={images.signup} alt="signup_img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
