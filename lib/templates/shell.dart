
import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';
import 'package:chewie/chewie.dart';



class Shell extends StatefulWidget {
  @override
  _ShellState createState() => _ShellState();
}

class _ShellState extends State<Shell> {
  
  final VideoPlayerController videoPlayerController = 
    VideoPlayerController.asset("assets/video.mp4");

    ChewieController? chewieController;

  
  @override
  void initState(){
    chewieController = ChewieController(
      videoPlayerController: videoPlayerController,
      aspectRatio: 16 / 9,
      autoPlay: true,
      looping: true,
      autoInitialize: true,
      showControls: false,
      );
      super.initState();
  }
  @override
  void dispose(){
    videoPlayerController.dispose();
    chewieController!.dispose();
    super.dispose();
  }

  
  _getVideoBackground() {
    return Container(
      child: Chewie(
        controller: chewieController!,
        ),
      );
  }

_getBackgroundColor(){
  return Container(
    color: Color.fromARGB(228, 19, 18, 18),
  );
}


  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child: Stack(
          children: <Widget>[
            _getVideoBackground(),
            _getBackgroundColor(),
          ],
        ),
      ),
    );
  }
}
