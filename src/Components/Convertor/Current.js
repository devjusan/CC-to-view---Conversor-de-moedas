import React from 'react';
import Select from '../Form/Select';
import Error from '../Helper/Error';
import styles from './Current.module.css';
import CurrentGraphs from './CurrentGraphs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentData } from '../../store/currentData';

const Current = () => {
  const { data, error } = useSelector((state) => state.currentData);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState('default');
  const selectOptions = [];

  const dispatch = useDispatch();
  React.useEffect(() => {
    function getData() {
      dispatch(fetchCurrentData());
    }
    getDate();
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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
