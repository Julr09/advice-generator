import { Component, OnInit } from '@angular/core';
import { AdviceServiceService } from "./Services/advice-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  advice!: string
  id!: number

  constructor(private readonly adviceService: AdviceServiceService) {}

  ngOnInit() {
    this.adviceService.getAdvice()
      .subscribe(res => {
        this.advice = res.slip.advice;
        this.id = res.slip.id
      })
  }

  newAdvice() {
    this.ngOnInit();
  }
}
