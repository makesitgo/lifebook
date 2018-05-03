export enum AlertTypes {
  SUCCESS,
  ERROR,
}

export interface Alert {
  type: AlertTypes
  message: string
}
