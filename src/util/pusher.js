import Pusher from "pusher-js";

Pusher.log = function(message) {
  console.log(message);
};

const pusher = new Pusher('', {
  cluster: 'eu',
  encrypted: true
});

const channel = pusher.subscribe('transcodes');

export default channel;