import 'package:flutter/cupertino.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';

class NavItem extends StatelessWidget {

final String title;

const NavItem({required this.title});

  @override
  Widget build(BuildContext context) {
    return Padding(padding: const EdgeInsets.symmetric(horizontal: 50.0),
    child: Text(
      title,
      style: TextStyle(fontSize: 20),
    ),
    );
  }
}