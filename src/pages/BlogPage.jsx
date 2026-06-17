import React from 'react'
import { Link } from 'react-router-dom'

const userAuthorMap = { 1: "Ayomikun Quadri", 2: "Jane Doe", 3: "Alex Smith" };
const userCategoryMap = { 1: "Technology", 2: "Design", 3: "Business", 4: "Science" };

const BlogPage = () => {
    const [posts, setPosts] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const [totalPages, setTotalPages] = React.useState(0)
    const [loading, setLoading] = React.useState(false)
    const [category, setCategory] = React.useState("All")
    const [error, setError] = React.useState(null)
    const POSTS_PER_PAGE = 6;

    async function fetchPosts(pageNumber, categoryFilter) {
        setLoading(true)
        setError(null)

        try {
            const url = `https://jsonplaceholder.typicode.com/posts`
            const response = await fetch(url)

            if(!response.ok){
                throw new Error("Failed to fetch articles. Please try again later.");
            }

            const allData = await response.json()
            
            const transformedData = allData.map(post => {
                const authorName = userAuthorMap[post.userId] || "Staff Writer";
                const initials = authorName.split(" ").map(name => name[0]).join("").toUpperCase();
                const postCategory = userCategoryMap[post.userId] || "Technology";
                const wordCount = post.body.split(" ").length;
                const readTime = Math.ceil(wordCount / 200);

                return {
                    ...post,
                    authorName,
                    initials,
                    category: postCategory,
                    readTime
                }
            })

            const filteredData = categoryFilter === "All" 
                ? transformedData 
                : transformedData.filter(post => post.category.toLowerCase() === categoryFilter.toLowerCase());

            setTotalPages(Math.ceil(filteredData.length / POSTS_PER_PAGE))

            const startIndex = (pageNumber - 1) * POSTS_PER_PAGE
            const paginatedData = filteredData.slice(startIndex, startIndex + POSTS_PER_PAGE)

            setPosts(paginatedData)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        fetchPosts(currentPage, category)
    }, [currentPage, category])

    function handleCategoryChange(value){
        setCategory(value)
        setCurrentPage(1)
    }

    function handlePageChange(number){
        setCurrentPage(number)
    }

  return (
    <div className="blog-container container">
        <div className="left-filter">
            <div className="filter-row">
                {["All", "Technology", "Design", "Business", "Science"].map((catName) => (
                    <button 
                        key={catName}
                        className={`category-pill ${category === catName ? 'active' : ''}`}
                        onClick={() => handleCategoryChange(catName)}
                    >
                        {catName}
                    </button>
                ))}
            </div>
            <div className="right-filter">
                <span>Browsing <strong>{category}</strong> Articles</span>
            </div>
        </div>
        
        {loading && <div className="blog-loading-state">Loading articles...</div>}
        {error && <div className="blog-error-state">{error}</div>}

        {!loading && !error && (
            <div className="features-grid">
                {posts.length === 0 ? (
                    <p className="no-posts">No articles found in this category.</p>
                ) : (
                    posts.map((post) => {
                        const truncatedTitle = post.title.length > 45 ? post.title.slice(0, 45) + "..." : post.title;
                        const truncatedBody = post.body.length > 90 ? post.body.slice(0, 90) + "..." : post.body;

                        return (
                            <Link to={`/blog/${post.id}`} className='feature-card blog-card' key={post.id}>
                                <div className="blog-card-top">
                                    <span className='feature-badge'>{post.category}</span>
                                    <h3 className="feature-title">{truncatedTitle}</h3>
                                    <p className='feature-description'>{truncatedBody}</p>
                                </div>

                                <div className="author-row">
                                    <div className="avatar">{post.initials}</div> 
                                    <div className="author-meta-text">
                                        <p className="author-name">{post.authorName}</p>
                                        <span className="read-duration">{post.readTime} min read</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                )}
            </div>
        )}

        {!loading && !error && totalPages > 1 && (
            <div className="blog-pagination">
                <button 
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="pagination-btn"
                >
                    Previous
                </button>
                
                <div className="pagination-center">
                    <span>Page <strong>{currentPage}</strong> of {totalPages}</span>
                </div>

                <button 
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="pagination-btn"
                >
                    Next
                </button>
            </div>
        )}
    </div>
  )
}

export default BlogPage