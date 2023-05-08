import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import { Rating } from 'react-simple-star-rating';
import classNames from 'classnames/bind';
import styles from './TourComments.module.scss';
import Image from '../../../shared/Image/Image';
import React, { startTransition, useCallback, useState } from 'react';
import Button from '../../../shared/Button/Button';

const cx = classNames.bind(styles);

const TourComments = React.memo(({ tour, comments }) => {
    const [numComments, setNumComments] = useState(3);

    const handleLoadMore = useCallback(() => {
        startTransition(() => {
            setNumComments(numComments + 5);
        });
    }, [numComments]);

    return (
        <section className={cx('wrapperComment')}>
            <div className={cx('ratingBox')}>
                <span className={cx('star')}>
                    <FontAwesomeIcon className={cx('faStar')} icon={faStar} />
                    {tour.rating_count_tour}
                </span>
                <span>{comments.length} customer's have a lot to say about their experiences:</span>
            </div>
            {comments.slice(0, numComments).map((comment) => (
                <div key={comment.id} className={cx('commentBox')}>
                    <Image src={comment.user.avatar} alt={comment.user.avatar} />
                    <div className={cx('commentBody')}>
                        <div className={cx('commentNameBox')}>
                            <div className={cx('commentName')}>
                                <span>
                                    {comment.user.last_name} {comment.user.first_name}
                                </span>
                                <span>
                                    {' - '}
                                    <Moment fromNow>{comment.created_date}</Moment>
                                </span>
                            </div>
                            <Rating className={cx('rating')} initialValue={comment.rating} readonly></Rating>
                        </div>
                        <p>{comment.content_cmt}</p>
                        <div className={cx('commentReact')}>
                            <span className={cx('reactAction')}>
                                <FontAwesomeIcon className={cx('faThumbsUp')} icon={faThumbsUp} />
                                {comment.amount_like_cmt}
                            </span>
                            <span className={cx('reactAction')}>
                                <FontAwesomeIcon className={cx('faThumbsDown')} icon={faThumbsDown} />
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            {numComments < comments.length && (
                <div className={cx('loadMore')}>
                    <Button third small onClick={handleLoadMore}>
                        See More
                    </Button>
                </div>
            )}
        </section>
    );
});

export default TourComments;
