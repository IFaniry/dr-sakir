// import MutliCarousel from "react-multi-carousel"
// import { Carousel } from 'antd'
import Image from 'next/image'
import classNames from 'classnames/bind'

import UAParser from 'ua-parser-js'

// import BannerAnim, { Element } from 'rc-banner-anim';
// import TweenOne from 'rc-tween-one';
// import 'rc-banner-anim/assets/index.css';
// const BgElement = Element.BgElement;
// https://motion.ant.design/components/banner-anim#components-banner-anim-demo-autoplay
// https://github.com/react-component/banner-anim

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import styles from '../styles/specialities.module.css'
import WhiteningPic from '../public/blanchissement_dentaire.png'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

let cx = classNames.bind(styles);

const Specialities = function ({ deviceType }) {
  return (
    <section className={cx('container', styles['specialities-container'])}>
      <h2>Ce que nous faisons</h2>
      <Carousel
        ssr
        deviceType={deviceType}
        partialVisible
        itemClass={styles['speciality']}
        responsive={responsive}
      >
        <div>
          <Image
            src={WhiteningPic}
            width={500}
            height={500}
            objectFit="cover"
          />
          <h3>Spécialité 1</h3>
        </div>
        <div>
          <Image
            src={WhiteningPic}
            width={500}
            height={500}
            objectFit="cover"
          />
          <h3>Spécialité 2</h3>
        </div>
        <div>
          <Image
            src={WhiteningPic}
            width={500}
            height={500}
            objectFit="cover"
          />
          <h3>Spécialité 3</h3>
        </div>
        <div>
          <Image
            src={WhiteningPic}
            width={500}
            height={500}
            objectFit="cover"
          />
          <h3>Spécialité 4</h3>
        </div>
      </Carousel>
    </section>
  )
};

export async function getServerSideProps({ req }) {
  let userAgent;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || 'desktop';

  return { props: { deviceType } }
}

export default Specialities;
