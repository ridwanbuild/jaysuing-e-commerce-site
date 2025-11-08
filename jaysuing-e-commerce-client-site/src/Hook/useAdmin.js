import { useState, useEffect } from "react";

// ✅ Simple hook to check if a user is Admin
export default function useAdmin(user) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user && user.role === "Admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  return isAdmin;
}
