import styles from '../styles/Home.module.css'

export default function Card() {
  return(
    <div className={styles.card}>
      <div className={styles.item_desc}>
        <img src='assets/images/placeholder.jpg' height={140} style={{borderRadius: "5px"}}/>
        <div className={styles.item_desc_text}>
          <h2>Snack ABC</h2>
          <p>Added at: <br/> 01/01/1970</p><br/>
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <h2>Rp10.000,00</h2>
      <button>Beli</button>
    </div>
  );
}