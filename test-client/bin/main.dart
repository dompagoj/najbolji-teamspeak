import 'dart:convert';
import 'dart:io';

import 'data/client.dart';
import 'socket.dart';

void main() async {
  final socket = await ClientSocket.connect();

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
