
interface PostProps {
    title: string,
    body: string,
}

function Post(post: PostProps ) {
  return (
    <div>
        <h1>Blog Post</h1>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;