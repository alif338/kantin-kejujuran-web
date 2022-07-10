import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Card from '../components/Card';
import Header from '../components/Header';
import styles from '../styles/Home.module.css'
import { faker } from '@faker-js/faker';

export default function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('/api/items').then(res => {
      console.log(res.data.data);
      setItems(res.data.data);
    });
    console.log(`URL mongodb: ${process.env.MONGODB_URI}`);
  }, []);

  const handleClick = () => {
    axios.post('/api/items/add', {
      name: `${faker.lorem.slug()}`,
      price: '$10000',
      description: faker.lorem.sentence(4),
      imageUrl: faker.image.abstract(),
      created_at:new Date().toLocaleDateString("en-US"),
    }, {headers: {'Content-Type': 'application/json'}}).then(res => {
      console.log(res.data);
      axios.get('/api/items').then(res => {
        console.log(res.data.data);
        setItems(res.data.data);
      });
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Katalog | Kantin Kejujuran</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <div className={styles.header_title}>
          <h1>Item Tersedia</h1>
          <button className={styles.primary_button} onClick={handleClick}>+ Tambah item</button>
        </div>
        <div className={styles.grid}>
          {
            items.length == 0 ? <h2>Loading...</h2> :
            items.map(item => (<Card key={item._id} data={item}/>))
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
