import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  videos;
  listCards;
  cardClick = false;

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.videoService.getVideos().subscribe(videos => (this.videos = videos));
  }

  setColor(status) {
    if (status === 'INCLUÍDO PELO SERVIDOR') {
      return '#fffdc9';
    } else if (status === 'INCLUÍDO PELA DEF-4') {
      return '#cdf1cd';
    } else if (status === 'EXCLUÍDO PELO SERVIDOR') {
      return '#ffc6c6';
    } else if (status === 'EXCLUÍDO PELA DEF-4') {
      return '#ffa3a4';
    } else if (status === 'INCLUÍDO PELO SERVIDOR/EXCLUÍDO PELA DEF-4') {
      return '#ffa3a4';
    } else if (status === 'EXCLUÍDO PELO SERVIDOR/INCLUÍDO PELA DEF-4') {
      return '#cdf1cd';
    }
  }

  onClickCard() {
    return true;
  }
}
