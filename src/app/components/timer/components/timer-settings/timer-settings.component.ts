import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-timer-settings',
  templateUrl: './timer-settings.component.html',
  styleUrls: ['./timer-settings.component.scss']
})
export class TimerSettingsComponent implements OnInit {

  @Input() timeCategory: any;
  @Output() custName = new EventEmitter();
  @Output() custName2 = new EventEmitter<boolean>();
  @Output() BreaksCount = new EventEmitter<number>();
  playbackBreaksCount: number = 1;
  automaticPlaybackBreaks: boolean = false;

  constructor() { }

  onInput(event: any, id: number): void {
    if(event.target.value == ""){
      this.timeCategory[id].defaultMin = 0;
    }else{
      this.timeCategory[id].defaultMin = event.target.value;
      if(this.timeCategory[id].defaultMin < 0){
        this.timeCategory[id].defaultMin = 0;
      }
    }
    this.custName.emit();
  }

  OnPlaybackBreaksCountChange(event: any): void {
    this.playbackBreaksCount = event.target.value;
    if(this.playbackBreaksCount < 1){
      this.playbackBreaksCount = 1;
    }
    this.BreaksCount.emit(this.playbackBreaksCount);
  }

  ngOnInit(): void {
  }

}
