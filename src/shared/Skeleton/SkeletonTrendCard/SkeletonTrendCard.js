import classNames from 'classnames/bind';
import styles from '../../../components/SearchHome/SearchHome.module.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const cx = classNames.bind(styles);

const SkeletonTrendCard = ({ cards }) => {
    return Array(cards)
        .fill(0)
        .map((_, i) => (
            <div className={cx('card')} key={i}>
                <Skeleton
                    width={225}
                    height={225}
                    borderRadius={10}
                    baseColor="hsl(0, 0%, 95%)"
                    highlightColor="var(--bg-hover)"
                />
                <div className={cx('box')}>
                    <span className={cx('star')}>
                        <Skeleton
                            width={55}
                            height={25}
                            borderRadius={5}
                            baseColor="hsl(0, 0%, 90%)"
                            highlightColor="var(--bg-hover)"
                        />
                    </span>
                    <div className={cx('group')}>
                        <div className={cx('text')}>
                            <strong>
                                <Skeleton
                                    width={85}
                                    height={30}
                                    borderRadius={5}
                                    baseColor="hsl(0, 0%, 90%)"
                                    highlightColor="var(--bg-hover)"
                                />
                            </strong>
                            <span>
                                <Skeleton
                                    width={87}
                                    height={20}
                                    borderRadius={5}
                                    baseColor="hsl(0, 0%, 90%)"
                                    highlightColor="var(--bg-hover)"
                                />
                            </span>
                        </div>
                        <span className={cx('price')}>
                            <Skeleton
                                width={50}
                                height={30}
                                borderRadius={5}
                                baseColor="hsl(0, 0%, 90%)"
                                highlightColor="var(--bg-hover)"
                            />
                        </span>
                    </div>
                </div>
            </div>
        ));
};

export default SkeletonTrendCard;
