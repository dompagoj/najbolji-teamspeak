import 'package:flutter/material.dart';

final myBottomBar = BottomNavigationBar(
  type: BottomNavigationBarType.shifting,
  items: [
    BottomNavigationBarItem(
      icon: const Icon(Icons.supervised_user_circle),
      title: const Text('Users'),
    ),
    BottomNavigationBarItem(
      icon: const Icon(Icons.videogame_asset),
      title: const Text('PubG'),
    ),
  ],
  selectedItemColor: Colors.lightBlue,
  selectedLabelStyle: TextStyle(
    fontWeight: FontWeight.bold,
  ),
);
