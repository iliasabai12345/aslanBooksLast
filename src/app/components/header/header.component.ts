import {Component, OnInit} from '@angular/core';
import {CityChangeComponent} from "../../modals/city-change/city-change.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  city: string = 'Алматы';
  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openCityChangeModal(): void {
    const dialogRef = this.dialog.open(CityChangeComponent, {
      width: '400px',
      height: '700px',
      data: {selectedCity: this.city},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.length)
        this.city = result;
    });
  }
}
