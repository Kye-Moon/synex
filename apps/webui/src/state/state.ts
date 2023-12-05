import {atom, selector} from "recoil";
import {jwtDecode} from "jwt-decode";

export interface UserInfo {
	sub: string;
	name: string;
	email: string;
	role: string;
	orgId: string;
}
export const userState = selector({
	key: 'userState',
	get: ({get}): UserInfo | null => {
		const token = get(tokenState);
		if (!token) {
			return null;
		}
		const decoded = jwtDecode(token);
		return decoded as UserInfo;
	}
})

export const tokenState = atom({
	key: 'tokenState',
	default: localStorage.getItem("access_token") || "",
	effects: [({onSet}) => {
		return onSet((newValue: string) => {
			localStorage.setItem("access_token", newValue);
		});
	}]
})
