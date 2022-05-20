import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: any = {
    username: '',
    password: ''

  }
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toHome(){

    if(this.credentials.username == 'mark' && this.credentials.password == 'mark'){
      this.router.navigate(['home'])
    } else{
      alert('wrong username and password')
    }
  }

}
