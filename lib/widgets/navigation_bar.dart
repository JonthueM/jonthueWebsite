import 'package:flutter/cupertino.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import './navigation_item.dart';

class NavBar_Web extends StatelessWidget {
  const NavBar_Web({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100.0,
      child: Row(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
         NavItem(title: 'Home'),
         NavItem(title: 'About'),
         NavItem(title: 'Projects'),
         NavItem(title: 'Contact'),
        ],
      ),
    );
  }
}