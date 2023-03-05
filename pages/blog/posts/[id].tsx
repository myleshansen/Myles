interface PostProps {
  title: string;
  body: string;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  return {
    props: { post: {} },
  };
}

function Post(post: PostProps) {
  return (
    <div>
      <h1>Blog Post</h1>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
