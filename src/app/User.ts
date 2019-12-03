export class User {
  id: number;
  email: string;
   username: string;
   password: string;
  token?: string;


  constructor(email: string, username: string, password: string, token: string) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.token = token;
  }


}
