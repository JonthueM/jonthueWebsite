import 'dart:developer';

import 'package:flutter/cupertino.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'time_weather_status.dart';
import 'site_status.dart';
import 'logo.dart';


class Status_Bar extends StatelessWidget {
  const Status_Bar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        site_status(),
        Logo(),
        time_weather_status(),
      ],
    );
  }
}