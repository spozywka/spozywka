import React, { createContext, FC, useEffect, useState } from 'react';
import { userService } from '../../data/user.service';
import { User } from '../../types/api/user';

interface ContextProps {
  user?: User;
  pending: boolean;
  failure: boolean;
}

export const CurrentUserContext = createContext<ContextProps>({
  pending: false,
  failure: false,
});

interface Props {
  userId?: number;
}

export const CurrentUserProvider: FC<Props> = (props) => {
  const [pending, setPending] = useState(false);
  const [failure, setFailure] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    if (!props.userId) {
      return;
    }

    setPending(true);

    userService
      .getById(props.userId)
      .then((res) => {
        setPending(false);
        setFailure(false);
        setUser(res);
      })
      .catch(() => {
        setPending(false);
        setFailure(true);
      });
  }, [props.userId]);

  return (
    <CurrentUserContext.Provider
      value={{
        pending,
        failure,
        user,
      }}
    >
      {props.children}
    </CurrentUserContext.Provider>
  );
};
