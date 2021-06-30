import { Component, OnInit } from '@angular/core';
import { UserService } from '../../lib/user.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';


import { first } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';


declare let alertify: any;

export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return v.password === v.confirmPassword
    ? null
    : {
        passwordnotmatch: true,
      };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user: any;
  hoten: any;
  username: any;
  password: any;
  diachi: any;
  phone: any;
  email: any;
  loaitk: any
  trangthai: any;

  title='Đăng Ký'
  formRegister: FormGroup| any;
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {
      this.loaitk =['User', 'Admin']
    }
    selectedLoai: any;

  ngOnInit(): void {
    this.selectedLoai = 'User';

    this.userService
      .Getloai(this.selectedLoai)
      .pipe(first())
      .subscribe(res => {
        this.user = res;
      })
    this.formRegister = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      hoten: this.fb.control('', [Validators.required]),
      diachi: this.fb.control('', [Validators.required]),
      phone: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required]),
    });
  }
  display: boolean = false;
  addUser() {
    var userRegister = {
      // MaTk: " ",
      // TaiKhoan: this.username,
      // MatKhau: this.password,
      // HoTen: this.hoten,
      // DiaChi: this.diachi,
      // Sdt: this.phone,
      // Email: this.email,
      // LoaiTk: this.selectedLoai,
      // TrangThai: "1",
      MaTk: " ",
      TaiKhoan: this.formRegister.get('username').value,
      MatKhau:  this.formRegister.get('password').value,
      HoTen:  this.formRegister.get('hoten').value,
      DiaChi:  this.formRegister.get('diachi').value,
      Sdt:  this.formRegister.get('phone').value,
      Email:  this.formRegister.get('email').value,
      // // LoaiTk:  this.formRegister.get('username').value,
      // TrangThai: "1",

    }
    this.userService
      .add(userRegister)
      .pipe(first())
      .subscribe({
        next: (res) => {
          if (res > 0) {
            alertify.success("Thêm thành công!");
            this.display = false;
            this.userService
              .Getloai(this.selectedLoai)
              .pipe(first())
              .subscribe(res => {
                this.user = res;
              })
          }
        },
        error: (err) => {
          console.log(err);
          alertify.error("Đã có lỗi");
        },
      });
  }

  clearFormLogin() {
    this.formRegister.reset();
  }
}
