// Custom DatePicker that uses Day.js instead of Moment.js
// import DatePicker from '../components/DatePicker'

import styled from 'styled-components'
import Image from 'next/image'

import Header from '../components/Header'
import styles from '../styles/home.module.css'
import HeroPic from '../public/hero.jpg'

const Hero = styled.section`

`

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles['hero-bg']}>
        <Image
          src={HeroPic}
          alt="Cabinet dentaire du docteur Sakir à Tsaralalàna, Antananarivo"
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
      </div>
    </>
  )
}
