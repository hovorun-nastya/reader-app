import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import LoginButton from '../components/LoginButton';
import UserPage from '../users/[users]';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <UserPage/>
        <LoginButton/>

      </main>
    </div>
  );
};

export default Home;
