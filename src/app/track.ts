export class ITrack {
  trackName: string;
  trackArtist: string;
  trackComments: string;
  trackImage: string;
  exists: boolean;

  constructor(trackName: string, trackArtist: string, trackComments: string, trackImage: string) {
    this.trackName = trackName;
    this.trackArtist = trackArtist;
    this.trackComments = trackComments;
    this.trackImage = trackImage;
  }
}
