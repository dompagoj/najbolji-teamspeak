import 'dart:convert';
import 'dart:io';

void main() async {
  print('hello world!');

  var socket = await Socket.connect('localhost', 1337);
  print('Connected!');

  socket.listen((data) {
    print('Got data!');
  });

  socket.add([0xFF, 0xFF, 0x01, 125]);
}
