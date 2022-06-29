import $ from "jquery";

class Code {
  names: string[] = [];
  message: string = "";

  constructor(messageIn: string) {
    this.names = ["Bob", "Fred"];
    this.message = messageIn;
  }

  getMessage() {
    const app = $("#app");
    return this.message;
  }

  getTime() {
    var today = new Date();
    return today;
  }

  greet() {
    return "Hello, " + this.message + this.names;
  }
}
export { Code };
