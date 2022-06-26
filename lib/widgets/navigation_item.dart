import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';

class NavItem extends StatelessWidget {

final String title;

const NavItem({required this.title});

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: Padding(padding: const EdgeInsets.symmetric(horizontal: 50.0),
      child: Text(
        title.toUpperCase(),
        style: GoogleFonts.raleway(fontSize: 24,color: Colors.white ), 
      ),
      ),
    );
  }
}