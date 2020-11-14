export const URL_API = 'https://api.exchangerate.host/symbols';

export function GET_CURRENTS() {
  return {
    url: URL_API,
    options: {
      method: 'GET',
    },
  };
}

export function GET_API_DATA(startDate, endDate, exitCurrent) {
  return {
    url: `https://api.exchangerate.host/timeseries?start_date=${endDate}&end_date=${startDate}&base=${exitCurrent}&symbols=BRL&amount=1`,
    options: {
      method: 'GET',
    },
  };
}
