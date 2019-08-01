import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typedisease',
  templateUrl: './typedisease.page.html',
  styleUrls: ['./typedisease.page.scss'],
})
export class TypediseasePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gofood(){
    this.router.navigateByUrl('/typefood');
  }
}
