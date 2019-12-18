import 'package:flutter/material.dart';
import 'package:mobile/data/user.dart';

class UserListRow extends StatelessWidget {
  final User user;

  UserListRow({@required this.user, Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 8),
      child: Row(
        children: [
          Container(
            child: SizedBox(width: 15, height: 15),
            decoration: BoxDecoration(
              color: user.online ? Colors.green : Colors.red,
              shape: BoxShape.circle,
            ),
          ),
          const SizedBox(width: 10),
          Text(user.username),
        ],
      ),
    );
  }
}
