import classNames from 'classnames/bind';
import styles from '../../TourCard/TourCard.module.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const cx = classNames.bind(styles);

const SkeletonCard = ({ cards }) => {
    return Array(cards)
        .fill(0)
        .map((_, i) => (
            <div className={cx('card')} key={i}>
                <div className={cx('title')}>
                    <span>
                        <Skeleton
                            width={140}
                            height={25}
                            borderRadius={5}
                            baseColor="hsl(0, 0%, 90%)"
                            highlightColor="var(--bg-hover)"
                        />
                    </span>
                    <span>
                        <Skeleton
                            width={286}
                            height={25}
                            borderRadius={5}
                            baseColor="hsl(0, 0%, 90%)"
                            highlightColor="var(--bg-hover)"
                        />
                    </span>
                </div>
                <div className={cx('imgContainer')}>
                    <Skeleton
                        width={286}
                        height={160}
                        borderRadius={5}
                        baseColor="hsl(0, 0%, 90%)"
                        highlightColor="var(--bg-hover)"
                    />
                </div>
                <div className={cx('text')}>
                    <span>
                        <Skeleton
                            width={45}
                            height={18}
                            borderRadius={5}
                            baseColor="hsl(0, 0%, 90%)"
                            highlightColor="var(--bg-hover)"
                        />
                    </span>
                    <span>
                        <Skeleton
                            width={45}
                            height={18}
                            borderRadius={5}
                            baseColor="hsl(0, 0%, 90%)"
                            highlightColor="var(--bg-hover)"
                        />
                    </span>
                    <span>
                        <Skeleton
                            width={45}
                            height={18}
                            borderRadius={5}
                            baseColor="hsl(0, 0%, 90%)"
                            highlightColor="var(--bg-hover)"
                        />
                    </span>
                </div>
                <hr />
                <div className={cx('price')}>
                    <Skeleton
                        width={286}
                        height={35}
                        borderRadius={5}
                        baseColor="hsl(0, 0%, 90%)"
                        highlightColor="var(--bg-hover)"
                    />
                </div>
            </div>
        ));
};

export default SkeletonCard;
