import { useState } from 'react'
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, CalendarOutlined } from '@ant-design/icons';
import Link from 'next/link'
// import { blue } from '@ant-design/colors'
import { Grid } from 'antd'

import styles from '../styles/header.module.css'

const { useBreakpoint } = Grid;

export default function Header() {
  const screens = useBreakpoint()

  const [ currentMenu, setCurrentMenu ] = useState('')

  return (
    <header className={styles.header}>
      <nav className={styles['header-container']}>
        <Link href="/">
          <a className={styles['navbar-brand']}>
            <img
              width="40"
              alt="Logo du Docteur Sakir - Cabinet dentaire Tsaralalàna, Antananarivo"
              src="/logo.svg"
            />
            <div>
              <h2>Dr. Sakir</h2>
              <h1>
                Cabinet dentaire Tsaralalàna
                <strong style={{ display: 'none' }}>Antananarivo</strong>
              </h1>
            </div>
          </a>
        </Link>

       

        <Menu
          style={{
            backgroundColor: 'transparent',
          }}
          onClick={(e) => { setCurrentMenu(e.key); }}
          selectedKeys={[currentMenu]}
          mode={!screens.sm ? 'vertical' : 'horizontal'}
        >
          <Menu.Item key="services" icon={<AppstoreOutlined />}>
            Services
          </Menu.Item>
          <Menu.Item key="contact" icon={<MailOutlined />}>
            Contact
          </Menu.Item>
          <Menu.Item key="appointment" icon={<CalendarOutlined />}>
            Prendre un rendez-vous
          </Menu.Item>
        </Menu>
      </nav>
    </header>
  )
}
