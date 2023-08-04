export class InvalidCredententialsError extends Error {
  constructor() {
    super("Invalid credentials.");
  }
}
