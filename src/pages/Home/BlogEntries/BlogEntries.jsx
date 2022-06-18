import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import styles from './BlogEntries.module.scss';
import config from '~/config';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

// will replace by calling api
const newestBlogs = [
  {
    title: 'Thiết kế game là gì? Công việc của Game Designer là gì?',
    hightlight:
      'Thiết kế Game là làm gì? Game Designer là ai? Thiết kế game không phải là công việc liên quan đến thiết kế đồ họa như mọi người vẫn nhầm, mà là tạo ra những câu chuyện, nhân vật, mục tiêu… trong trò chơi.',
    picture:
      'https://itviec.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeE5tS0E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--78bc60cf531ced001a6b98760371724c87723776/thiet-ke-game-la-gi-game-designer-thumbnail-300x158.jpg',
    link: '#',
  },
  {
    title: 'Thiết kế game là gì? Công việc của Game Designer là gì?',
    hightlight:
      'Thiết kế Game là làm gì? Game Designer là ai? Thiết kế game không phải là công việc liên quan đến thiết kế đồ họa như mọi người vẫn nhầm, mà là tạo ra những câu chuyện, nhân vật, mục tiêu… trong trò chơi.',
    picture:
      'https://itviec.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeE5tS0E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--78bc60cf531ced001a6b98760371724c87723776/thiet-ke-game-la-gi-game-designer-thumbnail-300x158.jpg',
    link: '#',
  },
];

function BlogEntries({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h1 className={cx('title')}>Newest blog entries</h1>

        <Link className={cx('view-all')} to={config.routes.blog}>
          <>
            <span>View all</span>
            <span>
              <FontAwesomeIcon icon={faCaretRight} />
            </span>
          </>
        </Link>
      </div>

      <div className={cx('content')}>
        {newestBlogs.map((blog, index) => (
          <div key={index} className={cx('blog')}>
            <a href={blog.link} className={cx('blog-picture')}>
              <Image src={blog.picture} />
            </a>

            <div className={cx('blog-info')}>
              <div>
                <a href={blog.link} className={cx('blog-title')}>
                  <h4>{blog.title}</h4>
                </a>
                <span className={cx('blog-subtitle')}>{blog.hightlight}</span>
              </div>

              <a href={blog.link} className={cx('read-more')}>
                <span>Read more</span>
                <span>
                  <FontAwesomeIcon icon={faCaretRight} />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

BlogEntries.propTypes = {
  children: PropTypes.node,
};

export default BlogEntries;
