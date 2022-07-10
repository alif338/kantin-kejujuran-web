import styles from '../styles/Home.module.css'

export default function Card(props) {
  const {
    name,
    imageUrl,
    price,
    description,
    created_at,
  } = props.data;
  return(
    <div className={styles.card}>
      <div className={styles.item_desc}>
        <img src={imageUrl} height={140} width={140} style={{borderRadius: "5px"}} alt="item-image"/>
        <div className={styles.item_desc_text}>
          <h2>{name}</h2>
          <p>Added at: <br/> {created_at}</p><br/>
          <p>{description}</p>
        </div>
      </div>
      <h2>{price}</h2>
      <button>Beli</button>
    </div>
  );
}