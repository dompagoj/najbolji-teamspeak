import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'commands.dart';
import 'converters.dart';
import 'data/teamspeak_client.dart';

class ClientSocket {
  Socket _socket;
  Stream<Uint8List> broadcast;

  static Future<ClientSocket> connect() async {
    final client = ClientSocket();
    client._socket = await Socket.connect('localhost', 1337);
    client.broadcast = client._socket.asBroadcastStream();

    return client;
  }

  void dispose() {
    return _socket.destroy();
  }

  Future<Uint8List> _sendCommand(int command, [List<int> payload]) async {
    await _socket.flush();

    _socket.add([
      command,
      ...?payload,
    ]);

    return broadcast.first;
  }

  Future<List<TeamspeakClient>> getOnlineClients() async {
    final payload = utf8.encode('Hello there');

    final response = await _sendCommand(Commands.GET_ONLINE_CLIENTS, payload);
    List<dynamic> data = json.decode(utf8.decode(response));

    return data.map((c) => TeamspeakClient.fromJson(c)).toList();
  }

  Future<dynamic> getDbClientList() async {
    final response = await _sendCommand(Commands.GET_DB_CLIENTS);

    final data = json.decode(utf8.decode(response));

    return data;
  }

  Future<String> getClient(int clientId) async {
    final payload = uint32ToByteArray(clientId);

    _socket.add([Commands.GET_CLIENT, ...payload]);
    final response = await broadcast.first;

    return utf8.decode(response);
  }
}
