import {Component, OnInit} from '@angular/core';
import {CityChangeComponent} from "../../modals/city-change/city-change.component";
import {MatDialog} from "@angular/material/dialog";
import {SignUpComponent} from "../../modals/sign-up/sign-up.component";
import {UserService} from "../../shared/services/user.service";
import {SignInComponent} from "../../modals/sign-in/sign-in.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  city: string = 'Алматы';
  constructor(public dialog: MatDialog,
              private userService: UserService) {
  }

  ngOnInit(): void {
  }

  get userName() {
    return this.userService.getUser()?.displayName;
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

  openSignUpModal(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '400px',
      height: '350px',
      data: {selectedCity: this.city},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.length)
        this.city = result;
    });
  }

  signIn() {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '400px',
      height: '250px',
      data: {selectedCity: this.city},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.length)
        this.city = result;
    });
  }
}
