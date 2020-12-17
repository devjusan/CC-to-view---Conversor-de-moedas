import { GET_CURRENTS } from '../Api';

const FETCH_CURRENT_STARTED = 'current/fetchStarted';
const FETCH_CURRENT_SUCCESS = 'current/fetchSuccess';
const FETCH_CURRENT_ERROR = 'current/fetchError';

const fetchCurrentStarted = () => ({
  type: FETCH_CURRENT_STARTED,
});

const fetchCurrentSuccess = (data) => ({
  type: FETCH_CURRENT_SUCCESS,
  payload: data,
});

const fetchCurrentError = (error) => ({
  type: FETCH_CURRENT_ERROR,
  payload: error,
});

const initialState = {
  error: null,
  data: null,
};

export default function current(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_STARTED:
      return {
        ...state,
        data: null,
        error: null,
      };
    case FETCH_CURRENT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case FETCH_CURRENT_ERROR:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const fetchCurrentData = () => async (dispatch) => {
  try {
    dispatch(fetchCurrentStarted());
    const { url, options } = GET_CURRENTS();
    const response = await fetch(url, options);
    const data = await response.json();
    dispatch(fetchCurrentSuccess(data));
  } catch (e) {
    dispatch(fetchCurrentError(e.message));
  }
};
