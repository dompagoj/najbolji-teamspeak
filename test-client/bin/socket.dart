import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'converters.dart';
import 'data/client.dart';

class ClientSocket {
  Socket _socket;
  Stream<Uint8List> broadcast;

  static Future<ClientSocket> connect() async {
    final client = ClientSocket();
    client._socket = await Socket.connect('localhost', 1337);
    client.broadcast = client._socket.asBroadcastStream();

    return client;
  }

  Future<Uint8List> _sendCommand(int command, int type, List<int> payload) async {
    await _socket.flush();

    _socket.add([
      command,
      type,
      ...payload,
    ]);

    return broadcast.first;
  }

  Future<List<TeamspeakClient>> getClientList() async {
    const command = 0x00;
    const type = 0x01;
    final payload = utf8.encode('Hello there');

    final response = await _sendCommand(command, type, payload);
    List<dynamic> data = json.decode(utf8.decode(response));

    return data.map((c) => TeamspeakClient.fromJson(c)).toList();
  }

  Future<String> getClient(int clientId) async {
    const command = 0x01;
    const type = 0x01;
    final payload = uint32ToByteArray(clientId);

    _socket.add([
      command,
      type,
      ...payload,
    ]);
    final response = await broadcast.first;

    return utf8.decode(response);
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
