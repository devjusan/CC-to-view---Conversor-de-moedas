import React from 'react';
import styles from './Convertor.module.css';
import Current from './Current';

const Convertor = () => {
  return (
    <section className={styles.convertor}>
      <div>
        <div>
          <h1 className="title">
            CC to view <i className={styles.i}>Conversor de moedas</i>
          </h1>
        </div>
        <Current />
      </div>
    </section>
  );
};

export default Convertor;
