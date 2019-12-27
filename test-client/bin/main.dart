import 'dart:convert';
import 'dart:io';

import 'data/client.dart';
import 'socket.dart';

void main() async {
  ClientSocket socket;

  try {
    socket = await ClientSocket.connect();
  } catch (e) {
    print('Couldn\'t connect to socket');
    exit(1);
  }

  // socket.listen((response) {
  //   List<dynamic> data = json.decode(utf8.decode(response));

  //   final clients = data.map((c) => TeamspeakClient.fromJson(c)).toList();

  //   final clientNames = clients.map((c) => c.clientNickname).join(',');

  //   print('Number of clients: ' + clients.length.toString());
  //   print('Nicknames: ' + clientNames);
  // });

  final clients = await socket.getClientList();

  final clientNames = clients.map((c) => c.clientNickname).join(',');

  print('Number of clients: ' + clients.length.toString());
  print('Nicknames: ' + clientNames);
}
