import { useState } from 'react'
import { MailOutlined, AppstoreOutlined, CalendarOutlined, BookOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { Menu, Grid, Button } from 'antd'

import styles from '../styles/header.module.css'

const { useBreakpoint } = Grid;

const Header = function () {
  const screens = useBreakpoint();

  const [ currentMenu, setCurrentMenu ] = useState('');

  return (
    <header className="container">
      <nav className={styles['header-container']}>
        <Link href="/">
          <a className={styles['navbar-brand']}>
            <img
              width="75"
              alt="Logo du Docteur Sakir - Cabinet dentaire Tsaralalàna, Antananarivo"
              src="/logo.svg"
            />
            <div>
              <h2>Dr. Moustafa Sakir Houssen</h2>
              <h1>
                Chirurgien dentiste <strong>Antananarivo</strong>
              </h1>
            </div>
          </a>
        </Link>

        <Menu
          style={{
            backgroundColor: 'transparent',
            fontSize: '16px'
          }}
          onClick={(e) => { setCurrentMenu(e.key); }}
          selectedKeys={[currentMenu]}
          mode={!screens.sm ? 'vertical' : 'horizontal'}
        >
          <Menu.Item key="services" icon={<AppstoreOutlined />} className={styles['header-menu-item']} >
            Spécialités
          </Menu.Item>
          <Menu.Item key="news" icon={<BookOutlined />} className={styles['header-menu-item']} >
            Nouvelles
          </Menu.Item>
          <Menu.Item key="contact" icon={<MailOutlined />} className={styles['header-menu-item']} >
            Contact
          </Menu.Item>
          <Button type="primary" icon={<CalendarOutlined />} size="large">
            Prendre un rendez-vous
          </Button>
        </Menu>
      </nav>
    </header>
  )
};

export default Header;
