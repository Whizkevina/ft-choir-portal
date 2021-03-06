import { 
  GET_ALL_POSTS, 
  SET_POST_BY_POST_ID,
  NEW_POST_CREATED,
  POST_DELETED,
  LIKE_POST,
  UNLIKE_POST,
  ADD_COMMENT_TO_POST,
  REMOVE_POST_COMMENT
 } from '../_actions/types';

const initialState = {
  postItems: [],
  post: null,
  newPost: null,
  postLiked: false,
  commentAdded: false,
  postDeleted: false,
  postCommentRemoved: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        postItems: payload
      };
    case SET_POST_BY_POST_ID:
      return {
        ...state,
        post: payload
      };
   
    case NEW_POST_CREATED:
      return {
        ...state,
        newPost: payload
      };
    case LIKE_POST:
    case UNLIKE_POST:
      return {
        ...state,
        postLiked: payload
      };
    case ADD_COMMENT_TO_POST:
      return {
        ...state,
        commentAdded: payload
      };
    case REMOVE_POST_COMMENT:
      return {
        ...state,
        postCommentRemoved: payload
      };
    case POST_DELETED:
      return {
        ...state,
        postDeleted: payload
      };
    default:
      return state;
  }
};