import React from "react";
import Navbar from "../components/Navbar";
import axios from 'axios'

function Home() {

  async function fetchPosts() {
    const posts = await axios.get("/api/posts");
  }



  const createPost = () => {
    alert("post criado");
    
  };

  return (
    <div>
      <h1>Teste de posts</h1>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <br />
      <button onClick={createPost}>Criar Post</button>
    </div>
  );
}

export default Home;
