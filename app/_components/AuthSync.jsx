"use client";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export default function AuthSync() {
  const { user } = useUser();

  useEffect(() => {
    if (!user) return; // Ensure user is available before making a request

    const payload = {
      id: user.id,
      email: user.primaryEmailAddress?.emailAddress, // Ensure correct email format
      username: user.username || `${user.firstName || "user"}${user.lastName || ""}`.toLowerCase(), // Generate if missing
     
    };

    fetch("/api/storeuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.message || "Failed to store user");
          });
        }
      })
      .catch((err) => console.error("AuthSync Error:", err));

  }, [user]);

  return null; // No UI, just syncing data
}
