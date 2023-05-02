import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import { Rating } from 'react-simple-star-rating';
import classNames from 'classnames/bind';
import styles from './TourComments.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const TourComments = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [numLike, setNumLike] = useState(43);

    const handleClickLike = () => {
        setIsLiked(!isLiked);
        if (isLiked) {
            setNumLike(numLike - 1);
        } else {
            setNumLike(numLike + 1);
        }
    };

    return (
        <section className={cx('wrapperComment')}>
            <div className={cx('ratingBox')}>
                <span className={cx('star')}>
                    <FontAwesomeIcon className={cx('faStar')} icon={faStar} />
                    4.8
                </span>
                <span>2 customer's have a lot to say about their experiences:</span>
            </div>
            <div className={cx('commentBox')}>
                <img src={require('../../assets/images/t-1.png')} alt="" />
                <div className={cx('commentBody')}>
                    <div className={cx('commentNameBox')}>
                        <div className={cx('commentName')}>
                            <span>nhuconcac0109</span>
                            <span>
                                {' - '}
                                <Moment fromNow>2023-04-21T12:59-0500</Moment>
                            </span>
                        </div>
                        <Rating className={cx('rating')} initialValue={5} readonly></Rating>
                    </div>
                    <p>
                        Consequat labore pariatur ipsum aliquip eu. Esse eu id aute nostrud reprehenderit sit ea.
                        Excepteur ut veniam tempor et do elit. Veniam sit aliquip do consectetur et laborum eu qui dolor
                        sit aliquip incididunt aliquip veniam. Quis laborum dolor et exercitation excepteur mollit elit
                        aliqua tempor incididunt laboris sunt.
                    </p>
                    <div className={cx('commentReact')}>
                        <span className={cx('reactAction', isLiked ? 'liked' : 'unlike')} onClick={handleClickLike}>
                            <FontAwesomeIcon className={cx('faThumbsUp')} icon={faThumbsUp} />
                            {numLike}
                        </span>
                        <span className={cx('reactAction', isLiked ? 'liked' : 'unlike')} onClick={handleClickLike}>
                            <FontAwesomeIcon className={cx('faThumbsDown')} icon={faThumbsDown} />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TourComments;
