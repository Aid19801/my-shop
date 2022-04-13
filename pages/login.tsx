import type { NextPage } from 'next'
import Head from 'next/head'
import { LoginForm } from '../components'
import styles from "../styles/login.module.css";

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Login
        </h1>
        <LoginForm />
      </main>
    </div>
  )
}

export default Login
