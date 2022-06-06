import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

export const formatDate = date => {
  return format(new Date(date), 'PPPP', {
    locale: uk,
  });
};
