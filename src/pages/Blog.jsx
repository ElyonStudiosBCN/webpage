// src/pages/Blog.jsx
import { Link } from "react-router-dom";
import posts from "../data/blogIndex.json";
import "./Blog.css";

export default function Blog() {
  return (
    <section className="section section-light container">
      <div className="card">
        <h1 className="heading text-primary">Blog</h1>
        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.id} className="card mb-4 blog-item">
              <h2 className="subheading">{post.title}</h2>
              <small className="text-muted">{new Date(post.date).toLocaleDateString()}</small>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="btn btn-accent">
                Leer más
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
