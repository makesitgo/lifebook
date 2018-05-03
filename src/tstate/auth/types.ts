export interface State {
	isLoggingIn: boolean;
	user?: User;
	error?: Error;
}

export interface LoginRequest {
	username: string;
	password: string;
}

export interface User {
	username: string;
	password: string;
	token?: string;
}
