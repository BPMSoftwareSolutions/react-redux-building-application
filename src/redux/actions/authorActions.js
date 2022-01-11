import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthorSuccess(author) {
	return { type: types.LOAD_AUTHORS_SUCCESS, author };
}

export function loadAuthors() {
	return function (dispatch) {
		return authorApi
			.getAuthors()
			.then((authors) => {
				dispatch(loadAuthorSuccess(authors));
			})
			.catch((error) => {
				throw error;
			});
	};
}
