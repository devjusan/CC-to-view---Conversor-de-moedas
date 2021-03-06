import React from 'react';
import Error from '../Helper/Error';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentHistory } from '../../store/currentGraph';

const CurrentGraphs = ({ startDate, endDate, selectedValue }) => {
  const { data, error } = useSelector((state) => state.currentGraph);
  console.log(selectedValue);
  let graph = [];
  let dataVictory = [];
  let arrayData = [];
  let mouthsGraph = [];
  let numberGraph = [];

  const dispatch = useDispatch();
  // receber dados da API e datas atuais do user
  React.useEffect(() => {
    dispatch(fetchCurrentHistory(startDate, endDate, selectedValue));
  }, [dispatch, startDate, endDate, selectedValue]);

  if (data) {
    // conversão de objeto para array
    arrayData = Object.entries(data.rates);
    //inserção dos dados para a variável graph para modelar o gráfico
    arrayData.map((cur, index) =>
      dataVictory.push({
        x: cur[0].substr(5),
        y: parseFloat(Object.values(arrayData[index][1])[0]),
      }),
    );
    dataGraph();
  }

  // convertendo dados para o data do gráfico.
  function dataGraph() {
    // get apenas dos meses
    mouthsGraph.push(dataVictory.map((cur) => cur['x']));
    // get apenas da moeda
    numberGraph.push(dataVictory.map((cur) => Number(cur['y'])));
    graph = {
      labels: mouthsGraph[0],
      datasets: [
        {
          label: selectedValue,
          fill: false,
          lineTension: 0.2,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 0,
          data: numberGraph[0],
        },
      ],
    };
  }

  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        {' '}
        <Line
          data={graph}
          options={{
            legend: {
              display: true,
              fullWidth: true,
            },
          }}
        />
      </div>
    );
  else return null;
};

export default CurrentGraphs;
