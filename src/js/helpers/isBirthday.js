import { getDate, getMonth } from 'date-fns';

export const isBirthday = date => {
  const today = new Date();
  const birthDay = new Date(date);

  return (
    getDate(today) === getDate(birthDay) &&
    getMonth(today) === getMonth(birthDay)
  );
};
