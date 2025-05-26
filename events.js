class MyEventEmitter {
  constructor() {
    this.event = {};
    this.event.listner = {};
  }
  on(event, listener) {
    if (!this.event.listner[event]) {
      this.event.listner[event] = [];
    }
    this.event.listner[event].push(listener);
  }
  emit(event, ...args) {
    if (!this.event.listner[event]) {
      return false;
    }
    const Listeners = this.event.listner[event];
    Listeners.forEach((listener) => listener(...args));
  }
  off(event, listenerToRemove) {
    console.log("listenerToRemove", listenerToRemove);

    if (!this.event.listner[event]) {
      return false;
    }
    const index = this.event.listner[event].indexOf((e) => e === listener);
    if (index < 0) {
      return false;
    }
    this.event.listner[event].splice(index, 1);
    return true;
  }
}

let e = new MyEventEmitter();

const sendMsg = (username) => console.log("Whatsup to", username);

e.on("user:signup", (username) => console.log("userSignup", username));
e.on("user:signup", (username) => console.log("sending Email", username));
e.on("user:signup", sendMsg);
e.on("user:logout", (username) => console.log("Logout", username));

e.emit("user:signup", "Pradnya");
e.emit("user:signup", "Pallavi");

e.off("user:signup", sendMsg);
e.emit("user:signup", "Yash");
e.emit("user:logout", "Pradnya");
e.emit("user:logout", "Pallavi");
