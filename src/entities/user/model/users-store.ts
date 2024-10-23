import { create } from "zustand";
import { UsersState } from "../types/models";

export const useUsersStore = create<UsersState>(() => ({
  users: [
    {
      id: 1,
      name: "Jav",
      role: "Engineering",
      avatar: "https://api.dicebear.com/9.x/avataaars-neutral/jpg?seed=1",
      isOnline: true,
    },
    {
      id: 2,
      name: "Aubrey",
      role: "Product",
      avatar: "https://api.dicebear.com/9.x/avataaars-neutral/jpg?seed=2",
      isOnline: false,
    },
    {
      id: 3,
      name: "Janet",
      role: "Engineering",
      avatar: "https://api.dicebear.com/9.x/avataaars-neutral/jpg?seed=50",
      isOnline: false,
    },
    {
      id: 4,
      name: "Janet",
      role: "Product",
      avatar: "https://api.dicebear.com/9.x/avataaars-neutral/jpg?seed=55",
      isOnline: false,
    },
    {
      id: 101,
      name: "User",
      role: "Engineering",
      avatar: "https://api.dicebear.com/9.x/avataaars-neutral/jpg?seed=104",
      isOnline: true,
    },
  ],
}));
