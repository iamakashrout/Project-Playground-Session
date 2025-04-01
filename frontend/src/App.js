import React from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { motion } from "framer-motion"; 
import "./App.css"; 

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="app-container"
    >
      <h1 className="app-heading">Post Manager : Project Playground</h1>
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="form-container"
      >
        <PostForm />
      </motion.div>
      <PostList />
    </motion.div>
  );
}

export default App;
