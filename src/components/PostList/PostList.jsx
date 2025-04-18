import PostInfo from '../PostInfo/PostInfo';

const PostList = ({ post }) => (
  <div className="PostList">
    {post.map(posts => (
      <PostInfo key={posts.id} post={posts} />
    ))}
  </div>
);

export default PostList;
