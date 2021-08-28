import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() title: string;
  ngOnInit(): void {
  }
  goTo(location: string) {
    console.log(location);
    this.router.navigateByUrl(location);
  }

}
