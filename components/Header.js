import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <header className={styles.navbar}>
      <div className={styles.nav_logo}>
        kantin <br></br> Kejujuran
      </div>

      <div className={styles.nav_buttons}>
        <Link href="/">Katalog</Link>
        <div className={styles.spacer}></div>
        <Link href="/transaction">Balance & Riwayat transaksi</Link>
      </div>

      <div className={styles.nav_account}>
        <div className={styles.accountImage}>
          <img src="/assets/images/download.png" width={30} height={30} />
        </div>
        <div className={styles.accountInfo}>
          <p>12345</p>
          <p>Muhammad Alif Darmamulia</p>
        </div>
        <img src="/assets/icons/VectorDropdown.png" width={15} height={8} />
      </div>
    </header>
  )
}