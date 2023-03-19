import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
/*import Navbar from './navbar'*/
/*import Footer from './footer'*/

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
        <title>Vision Aid</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Vision Aid Partner Tracking System 
            <code className={styles.code}></code>
          </p>
          <div>
            <a
              href="https://sites.google.com/view/visionaidwebinterface/home?authuser=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              
          
                
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/vision-aid-logo-trns.png"
            alt="VisionAid Logo trns"
            width={200}
            height={200}
            priority
          />
          
            
        </div>
        

        <div className={styles.grid}>
          <a
            href="https://vision-aid-prototype-v1.vercel.app/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Admin <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              For Vision Aid Admins to login and enter data.
            </p>
          </a>
          
          <a href="https://vision-aid-prototype-v1.vercel.app/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Technician <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Data Entry (in development).
            </p>
          </a>
          
          <a
            href="https://vision-aid-prototype-v1.vercel.app/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Manager <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Manager Sign in for Vision Aid Beneficiaries.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
