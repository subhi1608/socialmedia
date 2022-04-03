import { ActionTypes } from "../contents/action-type";

const initialState = {
	posts: [],
};
const allPostsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.GET_ALL_POSTS:
			return { ...state, posts: payload };
		case ActionTypes.GET_FLAGGED_POSTS:
			return { ...state, posts: payload };
		case ActionTypes.CREATE_POST:
			return { ...state, posts: [payload, ...state.posts] };
		case ActionTypes.ADD_COMMENT:
			const { posts } = state;
			return {
				...state,
				posts: posts.map((item) => {
					if (item._id === payload._id) {
						const { comments } = payload;
						return { ...item, comments };
					}
					return item;
				}),
			};
		case ActionTypes.LIKE_POST:
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === payload._id ? payload : post
				),
			};
		case ActionTypes.DISLIKE_POST:
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === payload._id ? payload : post
				),
			};
		default:
			return state;
	}
};
export default allPostsReducer;
