import classNames from 'classnames/bind'
import dynamic from 'next/dynamic'

import styles from '../styles/contact.module.css'

const MapWithoutSSR = dynamic(
  () => import('./Map'),
  {
    ssr: false
  }
);

let cx = classNames.bind(styles);

const Contact = function () {
  return (
    <section className={cx('container', styles['contact-container'])}>
      <MapWithoutSSR />
    </section>
  );
};

export default Contact;
