import 'package:flutter/cupertino.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';

class NavBar_Web extends StatelessWidget {
  const NavBar_Web({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100.0,
      child: Row(
        mainAxisSize: MainAxisSize.max,
        children: [
          Text(
            'Home',
            style: TextStyle(fontSize: 20.0),
          ),
          Text(
            'About',
            style: TextStyle(fontSize: 20.0),
          ),
          Text(
            'Projects',
            style: TextStyle(fontSize: 20.0),
          ),
          Text(
            'Contact',
            style: TextStyle(fontSize: 20.0),
          ),
          
        ],
      ),
    );
  }
}