import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, {useState} from 'react';

export default function Header() {
  const [visible, setVisible] = useState(false);
  return (
    <header className={styles.navbar}>
      <div className={styles.nav_logo}>
        kantin <br></br> Kejujuran
      </div>

      <div className={styles.nav_buttons}>
        <Link href="/">Katalog</Link>
        <div className={styles.spacer}></div>
        <Link href="/transaction">Balance &amp; Riwayat Transaksi</Link>
      </div>

      <div className={styles.nav_user}>
        <div className={styles.nav_account} onClick={() => setVisible(!visible)}>
          <div className={styles.accountImage}>
            <img src="/assets/images/download.png" width={30} height={30} />
          </div>
          <div className={styles.accountInfo}>
            <p>12345</p>
            <p>Muhammad Alif Darmamulia</p>
          </div>
          <img src="/assets/icons/VectorDropdown.png" width={15} height={8} />
        </div>
        <div className={styles.nav_dropdown} style={{display: visible? 'block': 'none'}}>
          <p>Sign Out</p>
        </div>
      </div>
    </header>
  )
}