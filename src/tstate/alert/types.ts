export interface State {
	alerts: Alert[];
}

export interface Alert {
	type: AlertType;
	message: string;
}

export enum AlertType {
	SUCCESS,
	ERROR,
}
