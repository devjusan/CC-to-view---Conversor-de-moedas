import React from 'react';
import styles from './Convertor.module.css';
import Current from './Current';

const Convertor = () => {
  return (
    <section className={styles.convertor}>
      <div>
        <div>
          <h1 className="title">CC to view</h1>
          <span className={styles.i}>Conversor de moedas</span>
        </div>
        <div>
          <Current />
          <div className={styles.currentText}>
            <h1>O que são moedas?</h1>
            <p>
              {' '}
              <strong>Moeda</strong> é o meio pelo qual são efetuadas as
              transações monetárias. É todo ativo que constitua forma imediata
              de solver débitos, com aceitabilidade geral e disponibilidade
              imediata, e que confere ao seu titular um direito de saque sobre o
              produto social.
            </p>
            <p>
              É importante perceber que existem diferentes definições de
              “moeda”:
            </p>
            <ol>
              <li>dinheiro que constitui as notas (geralmente em papel);</li>
              <li>moeda (peça metálica);</li>
              <li>moeda bancária ou escritural, admitidas em circulação;</li>
              <li>
                moeda no sentido mais amplo, que significa o dinheiro em
                circulação, a moeda nacional.
              </li>
              <li>
                moeda como tudo aquilo que é geralmente aceito em troca por bens
                e serviços.
              </li>
            </ol>

            <p>
              {' '}
              Em geral, a moeda é emitida e controlada pelo governo do país, que
              é o único que pode fixar e controlar seu valor. O dinheiro está
              associado a transações de baixo valor; a moeda (no sentido aqui
              tratado), por sua vez, tem uma definição mais abrangente, já que
              engloba, mesmo no seu agregado mais líquido (M1), não só o
              dinheiro, mas também o valor depositado em contas correntes.
            </p>

            <p style={{ marginTop: '1rem' }}>Fonte: Wikipédia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Convertor;
