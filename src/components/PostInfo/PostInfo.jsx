import './PostInfo.scss';

import UserInfo from '../UserInfo/UserInfo';
import CommentList from '../CommentList/CommentList';

const PostInfo = ({ posts }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{posts.title}</h3>
      <p>
        {' Posted by '}
        <UserInfo user={posts.user} />
      </p>
    </div>

    <p className="PostInfo__body">{posts.body}</p>
    <hr />

    {posts.comments && posts.comments.length > 0 ? (
      <CommentList comments={posts.comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);

export default PostInfo;
