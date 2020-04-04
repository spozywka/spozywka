import { format, isValid } from 'date-fns';
import React, { memo } from 'react';

interface Props {
  date?: Date | string;
  format?: string;
}

export const DateFormat = memo(
  (props: Props) => {
    if (!props.date) {
      return null;
    }

    const date = typeof props.date === 'string' ? new Date(props.date) : props.date;

    if (!isValid(date)) {
      return null;
    }

    return <span>{format(date, props.format || 'dd.MM')}</span>;
  },
  (prev: Props, next: Props) => prev.date === next.date
);
