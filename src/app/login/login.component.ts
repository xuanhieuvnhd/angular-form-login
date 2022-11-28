import {Component, OnInit} from '@angular/core';
import {Account} from "./account";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor() {
  }

  ngOnInit(): void {
  }

  accounts: Account[] = [{
    account: "admin",
    password: "admin"
  }]

  loginForm = new FormGroup({
    account: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)]),
  })

  check() {
    // @ts-ignore
    if (this.account?.value == this.accounts[0].account & this.password?.value == this.accounts[0].password) {
      alert('Đăng nhập thành công')
    } else {
      alert('Tài khoản hoặc mật khẩu không đúng')
    }
  }

  get account() {
    return this.loginForm.get('account')
  }

  get password() {
    return this.loginForm.get('password')
  }

}
