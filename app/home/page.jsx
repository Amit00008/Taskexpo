"use client";

import { useUser, SignOutButton, UserButton } from "@clerk/nextjs";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Trash2, Plus } from "lucide-react";
import { toast } from "react-toastify";

export default function Home() {
  const { user } = useUser();
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch todos when user logs in
  const fetchTodos = async () => {
    if (user) {
      setLoading(true);
      try {
        const res = await fetch(`/api/todo?userEmail=${user.primaryEmailAddress?.emailAddress}`);
        const data = await res.json();
        setTodos(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    document.title = "TaskExpo | Home";
    fetchTodos();
  }, [user]);

 const addTodo = async () => {
  if (!newTodo.trim()) return;

  const res = await fetch("/api/todo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: newTodo, createdBy: user.primaryEmailAddress?.emailAddress }),
  });

  if (res.ok) {
    const createdTodo = await res.json();
    toast.success("Todo added successfully!", {
      theme: "dark",
      icon: "🚀",
    });

    if (!createdTodo || !createdTodo.content) {
      toast.error("Failed to add todo. Please try again.", {
        theme: "dark",
        icon: "🚨",
      });
      return;
    }

    setTodos((prevTodos) => [...prevTodos, createdTodo]);
    setNewTodo("");
  }
};


  const toggleTodo = async (id, isCompleted) => {
    const res = await fetch(`/api/todo/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isCompleted: !isCompleted }),
    });

    if (res.ok) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !isCompleted } : todo))
      ); // ✅ Modify only the changed todo
    }
  };

  const deleteTodo = async (id) => {
    const res = await fetch(`/api/todo/${id}`, { method: "DELETE" });

    if (res.ok) {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); // ✅ Remove deleted todo
      toast.success("Todo deleted successfully", {
        theme: "dark",
        icon: "🗑️",
      }); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black text-white p-6">
      <motion.div
        className="relative bg-gray-800 p-6 rounded-2xl shadow-2xl w-full max-w-2xl border border-gray-700"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
        <div
        data-tooltip-id="global-tooltip" data-tooltip-content="User Profile"
        className="absolute top-0 left-0 p-2 rounded-full   transition cursor-pointer"
        >
          <UserButton />
        </div>
        </div>
        <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-400">Task Expo</h1>
        <div className="flex items-center gap-3 mb-4">
          <input
            type="text"
            placeholder="Enter a new task..."
            className="flex-1 px-4 py-3 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={addTodo}
            className="p-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition cursor-pointer" data-tooltip-id="global-tooltip" data-tooltip-content="Add To-Do"
          >
            <Plus size={20} />
          </motion.button>
        </div>
        {loading ? (
          <ul className="space-y-2">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <li key={index} className="bg-gray-700 p-4 rounded-xl animate-pulse"></li>
              ))}
          </ul>
        ) : (
          <motion.ul className="space-y-3">
            {todos.length === 0 ? (
              <p className="text-gray-400 text-center">No tasks yet! 🎉</p>
            ) : (
              todos.map((todo) => (
                <motion.li
                  key={todo.id || `todo-${Math.random()}`} // ✅ Ensure unique keys
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`flex justify-between items-center p-4 rounded-xl transition border border-gray-600 ${
                    todo.isCompleted ? "bg-green-600 line-through" : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  <span className="cursor-pointer flex-1" onClick={() => toggleTodo(todo.id, todo.isCompleted)}>
                    {todo.content}
                  </span>
                  <div className="flex gap-2">
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      onClick={() => toggleTodo(todo.id, todo.isCompleted)}
                  className="text-green-400 hover:text-green-600 transition cursor-pointer"
                  data-tooltip-id="global-tooltip" data-tooltip-content="Mark as done"
                >
                      <Check size={20} />
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      onClick={() => deleteTodo(todo.id)}
                      className="text-red-400 hover:text-red-600 transition cursor-pointer"
                      data-tooltip-id="global-tooltip" data-tooltip-content="Remove To-Do"
                    >
                      <Trash2 size={20} />
                    </motion.button>
                  </div>
                </motion.li>
              ))
            )}
          </motion.ul>
        )}
        <div className="mt-4 flex justify-center">
         
          <SignOutButton signOutOptions={{ redirectTo: "/" }}>
            <motion.button
            data-tooltip-id="global-tooltip" data-tooltip-content="Sign Out"
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 bg-red-500 rounded-xl hover:bg-red-700 transition cursor-pointer"
            >
              Sign Out
            </motion.button>
          </SignOutButton>
        </div>
      </motion.div>
    </div>
  );
}
