type User = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  isOnline: boolean;
};

type UsersState = {
  users: User[];
};

export type { User, UsersState };
