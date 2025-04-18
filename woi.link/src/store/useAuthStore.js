import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null, // Stores the logged-in user data
  isAuthenticated: false, // Tracks authentication state

  // Login function
  login: (userData) => set({ user: userData, isAuthenticated: true }),

  // Logout function
  logout: () => set({ user: null, isAuthenticated: false }),
}));


export default useAuthStore;


