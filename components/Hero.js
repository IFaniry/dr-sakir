import { Button } from 'antd'
import classNames from 'classnames/bind'
import Image from 'next/image'
import { SendOutlined } from '@ant-design/icons';

import styles from '../styles/hero.module.css'
import HeroPic from '../public/hero.jpg'

let cx = classNames.bind(styles);

const Hero = function () {
  return (
    <section className={cx('container', styles['hero-bg'])}>
      <Image
        src={HeroPic}
        alt="Cabinet dentaire du docteur Sakir à Tsaralalàna, Antananarivo"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      
      <div className={styles['hero-message-box']}>
        <div className={styles['hero-message-text']}>
          <h2>Cabinet dentaire Tsaralalàna</h2>
          <p>Message : Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <Button type="primary" icon={<SendOutlined />} size="large">
          Contacter un spécialiste
        </Button>
      </div>
    </section>
  )
};

export default Hero;
