import React, {useEffect} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'
import { Link } from 'react-router-dom';

const Post = ({ getPost, post: { post, loading }, match }) => {
    useEffect(() => {
      getPost(match.params.id);
    }, [getPost, match.params.id]);
  
    return (
        loading || post === null ? (
      <Spinner />
    ) : 
    (
      <>
      <Link to='/posts' className='btn'>Back to Posts</Link>
        <PostItem post={post} showActions={false} />
        <CommentForm postId={post._id} />
        <div className='comments'>
          {post.comments.map(comment => (
            <CommentItem key={comment._id} comment={comment} postId={post._id} />
          ))}
        </div>
      </>
    ));
  };
  
  Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    post: state.post
  });
  
  export default connect(mapStateToProps, { getPost })(Post);







// const Post = ({getPost, post: {post, loading}, match}) => {
//     useEffect(() => {
//         getPost(match.params.id)
//     }, [getPost, match.params.id])

//     return loading  || post === null ? (
//     <Spinner /> 
//     ) : (
//     <Fragment>
//       <PostItem post={post} showActions={false} />
//     </Fragment>)
// }

// Post.propTypes = {
// getPost: PropTypes.func.isRequired,
// post: PropTypes.object.isRequired,
// }

// const mapStateToProps = (state) => ({
//     post: state.post
// })

// export default connect(mapStateToProps, { getPost })(Post)
