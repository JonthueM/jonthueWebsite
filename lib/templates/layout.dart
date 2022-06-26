import 'package:jonthue_website/widgets/status_bar.dart';

import 'package:flutter/cupertino.dart';
import '../widgets/navigation_bar.dart';

class Layout extends StatelessWidget {


  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Container(
        child: Column(
          children: [
            Expanded(child: Status_Bar()),
            Expanded(child: NavBar_Web())
          ],
        ),
      )
      );
  }
}