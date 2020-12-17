import { GET_API_DATA } from '../Api';

const FETCH_HISTORY_CURRENT_STARTED = 'currentGraph/fetchStarted';
const FETCH_HISTORY_CURRENT_SUCCESS = 'currentGraph/fetchSuccess';
const FETCH_HISTORY_CURRENT_ERROR = 'currentGraph/fetchError';

const fetchCHistoryStarted = () => ({
  type: FETCH_HISTORY_CURRENT_STARTED,
});

const fetchCHistorySuccess = (data) => ({
  type: FETCH_HISTORY_CURRENT_SUCCESS,
  payload: data,
});

const fetchCHistoryError = (error) => ({
  type: FETCH_HISTORY_CURRENT_ERROR,
  payload: error,
});

const initialState = {
  data: null,
  error: null,
};

export default function currentHistory(state = initialState, action) {
  switch (action.type) {
    case FETCH_HISTORY_CURRENT_STARTED:
      return {
        data: null,
        error: null,
      };
    case FETCH_HISTORY_CURRENT_SUCCESS:
      return {
        data: action.payload,
        error: null,
      };
    case FETCH_HISTORY_CURRENT_ERROR:
      return {
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const fetchCurrentHistory = (
  startDate,
  endDate,
  selectedValue,
) => async (dispatch) => {
  try {
    dispatch(fetchCHistoryStarted());
    const { url, options } = GET_API_DATA({
      startDate,
      endDate,
      selectedValue,
    });
    const response = await fetch(url, options);
    const data = await response.json();
    dispatch(fetchCHistorySuccess(data));
  } catch (e) {
    dispatch(fetchCHistoryError(e.message));
  }
};
