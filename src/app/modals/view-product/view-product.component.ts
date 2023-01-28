import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { imgurl: string },
    public dialogRef: MatDialogRef<ViewProductComponent>) {
  }

  @Input() img: string = this.data.imgurl;

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
