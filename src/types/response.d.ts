interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
interface userDataTypes {
  _id: string;
  name: string;
  email: string;
  role: string;
  phone: number;
  createdAt: string;
  updatedAt: string;
}
interface LoginDataTypes {
  user: userDataTypes;
  token: string;
}
