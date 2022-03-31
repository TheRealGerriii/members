/*
* File: member.component.ts.java
* Author: Hermányi Gergely
* Copyright: 2021, Hermányi Gergely
* Group: Szoft II/N
* Date: 2022-03-31
* Github: https://github.com/therealgerriii
* Licenc: GNU GPL
*/
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  memberForm = new FormGroup( {
    name: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
    this.memberForm = new FormGroup({
      name: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('' , Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  saveMember() {
    alert(
      'Név: ' + this.memberForm.value.name + '\n' + 
      'Település:' + this.memberForm.value.city + '\n' +
      'Cím:' + this.memberForm.value.address + '\n' +
      'E-mail:' + this.memberForm.value.email

      );
  }

}
