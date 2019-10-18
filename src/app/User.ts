export class User {
  private email: string;
  private username: string;
  private password: string;

  constructor(email: string, username: string, password: string) {
    this.email = email;
    this.username = username;
    this.password = password;
  }

  public getUsername = () => {
    return this.username;
  }
}
