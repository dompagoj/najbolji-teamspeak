import 'package:client_socket/src/socket.dart';
import 'package:flutter_test/flutter_test.dart';

void main() async {
  ClientSocket socket;

  setUpAll(() async {
    try {
      socket = await ClientSocket.connect();
    } catch (e) {}

    expect(socket, isNotNull);
  });

  tearDownAll(() {
    expect(socket, isNotNull);
    socket.dispose();
  });

  test('Gets single client by id', () async {
    final response = await socket.getClient(472);

    print('Response: $response');
    expect(response, equals('Hello there client with id ${472}'));
  });

  test('Get online clients', () async {
    final response = await socket.getOnlineClients();

    expect(response, isNotNull);
  });

  test('Get all db clients', () async {
    final response = await socket.getDbClientList();

    expect(response, isNotNull);
  });
}
