export interface PianoKeyMetadata {
  note: string;
  keyAudio: HTMLAudioElement;
  outtaTuneSource: string;
  inTuneSource: string;
  color: 'black' | 'white';
}
