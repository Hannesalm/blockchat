import { db } from './init';

let api = {
  insertData(room, message) {
    let messagesRef = db.ref(room);
    let newMessageRef = messagesRef.push();
    console.log(newMessageRef.key);
    return newMessageRef.set({
      message: message,
      id: newMessageRef.key,
    });
  },

  getMessages(room) {
    return db.ref(room);
  },
};

export default api;
