import { create } from "zustand";
import { UsersState } from "../types/models";

export const useUsersStore = create<UsersState>(() => ({
  users: [
    {
      id: 1,
      name: "Jav",
      role: "Engineering",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
      isOnline: true,
    },
    {
      id: 2,
      name: "Aubrey",
      role: "Product",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
      isOnline: false,
    },
    {
      id: 3,
      name: "Janet",
      role: "Engineering",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=3",
      isOnline: false,
    },
    {
      id: 4,
      name: "Janet",
      role: "Product",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=4",
      isOnline: false,
    },
    {
      id: 101,
      name: "User",
      role: "Engineering",
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=5",
      isOnline: true,
    },
  ],
}));
