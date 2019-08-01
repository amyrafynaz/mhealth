import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.page.html',
  styleUrls: ['./diseases.page.scss'],
})
export class DiseasesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  go(){
    this.router.navigateByUrl('/typedisease');
  }
}
