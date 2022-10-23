import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  BtnState: number = 1;
  BtnText: string[] = ["stop","start"];

  timeCategory = [
    {name: "Pomodoro", defaultMin: 55, defaultSec: "0" + 0, id: 0},
    {name: "Short Break", defaultMin: 5, defaultSec: "0" + 0, id: 1},
    {name: "Long Break", defaultMin: 15, defaultSec: "0" + 0, id: 2}
  ]

  automaticPlaybackBreaks = false;
  playbackBreaksCount = 1;
  activeCategory: number = 0;
  timer: any;
  min: any = 55;
  sec: any = "0" + 0;

  someAction(value: boolean): void {
    this.automaticPlaybackBreaks = value;
  }

  ChangeTimeCategory(type: number): void {
    this.activeCategory = this.timeCategory[type].id;
    this.ResetTime();
    this.clear();
    this.BtnState = 1;
  }

  ChangeBreaksCount(value: number): void {
    this.playbackBreaksCount = value;
    console.log(value)
  }

  SwitchBtnState(): void {
    if(this.BtnState){
      this.start();
    }else{
      this.clear();
    }
    this.BtnState = +!this.BtnState;
  }

  start(): void{
    this.timer = setInterval(() =>{
      this.sec--;
      if(this.sec == -1){
        if(this.min == 0){
          this.sec = 0;
          if(this.automaticPlaybackBreaks && this.playbackBreaksCount){
            if(this.activeCategory != 0){
              this.playbackBreaksCount--;
              this.activeCategory = 0;
            }else{
              this.activeCategory = 1;
            }
            this.ResetTime();
            this.BtnState = 0;
          }else{
            this.clear();
          }
        }else{
          this.min--;
          this.sec = 5;
        }
      }
      this.sec < 10 ? this.sec = "0" + +this.sec : this.sec;
      this.min < 10 ? this.min = '0' + +this.min : this.min;
    },1000)
  }

  ResetTime(): void {
    this.min = this.timeCategory[this.activeCategory].defaultMin;
    this.sec = this.timeCategory[this.activeCategory].defaultSec;
    this.sec < 10 ? this.sec = "0" + +this.sec : this.sec;
    this.min < 10 ? this.min = '0' + +this.min : this.min;
    this.BtnState = 1;
  }

  clear(): void {
    clearInterval(this.timer);
  }

  constructor() { }

  ngOnInit(): void {
    this.ResetTime();
    console.log(typeof this.timeCategory)
  }

}
