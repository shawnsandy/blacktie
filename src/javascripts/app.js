import './modules'
import "./../stylesheets/app.scss";
console.log('app.js has loaded!')

class TestClass {
  constructor() {
    let msg = "Using ES2015+ syntax";
    console.log(msg);
  }
}

let test = new TestClass();
