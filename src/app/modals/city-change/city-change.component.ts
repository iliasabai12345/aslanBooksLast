import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-city-change',
  templateUrl: './city-change.component.html',
  styleUrls: ['./city-change.component.scss']
})
export class CityChangeComponent implements OnInit {
  @Input() selectedCity: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  getCity = [
      "Алматы",
      "Астана",
      "Шыкмент",
      "Актобе",
      "Караганда",
      "Тараз",
      "Павлодар",
      "Семей",
      "Усть-Каменогорск",
      "Кызылорда",
      "Уральск",
      "Костанай",
      "Атырау",
      "Петропавловск",
      "Актау",
      "Темиртау",
      "Кокшетау",
      "Туркестан",
      "Экибастуз",
      "Талдыкорган",
      "Рудный",
      "Жанаозен"
    ]
}
