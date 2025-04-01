import { useState } from "react";
import axios from "axios";
import "./styles.css";
import { BASE_URL } from "../helper";

const PostForm = ({ onPostCreated }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Title: "",  
    text: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting Data:", formData); 
      const response = await axios.post(`${BASE_URL}/api/posts/post`, formData);
      console.log("Created Post:", response.data);  
      
      setFormData({ firstName: "", lastName: "", Title: "", text: "" }); 
      if (onPostCreated) onPostCreated(); 
    } catch (error) {
      console.error("Error creating post:", error.response?.data || error.message);
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        className="form-input"
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        className="form-input"
        type="text"
        name="Title"
        value={formData.Title}  
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        className="form-textarea"
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Text"
        required
      ></textarea>
      <button className="submit-button" type="submit">
        Create Post
      </button>
    </form>
  );
};

export default PostForm;
