import {Component, OnInit} from '@angular/core';

// @ts-ignore

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() {
  }

  toggle: boolean = false;
  center = [43.309930, 76.842222];
  // @ts-ignore
  placeMark = new ymaps.Placemark([43.309930, 76.842222], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'https://img.icons8.com/color/512/region-code.png',
    iconImageSize: [40, 40],
    iconImageOffset: [-20, -40]
  })

  ngOnInit(): void {
    setTimeout(() => {

      this.init();
    }, 250)
  }

  init() {
    // @ts-ignore
    let map = new ymaps.Map('map', {
      center: this.center,
      zoom: 17
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    map.geoObjects.add(this.placeMark);
    // @ts-ignore
    var result = ymaps.geoQuery(ymaps.geocode('Казахстан Алматы Жангельдина 44А'));
    result.then(function () {
      console.log(result)
    }, function () {
      alert('Произошла ошибка.');
    });
  }

  mapNightVision() {
    const style = document.createElement('style');
    style.setAttribute('id', 'ground-pane');
    style.innerHTML = `[class*="ground-pane"] {
      filter: invert(100%);
    }`;
    document.head.appendChild(style);
  }

  mapDayVision() {
    document.getElementById('ground-pane')?.remove();
  }


  changeMapVision() {
    this.toggle ? this.mapNightVision() : this.mapDayVision();
  }
}
