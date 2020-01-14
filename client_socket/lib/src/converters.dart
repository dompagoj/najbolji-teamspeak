import 'dart:typed_data';

Uint8List uint32ToByteArray(int param) => Uint32List.fromList([param]).buffer.asUint8List();
