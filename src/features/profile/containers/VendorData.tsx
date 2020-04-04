import React from 'react';
import styled from 'styled-components';
import { LoadWrapper } from '../../../common/components/LoadWrapper';
import { useRequest } from '../../../common/hooks/useRequest';
import { userService } from '../../../data/user.service';
import { lightGrey } from '../../../styles';

const Name = styled.h3`
  font-size: 18px;
  color: ${lightGrey};
`;

interface Props {
  userId?: number;
}

export function VendorData({ userId }: Props) {
  const { data: user, failure, pending } = useRequest(() => userService.getById(userId), null);

  return (
    <LoadWrapper failure={failure} pending={pending}>
      {!!user && <Name>Bought from: {user.username}</Name>}
    </LoadWrapper>
  );
}
