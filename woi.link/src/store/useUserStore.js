import { create } from "zustand";

const useUserStore = create((set) => ({
  profile: {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 25,
  },

  // Update user profile function
  updateProfile: (newProfile) => set({ profile: newProfile }),
}));

export default useUserStore;
