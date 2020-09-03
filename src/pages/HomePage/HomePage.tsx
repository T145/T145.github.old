import React from 'react';
import styles from './HomePage.module.scss';

export default function HomePage() {
  return (
    <div className={styles.HomePage} data-testid="HomePage">
      <h1>HomePage component</h1>
    </div>
  );
}
