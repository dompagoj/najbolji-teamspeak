import 'package:flutter/material.dart';
import 'package:mobile/routes.dart';
import 'package:mobile/users/users.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData.dark(),
      initialRoute: '/',
      routes: {
        AppRoutes.HOME: (ctx) => Users(),
      },
    );
  }
}
