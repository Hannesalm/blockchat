import { db } from './init';

let api = {
  insertData(room, message) {
    let messagesRef = db.ref(room);
    let newMessageRef = messagesRef.push();

    message.id = newMessageRef.key;
    return newMessageRef.set(message);
  },

  getMessages(room) {
    return db.ref(room);
  },
};

export default api;
