import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/igorsantos97.png" alt="Igão" />
      <div>
        <strong>Igor Santos</strong>
        <p>
          <img src="../../public/icons/level.svg" alt="Level" />
          Level 1
          </p>
      </div>
    </div>
  );
}