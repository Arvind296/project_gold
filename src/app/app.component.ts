import { Component, OnInit } from '@angular/core';
import { AntSpinnerService } from './common/ant-spinner/ant-spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'project_gold';

  constructor(private loaderService: AntSpinnerService) {}


  ngOnInit(): void {
    this.loaderService.show();
    // Perform data loading logic here
    setTimeout(() => {
      this.loaderService.hide();
    }, 5000);

    window.addEventListener('beforeunload', () => {
      localStorage.clear(); // Clear local storage when user leaves the page
    });
    window.addEventListener('popstate', () => {
      localStorage.clear(); // Clear local storage when user navigates using back/forward button
    });
  }

}
