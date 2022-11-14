import {Component, Inject, Input, OnInit} from '@angular/core';
import {delay, interval, Observable, Subject, take} from "rxjs";
import {collection, collectionData, Firestore, query} from "@angular/fire/firestore";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-city-change',
  templateUrl: './city-change.component.html',
  styleUrls: ['./city-change.component.scss']
})
export class CityChangeComponent implements OnInit {
  @Input() selectedCity: string = this.data.selectedCity;
  filterCity: string | any = '';
  cities?: Observable<any[] | null>;
  subject: Subject<any> = new Subject<any>();

  constructor(private firestore: Firestore,
              @Inject(MAT_DIALOG_DATA) private data: { selectedCity: string },
              public dialogRef: MatDialogRef<CityChangeComponent>) {
  }

  private getCities() {
    this.cities = collectionData(
      query(
        collection(this.firestore, `/cities`),
      ), {idField: 'userId'}
    ) as Observable<any[]>;
  }

  ngOnInit(): void {
    console.log(this.selectedCity)
    this.getCities();
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    interval()
      .pipe(
        take(1),
        delay(1200)
      )
      .subscribe(() => {
        this.dialogRef.close(this.selectedCity)
      })
  }
}
