import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {environment} from "../environments/environment";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translateService: TranslateService,
              private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const content = document.getElementById('content');
        content && content.scrollTo({top: 0, behavior: 'smooth'})
      }

      if (event instanceof NavigationEnd) {
        window.scrollTo({top: 400, behavior: 'smooth'})
      }
    })
  }

  ngOnInit(): void {
    this.translateService.use(environment.defaultLocale);
  }
}
