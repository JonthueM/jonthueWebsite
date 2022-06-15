
import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';
import 'package:chewie/chewie.dart';



class shell extends StatefulWidget {
  const shell({Key? key}) : super(key: key);

  @override
  State<shell> createState() => _shellState();
}

class _shellState extends State<shell> {
  final VideoPlayerController videoPlayerController = 
    VideoPlayerController.asset("assets/video.mp4");

    ChewieController? chewieController;

  
  @override
  void iniState(){
    chewieController = ChewieController(
      videoPlayerController: videoPlayerController,
      aspectRatio: 9 / 20,
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
    return Expanded(
      child: Chewie(
        controller: chewieController!,
        ),
      );
  }

_getBackgroundColor(){
  return Container(
    color: Colors.blue.withAlpha(120),
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
