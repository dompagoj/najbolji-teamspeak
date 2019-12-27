import 'package:flutter/material.dart';
import 'package:mobile/bottom_bar.dart';
import 'package:mobile/users/user_list.dart';

class Users extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Najbolji Teamspeak'),
      ),
      body: UserList(),
      bottomNavigationBar: myBottomBar,
    );
  }
}
