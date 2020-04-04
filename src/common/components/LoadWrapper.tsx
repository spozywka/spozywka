import React, { FC } from 'react';
import { Spin, Icon } from 'antd';

interface Props {
  pending: boolean;
  failure: boolean;
}

export const LoadWrapper: FC<Props> = (props) => {
  const { pending, failure, children } = props;

  if (pending) {
    return <Spin />;
  }

  if (failure) {
    return (
      <span>
        <Icon type="exclamation-circle" /> Load failed
      </span>
    );
  }

  return <>{children}</>;
};
