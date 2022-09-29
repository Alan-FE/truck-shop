import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../service/account.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  userName: string = '';

  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {

  }

  logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/'])
  };

  isLogged() {
    if(this.authService.loggedUser) {
      this.router.navigate(['/ad']);
    } else {
      this.router.navigate(['login']);
    }
  }

}
