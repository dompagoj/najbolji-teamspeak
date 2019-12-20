import 'dart:typed_data';

Uint8List uint32ToByteArray(int param) {
  final bytes = Uint8List(4);
  final int32list = Uint32List.fromList([param]);
  bytes.setAll(0, ByteData.view(int32list.buffer).buffer.asUint8List());

  return bytes;
}
