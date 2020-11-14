import React from 'react';
import { GET_CURRENTS } from '../../Api';
import Select from '../Form/Select';
import Error from '../Helper/Error';
import useFetch from '../../Hook/useFetch';
import styles from './Current.module.css';
import CurrentGraphs from './CurrentGraphs';

const Current = () => {
  const { error, data, request } = useFetch();
  const { url, options } = GET_CURRENTS();
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState('default');
  const selectOptions = [];

  React.useEffect(() => {
    async function getData() {
      await request(url, options);
    }
    getDate();
    getData();
  }, []);

  function getDate() {
    let now = new Date();

    // caso o mês atual - 1 seja igual a -1
    let monthJanuary = now.getMonth() - 1 === -1 ? 12 : null;
    let day = now.getDate();
    let year = now.getFullYear();
    let month = now.getMonth();

    if (!monthJanuary) {
      setStartDate(year + '-' + (month + 1) + '-' + day);
      setEndDate(year + '-' + month + '-' + day);
    } else {
      setStartDate(year + '-' + month + '-' + day);
      setEndDate(year - 1 + '-' + monthJanuary + '-' + day);
    }
  }

  function parseToArray() {
    const dataArray = Object.values(data.symbols);
    dataArray.map((cur) =>
      selectOptions.push({ value: cur.code, label: cur.description }),
    );
  }
  if (data) parseToArray();

  if (error) return <Error error={error} />;
  if (data)
    return (
      <div className={styles.section}>
        <p className={styles.choseCur}>Escolha a moeda a ser consultada!</p>
        <Select
          value={selectedValue}
          onChange={({ target }) => setSelectedValue(target.value)}
          placeholder="Selecionar moeda..."
          options={selectOptions}
        />

        {selectedValue !== 'default' && (
          <p className={styles.currentValue}>
            A moeda selecionada foi o {selectedValue}
          </p>
        )}
        {selectedValue !== 'default' && (
          <CurrentGraphs
            endDate={endDate}
            startDate={startDate}
            selectedValue={selectedValue}
          />
        )}
      </div>
    );
  else return null;
};

export default Current;
