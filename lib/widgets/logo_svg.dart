import 'package:flutter/cupertino.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter_svg/flutter_svg.dart';


class Logo_SVG extends StatelessWidget {


  @override
  Widget build(BuildContext context) {
    return Container( 
        child: 
          SvgPicture.asset(
            'assets/logo.svg'
          )
        ,
    );
    
  }
}