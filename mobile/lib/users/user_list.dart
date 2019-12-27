import 'package:flutter/material.dart';
import 'package:mobile/data/user.dart';
import 'package:mobile/users/user_list_row.dart';

const userList = [
  User(id: 1, online: true, username: 'Dompa'),
  User(id: 2, online: true, username: 'Mate'),
  User(id: 3, online: false, username: 'Cofinjo'),
  User(id: 1, online: true, username: 'Dompa'),
  User(id: 2, online: true, username: 'Mate'),
  User(id: 3, online: false, username: 'Cofinjo'),
  User(id: 1, online: true, username: 'Dompa'),
  User(id: 2, online: true, username: 'Mate'),
  User(id: 3, online: false, username: 'Cofinjo'),
  User(id: 1, online: true, username: 'Dompa'),
  User(id: 2, online: true, username: 'Mate'),
  User(id: 3, online: false, username: 'Cofinjo'),
  User(id: 1, online: true, username: 'Dompa'),
  User(id: 2, online: true, username: 'Mate'),
  User(id: 3, online: false, username: 'Cofinjo'),
  User(id: 1, online: true, username: 'Dompa'),
  User(id: 2, online: true, username: 'Mate'),
  User(id: 3, online: false, username: 'Cofinjo'),
  User(id: 1, online: true, username: 'Dompa'),
  User(id: 2, online: true, username: 'Mate'),
  User(id: 3, online: false, username: 'Cofinjo'),
];

class UserList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: ListView.builder(
        itemCount: userList.length,
        itemBuilder: (context, index) {
          final user = userList[index];

          return UserListRow(
            user: user,
            key: Key(user.id.toString()),
          );
        },
      ),
    );
  }
}
