import classNames from 'classnames/bind';
import styles1 from '../../../components/Tour/TourCarousel/TourCarousel.module.scss';
import styles2 from '../../../components/Tour/TourInfo/TourInfo.module.scss';
import styles3 from '../../../components/Tour/TourComments/TourComments.module.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const cxCarousel = classNames.bind(styles1);
const cxInfo = classNames.bind(styles2);
const cxComments = classNames.bind(styles3);

const SkeletonDetails = () => {
    return (
        <>
            <section className={cxCarousel('wrapperCarousel')}>
                <Skeleton
                    width={'100%'}
                    height={'100vh'}
                    baseColor="hsl(0, 0%, 100%)"
                    highlightColor="var(--bg-hover)"
                />
                <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded p-1 cursor-pointer">
                    <Skeleton
                        width={24}
                        height={48}
                        borderRadius={5}
                        baseColor="hsl(0, 0%, 90%)"
                        highlightColor="var(--bg-hover)"
                    />
                </div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded p-1 cursor-pointer">
                    <Skeleton
                        width={24}
                        height={48}
                        borderRadius={5}
                        baseColor="hsl(0, 0%, 90%)"
                        highlightColor="var(--bg-hover)"
                    />
                </div>
                <div className={cxCarousel('title')}>
                    <h2>
                        <Skeleton
                            width={600}
                            height={60}
                            borderRadius={5}
                            baseColor="hsl(0, 0%, 90%)"
                            highlightColor="var(--bg-hover)"
                        />
                    </h2>
                    <span>
                        <Skeleton
                            width={200}
                            height={25}
                            borderRadius={5}
                            baseColor="hsl(0, 0%, 90%)"
                            highlightColor="var(--bg-hover)"
                        />
                    </span>
                </div>
                <div className={cxCarousel('interaction')}>
                    <span className={cxCarousel('likeHeader')}>
                        <Skeleton
                            width={58}
                            height={35}
                            borderRadius={5}
                            baseColor="hsl(0, 0%, 90%)"
                            highlightColor="var(--bg-hover)"
                        />
                    </span>
                    <span className={cxCarousel('starHeader')}>
                        <Skeleton
                            width={58}
                            height={35}
                            borderRadius={5}
                            baseColor="hsl(0, 0%, 90%)"
                            highlightColor="var(--bg-hover)"
                        />
                    </span>
                </div>
            </section>
            <section className={cxInfo('wrapperInfo')}>
                <div className={cxInfo('sideLeft')}>
                    <div className={cxInfo('info')}>
                        <div className={cxInfo('highlight')}>
                            <h3>
                                <Skeleton
                                    width={100}
                                    height={30}
                                    borderRadius={5}
                                    baseColor="hsl(0, 0%, 90%)"
                                    highlightColor="var(--bg-hover)"
                                />
                            </h3>
                            <ul>
                                <Skeleton
                                    width={1020}
                                    height={24}
                                    borderRadius={5}
                                    baseColor="hsl(0, 0%, 90%)"
                                    highlightColor="var(--bg-hover)"
                                    count={4}
                                />
                            </ul>
                        </div>
                        <div className={cxInfo('timeline')}>
                            <h3>
                                <Skeleton
                                    width={100}
                                    height={30}
                                    borderRadius={5}
                                    baseColor="hsl(0, 0%, 90%)"
                                    highlightColor="var(--bg-hover)"
                                />
                            </h3>
                            <Skeleton
                                width={75}
                                height={35}
                                borderRadius={5}
                                baseColor="hsl(0, 0%, 90%)"
                                highlightColor="var(--bg-hover)"
                            />
                            <ul>
                                <Skeleton
                                    width={1020}
                                    height={40}
                                    borderRadius={5}
                                    baseColor="hsl(0, 0%, 90%)"
                                    highlightColor="var(--bg-hover)"
                                    count={5}
                                />
                            </ul>
                        </div>
                        <div className={cxInfo('experience')}>
                            <h3>
                                <Skeleton
                                    width={100}
                                    height={30}
                                    borderRadius={5}
                                    baseColor="hsl(0, 0%, 90%)"
                                    highlightColor="var(--bg-hover)"
                                />
                            </h3>
                            <p>
                                <Skeleton
                                    width={1020}
                                    height={120}
                                    borderRadius={5}
                                    baseColor="hsl(0, 0%, 90%)"
                                    highlightColor="var(--bg-hover)"
                                />
                            </p>
                        </div>
                    </div>
                    <div className={cxInfo('location')}>
                        <span className={cxInfo('spanLocation')}>
                            <Skeleton
                                width={100}
                                height={25}
                                borderRadius={5}
                                baseColor="hsl(0, 0%, 90%)"
                                highlightColor="var(--bg-hover)"
                            />
                        </span>
                        <Skeleton
                            width={1020}
                            height={180}
                            borderRadius={5}
                            baseColor="hsl(0, 0%, 90%)"
                            highlightColor="var(--bg-hover)"
                        />
                        <div className={cxInfo('locationFooter')}>
                            <span className={cxInfo('spanLocation')}>
                                <Skeleton
                                    width={280}
                                    height={35}
                                    borderRadius={5}
                                    baseColor="hsl(0, 0%, 90%)"
                                    highlightColor="var(--bg-hover)"
                                />
                            </span>
                            <Skeleton
                                width={170}
                                height={35}
                                borderRadius={5}
                                baseColor="hsl(0, 0%, 90%)"
                                highlightColor="var(--bg-hover)"
                            />
                        </div>
                    </div>
                    <div className={cxInfo('additional')}>
                        <h3>
                            <Skeleton
                                width={50}
                                height={30}
                                borderRadius={5}
                                baseColor="hsl(0, 0%, 90%)"
                                highlightColor="var(--bg-hover)"
                            />
                        </h3>
                        <ul>
                            <Skeleton
                                width={1020}
                                height={24}
                                borderRadius={5}
                                baseColor="hsl(0, 0%, 90%)"
                                highlightColor="var(--bg-hover)"
                                count={4}
                            />
                        </ul>
                    </div>
                </div>
                <div className={cxInfo('sideRight')}>
                    <div className={cxInfo('card')}>
                        <div className={cxInfo('featureBox')}>
                            <span>
                                <Skeleton
                                    width={342}
                                    height={24}
                                    borderRadius={5}
                                    baseColor="hsl(0, 0%, 90%)"
                                    highlightColor="var(--bg-hover)"
                                />
                            </span>
                            <span>
                                <Skeleton
                                    width={342}
                                    height={24}
                                    borderRadius={5}
                                    baseColor="hsl(0, 0%, 90%)"
                                    highlightColor="var(--bg-hover)"
                                />
                            </span>
                            <span>
                                <Skeleton
                                    width={342}
                                    height={24}
                                    borderRadius={5}
                                    baseColor="hsl(0, 0%, 90%)"
                                    highlightColor="var(--bg-hover)"
                                />
                            </span>
                        </div>
                        <div className={cxInfo('inputBox')}>
                            <label htmlFor="checkin">
                                <Skeleton
                                    width={78}
                                    height={22}
                                    borderRadius={5}
                                    baseColor="hsl(0, 0%, 90%)"
                                    highlightColor="var(--bg-hover)"
                                />
                            </label>
                            <div className={cxInfo('dateBox')}></div>
                        </div>
                        <div className={cxInfo('selectBox')}>
                            <h4>
                                <Skeleton
                                    width={78}
                                    height={22}
                                    borderRadius={5}
                                    baseColor="hsl(0, 0%, 90%)"
                                    highlightColor="var(--bg-hover)"
                                />
                            </h4>
                            <div className={cxInfo('visitorBox')}></div>
                        </div>
                        <div className={cxInfo('cardFooter')}>
                            <div className={cxInfo('payMethods')}>
                                <span>
                                    <Skeleton
                                        width={150}
                                        height={22}
                                        borderRadius={5}
                                        baseColor="hsl(0, 0%, 90%)"
                                        highlightColor="var(--bg-hover)"
                                    />
                                </span>
                                <Skeleton
                                    width={372}
                                    height={27}
                                    borderRadius={5}
                                    baseColor="hsl(0, 0%, 90%)"
                                    highlightColor="var(--bg-hover)"
                                    count={2}
                                />
                            </div>
                            <div className="flex justify-between">
                                <div className={cxInfo('priceBox')}>
                                    <Skeleton
                                        width={225}
                                        height={30}
                                        borderRadius={5}
                                        baseColor="hsl(0, 0%, 90%)"
                                        highlightColor="var(--bg-hover)"
                                        count={2}
                                    />
                                </div>
                                <Skeleton
                                    width={122}
                                    height={55}
                                    borderRadius={5}
                                    baseColor="hsl(0, 0%, 90%)"
                                    highlightColor="var(--bg-hover)"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cxComments('wrapperComment')}>
                <div className={cxComments('ratingBox')}>
                    <span className={cxComments('star')}>
                        <Skeleton width={86} height={35} baseColor="transparent" highlightColor="transparent" />
                    </span>
                    <span>
                        <Skeleton
                            width={435}
                            height={24}
                            borderRadius={5}
                            baseColor="hsl(0, 0%, 90%)"
                            highlightColor="var(--bg-hover)"
                        />
                    </span>
                </div>
                <div className={cxComments('commentBox')}>
                    <Skeleton
                        width={55}
                        height={55}
                        borderRadius={50}
                        baseColor="hsl(0, 0%, 90%)"
                        highlightColor="var(--bg-hover)"
                    />
                    <div className={cxComments('commentBody')}>
                        <div className={cxComments('commentNameBox')}>
                            <div className={cxComments('commentName')}>
                                <span>
                                    <Skeleton
                                        width={300}
                                        height={22}
                                        borderRadius={5}
                                        baseColor="hsl(0, 0%, 90%)"
                                        highlightColor="var(--bg-hover)"
                                    />
                                </span>
                                <span></span>
                            </div>
                            <Skeleton
                                width={120}
                                height={25}
                                borderRadius={5}
                                baseColor="hsl(0, 0%, 90%)"
                                highlightColor="var(--bg-hover)"
                            />
                        </div>
                        <p>
                            <Skeleton
                                width={1350}
                                height={70}
                                borderRadius={5}
                                baseColor="hsl(0, 0%, 90%)"
                                highlightColor="var(--bg-hover)"
                                count={1}
                            />
                        </p>
                        <div className={cxComments('commentReact')}>
                            <span className={cxComments('reactAction')}>
                                <Skeleton width={42} height={23} />
                            </span>
                            <span className={cxComments('reactAction')}>
                                <Skeleton width={42} height={23} />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SkeletonDetails;
