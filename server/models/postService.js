// const { cloudinary } = require('./utils/cloudinary');
const ObjectId = require("mongoose").Types.ObjectId;
const userData = require("./User");
const Post = require("./Post");

// create a Post
module.exports.createPost = async (userId, desc, img) => {
	const createdUser = new Post(userId, desc, img);
	try {
		const savedPost = await createdUser.save();
		const newPost = await Post.findById(savedPost._id).populate("userId");
		return newPost;
	} catch (err) {
		console.log(err);
		return err;
	}
};
// like-dislike a Post
module.exports.likePost = async ({ likedUsernameId, postId }) => {
	try {
		const fetchedPost = await Post.findById(postId);

		if (!fetchedPost.likes.includes(likedUsernameId)) {
			if (!fetchedPost.dislike.includes(likedUsernameId)) {
				await fetchedPost.updateOne({
					$push: { likes: likedUsernameId },
				});
				const newLikedPost = await Post.findById(postId).populate("userId");
				return newLikedPost;
			} else {
				await fetchedPost.updateOne({
					$push: { likes: likedUsernameId },
					$pull: { dislike: likedUsernameId },
				});
				const newLikedPost = await Post.findById(postId).populate("userId");
				return newLikedPost;
			}
		} else {
			await fetchedPost.updateOne({ $pull: { likes: likedUsernameId } });
			const newLikedPost = await Post.findById(postId).populate("userId");
			return newLikedPost;
		}
	} catch (err) {
		return err;
	}
};
// dislike a post
module.exports.dislikePost = async ({ dislikedUsernameId, postId }) => {
	try {
		const fetchedPost = await Post.findById(postId);

		if (!fetchedPost.dislike.includes(dislikedUsernameId)) {
			if (!fetchedPost.likes.includes(dislikedUsernameId)) {
				await fetchedPost.updateOne({
					$push: { dislike: dislikedUsernameId },
				});
				const newDislikedPost = await Post.findById(postId).populate("userId");
				return newDislikedPost;
			} else {
				await fetchedPost.updateOne({
					$push: { dislike: dislikedUsernameId },
					$pull: { likes: dislikedUsernameId },
				});
				const newDislikedPost = await Post.findById(postId).populate("userId");
				return newDislikedPost;
			}
		} else {
			await fetchedPost.updateOne({ $pull: { dislike: dislikedUsernameId } });
			const newDislikedPost = await Post.findById(postId).populate("userId");
			return newDislikedPost;
		}
	} catch (err) {
		return err;
	}
};
module.exports.flagPost = async (postId) => {
	try {
		const getPost = await Post.findById(postId);
		if (!getPost.isFlagged) {
			await getPost.updateOne({ $set: { isFlagged: true } });
			const updatedFlaggedPost = await Post.findById(postId);
			return updatedFlaggedPost;
		} else {
			await getPost.updateOne({ $set: { isFlagged: false } });
			const updatedFlaggedPost = await Post.findById(postId);
			return updatedFlaggedPost;
		}
	} catch (err) {
		return err;
	}
};
// get a Post
module.exports.getPost = async (id) => {
	try {
		const fetchedPost = await Post.find({ userId: id });
		return fetchedPost;
	} catch (err) {
		return err;
	}
};
// get all Posts
module.exports.getAllPosts = async (user) => {
	try {
		const allPosts = await Post.find({
			userId: { $in: [user._id, ...user.friends] },
		})
			.populate("userId")
			.sort({ createdAt: -1 });
		return allPosts;
	} catch (err) {
		return err;
	}
};
// get flagged posts
module.exports.getFlaggedPosts = async (user) => {
	try {
		const allFlaggedPosts = await Post.find({ isFlagged: true })
			.populate("userId")
			.sort({ createdAt: -1 });
		console.log(allFlaggedPosts, "allFlaggedPosts");
		return allFlaggedPosts;
	} catch (err) {
		return err;
	}
};

// comment on a Post
module.exports.addComment = async ({ desc, userId, postId }) => {
	try {
		const fetchedPost = await Post.findById(postId);
		const commentUser = await userData.findById(userId);
		const { username, profilePic } = commentUser;
		await fetchedPost.updateOne({
			$push: { comments: { desc, userId, username, profilePic } },
		});
		return fetchedPost;
	} catch (err) {
		return err;
	}
};
