export const SET_START_DATE = 'SET_START_DATE';

export function setStartDate(date) {
  return {
    type: SET_START_DATE,
    payload: date,
  };
}
