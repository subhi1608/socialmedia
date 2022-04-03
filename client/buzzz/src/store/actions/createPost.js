import { ActionTypes } from "../contents/action-type";
import axios from "../../axios";
export const createPost =
	({ description, _id, image }) =>
	async (dispatch) => {
		const response = await axios({
			method: "POST",
			data: {
				desc: description,
				userId: _id,
				img: image,
			},
			url: "post/create/",
		});
		dispatch({ type: ActionTypes.CREATE_POST, payload: response.data });
	};
