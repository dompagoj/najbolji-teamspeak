import 'dart:io';

class ClientSocket {
  Socket socket;

  static Future<ClientSocket> connect() async {
    return ClientSocket()..socket = await Socket.connect('localhost', 1337);
  }

  test() {
    var stream = socket.listen((data) {});
  }
}

// var socket =
//   print('Connected!');

//   socket.listen((response) {
//     print('Got data!');
//     List<dynamic> data = json.decode(utf8.decode(response));

//     final clients = data.map((c) => TeamspeakClient.fromJson(c)).toList();

//     print('Number of clients: ' + clients.length.toString());

//     socket.close();
//   });

//   const command = 0x00;
//   const type = 0x01;
//   final payload = utf8.encode('Hello there');

//   socket.add([
//     command,
//     type,
//     ...payload,
//   ]);
