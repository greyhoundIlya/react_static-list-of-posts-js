import PostInfo from '../PostInfo/PostInfo';

const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo posts={post} key={post.id} />
    ))}
  </div>
);

export default PostList;
