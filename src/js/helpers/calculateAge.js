import { differenceInYears } from 'date-fns';

export const calculateAge = birthDay => {
  return differenceInYears(new Date(), new Date(birthDay));
};
