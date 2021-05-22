export interface Response<T> {
  statusCode: object;
  message: string;
  success: boolean;
  data: T;
}
