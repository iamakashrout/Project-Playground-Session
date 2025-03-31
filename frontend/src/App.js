// import { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [form, setForm] = useState({ firstName: "", lastName: "", Title: "", text: "" });
//   const [editingPost, setEditingPost] = useState(null);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/posts/get");
//       setPosts(response.data);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };

//   const createPost = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/posts/post", form);
//       setForm({ firstName: "", lastName: "", Title: "", text: "" });
//       fetchPosts();
//     } catch (error) {
//       console.error("Error creating post:", error);
//     }
//   };

//   const deletePost = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/posts/${id}/delete`);
//       fetchPosts();
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   };

//   const editPost = async (id) => {
//     try {
//       await axios.patch(`http://localhost:5000/api/posts/${id}/edit`, editingPost);
//       setEditingPost(null);
//       fetchPosts();
//     } catch (error) {
//       console.error("Error updating post:", error);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       style={{
//         padding: "20px",
//         backgroundColor: "#181824", // Deep Dark Blue
//         color: "#ffffff", // White
//         minHeight: "100vh",
//         background: "linear-gradient(to bottom, #1a1d23, #181824)", // Gradient Background
//       }}
//     >
//       <h1 style={{
//         color: "#8e32e9", // Electric Purple
//         marginBottom: "20px",
//         fontSize: "36px",
//         fontWeight: "bold",
//       }}>Post Manager : Project Playground</h1>
//       <motion.form
//         onSubmit={createPost}
//         initial={{ scale: 0.9 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.5 }}
//         style={{
//           backgroundColor: "#2f343a", // Darker shade for inputs
//           padding: "20px",
//           borderRadius: "10px",
//           boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="First Name"
//           value={form.firstName}
//           onChange={(e) => setForm({ ...form, firstName: e.target.value })}
//           required
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "15px",
//             border: "none",
//             borderRadius: "5px",
//             backgroundColor: "#343a40", // Slightly lighter for input fields
//             color: "#ffffff", // White
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={form.lastName}
//           onChange={(e) => setForm({ ...form, lastName: e.target.value })}
//           required
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "15px",
//             border: "none",
//             borderRadius: "5px",
//             backgroundColor: "#343a40", // Slightly lighter for input fields
//             color: "#ffffff", // White
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Title"
//           value={form.Title}
//           onChange={(e) => setForm({ ...form, Title: e.target.value })}
//           required
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "15px",
//             border: "none",
//             borderRadius: "5px",
//             backgroundColor: "#343a40", // Slightly lighter for input fields
//             color: "#ffffff", // White
//           }}
//         />
//         <textarea
//           placeholder="Text"
//           value={form.text}
//           onChange={(e) => setForm({ ...form, text: e.target.value })}
//           required
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginBottom: "15px",
//             border: "none",
//             borderRadius: "5px",
//             backgroundColor: "#343a40", // Slightly lighter for input fields
//             color: "#ffffff", // White
//           }}
//         />
//         <motion.button
//           type="submit"
//           initial={{ scale: 0.9 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5 }}
//           style={{
//             backgroundColor: "#8e32e9", // Electric Purple
//             color: "#ffffff", // White
//             padding: "10px 20px",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Create Post
//         </motion.button>
//       </motion.form>
//       <h2 style={{
//         color: "#8e32e9", // Electric Purple
//         marginTop: "20px",
//         fontSize: "24px",
//         fontWeight: "bold",
//       }}>All Posts</h2>
//       {posts.map((post) => (
//         <motion.div
//           key={post._id}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           style={{
//             border: "1px solid #8e32e9", // Electric Purple border
//             padding: "10px",
//             margin: "10px 0",
//             backgroundColor: "#2f343a", // Darker shade for post backgrounds
//             borderRadius: "10px",
//             background: "linear-gradient(to bottom, #343a40, #2f343a)", // Gradient Background
//           }}
//         >
//           {editingPost && editingPost._id === post._id ? (
//             <>
//              <input
//   type="text"
//   value={editingPost.Title}
//   onChange={(e) => setEditingPost({ ...editingPost, Title: e.target.value })}
//   style={{
//     width: "100%",
//     padding: "12px",
//     marginBottom: "15px",
//     borderRadius: "8px",
//     border: "2px solid transparent", // Default border
//     backgroundColor: "#ffffff", // White background
//     color: "#000000", // Black text for contrast
//     fontSize: "16px",
//     boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
//     outline: "none", // Remove default outline
//     transition: "border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth transitions
//   }}
//   onFocus={(e) => {
//     e.target.style.borderColor = "#8e32e9"; // Electric Purple border on focus
//     e.target.style.boxShadow = "0px 0px 10px #8e32e9"; // Glow effect on focus
//   }}
//   onBlur={(e) => {
//     e.target.style.borderColor = "transparent"; // Reset border color on blur
//     e.target.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)"; // Reset shadow on blur
//   }}
// />

// <textarea
//   value={editingPost.text}
//   onChange={(e) => setEditingPost({ ...editingPost, text: e.target.value })}
//   style={{
//     width: "100%",
//     padding: "12px",
//     marginBottom: "15px",
//     borderRadius: "8px",
//     border: "2px solid transparent", // Default border
//     backgroundColor: "#ffffff", // White background
//     color: "#000000", // Black text for contrast
//     fontSize: "16px",
//     boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
//     outline: "none", // Remove default outline
//     resize: "vertical", // Allow vertical resizing only
//     transition: "border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth transitions
//   }}
//   onFocus={(e) => {
//     e.target.style.borderColor = "#8e32e9"; // Electric Purple border on focus
//     e.target.style.boxShadow = "0px 0px 10px #8e32e9"; // Glow effect on focus
//   }}
//   onBlur={(e) => {
//     e.target.style.borderColor = "transparent"; // Reset border color on blur
//     e.target.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)"; // Reset shadow on blur
//   }}
// />

//              <motion.button
//   onClick={() => editPost(post._id)}
//   initial={{ scale: 0.9 }}
//   animate={{ scale: 1 }}
//   transition={{ duration: 0.5 }}
//   whileHover={{
//     scale: 1.1,
//     backgroundColor: "#28a745", // Bright green on hover
//     boxShadow: "0px 0px 10px #28a745", // Green glowing effect
//   }}
//   style={{
//     backgroundColor: "#218838", // Dark green for default state
//     color: "#ffffff", // White text
//     padding: "10px 20px",
//     borderRadius: "5px",
//     border: "none",
//     cursor: "pointer",
//     fontWeight: "bold",
//     marginRight: "10px", // Add spacing between buttons
//   }}
// >
//   Save
// </motion.button>

// <motion.button
//   onClick={() => setEditingPost(null)}
//   initial={{ scale: 0.9 }}
//   animate={{ scale: 1 }}
//   transition={{ duration: 0.5 }}
//   whileHover={{
//     scale: 1.1,
//     backgroundColor: "#dc3545", // Bright red on hover
//     boxShadow: "0px 0px 10px #dc3545", // Red glowing effect
//   }}
//   style={{
//     backgroundColor: "#c82333", // Dark red for default state
//     color: "#ffffff", // White text
//     padding: "10px 20px",
//     borderRadius: "5px",
//     border: "none",
//     cursor: "pointer",
//     fontWeight: "bold",
//   }}
// >
//   Cancel
// </motion.button>

//             </>
//           ) : (
//             <>
//               <h3>{post.Title}</h3>
//               <p><strong>By:</strong> {post.firstName} {post.lastName}</p>
//               <p>{post.text}</p>
//               <motion.button
//   onClick={() => setEditingPost(post)}
//   initial={{ scale: 0.9 }}
//   animate={{ scale: 1 }}
//   transition={{ duration: 0.5 }}
//   whileHover={{
//     scale: 1.1,
//     backgroundColor: "#28a745", // Green color on hover
//     boxShadow: "0px 0px 10px #28a745", // Green glowing effect
//   }}
//   style={{
//     backgroundColor: "#218838", // Dark green for the default state
//     color: "#ffffff", // White text
//     padding: "8px 15px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontWeight: "bold",
//     marginRight: "10px", // Add spacing between buttons
//   }}
// >
//   Edit
// </motion.button>

// <motion.button
//   onClick={() => deletePost(post._id)}
//   initial={{ scale: 0.9 }}
//   animate={{ scale: 1 }}
//   transition={{ duration: 0.5 }}
//   whileHover={{
//     scale: 1.1,
//     backgroundColor: "#dc3545", // Red color on hover
//     boxShadow: "0px 0px 10px #dc3545", // Red glowing effect
//   }}
//   style={{
//     backgroundColor: "#c82333", // Dark red for the default state
//     color: "#ffffff", // White text
//     padding: "8px 15px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontWeight: "bold",
//   }}
// >
//   Delete
// </motion.button>

              
//             </>
//           )}
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// }

// export default App;
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
