import React from "react";
import { useParams, Link } from "react-router-dom";

const userAuthorMap = {
    1: "Ayomikun Quadri",
    2: "Jane Doe",
    3: "Alex Smith",
};

const userCategoryMap = {
    1: "Technology",
    2: "Design",
    3: "Business",
    4: "Science",
};

const userDateMap = {
    1: "May 20, 2026",
    2: "May 17, 2026",
    3: "May 14, 2026",
    4: "May 10, 2026",
};

const categoryTags = {
    Technology: ["React", "SaaS", "Development"],
    Design: ["UI", "UX", "Design Systems"],
    Business: ["Growth", "Marketing", "Strategy"],
    Science: ["Research", "Innovation", "Data"],
};

const BlogPostPage = () => {
  const { id } = useParams();

  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to load article");
        }

        const data = await response.json();

        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="blog-post-page">
        <p>Loading article...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-post-page">
        <p>{error}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-post-page">
        <p>Article not found.</p>
      </div>
    );
  }

  const category = userCategoryMap[post.userId] || "Technology";

  const authorName =userAuthorMap[post.userId] || "Staff Writer";

  const publishDate =userDateMap[post.userId] || "May 1, 2026";

  const initials = authorName
                  .split(" ")
                  .map((name) => name[0])
                  .join("")
                  .toUpperCase();

  const readTime = Math.ceil(post.body.split(" ").length / 200);

  const tags =categoryTags[category] || ["Article"];

  return (
    <div className="blog-post-page">
      <Link to="/blog" className="back-link">Back to Blog</Link>

      <div className="article-category">{category}</div>

      <h1 className="article-heading">{post.title}</h1>

      <div className="article-meta">
        <div className="article-avatar">{initials}</div>
        <div className="author-info">
          <p className="author-name">{authorName}</p>
          <p className="author-date">{publishDate}</p>
        </div>

        <div className="read-time-badge">{readTime} min read</div>
      </div>

      <div className="article-container">
        <p>{post.body}</p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae reiciendis exercitationem quidem necessitatibus vitae perspiciatis reprehenderit temporibus architecto officiis sed.
        </p>

        <p>
          FlowSpace helps teams keep projects aligned by combining tasks, collaboration, and reporting into a single workspace.
        </p>
      </div>

      <div className="article-tags">
        {tags.map((tag) => (
          <span key={tag} className="article-tag">#{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default BlogPostPage;