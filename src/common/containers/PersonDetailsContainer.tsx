import React from 'react';
import { userService } from '../../data/user.service';
import { LoadWrapper } from '../components/LoadWrapper';
import { PersonDetails } from '../components/PersonDetails';
import { useRequest } from '../hooks/useRequest';

interface Props {
  userId?: number;
  city?: string;
}

export function PersonDetailsContainer({ userId, city }: Props) {
  const { data: user, failure, pending } = useRequest(() => userService.getById(userId), null);

  return (
    <LoadWrapper failure={failure} pending={pending}>
      {!!user && <PersonDetails city={city} name={user?.username} />}
    </LoadWrapper>
  );
}
