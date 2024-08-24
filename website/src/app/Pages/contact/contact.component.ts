import { DataSend } from './../../Interface/data-send';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  public isFormCheck: boolean = false;
  public disabledInputs!: any;

  public myForm!: FormGroup;
  constructor(private fb: FormBuilder, private renderer: Renderer2) {
    this.myForm = this.fb.group({
      from_name: ['', [Validators.required, Validators.minLength(2)]],
      to_name: ['Weverton', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.disabledInputs = localStorage.getItem('formValid');
    if (this.disabledInputs == 'true') {
      this.myForm.disable();
    }
  }

  sendEmail() {
    if (this.myForm.valid) {
      const data: DataSend = this.myForm.value;
      // emailjs.init('R4-AERDn4Hg4JNTdg');
      // let response = await emailjs.send('service_dknxng4', 'template_rkdztah', {
      //   from_name: this.myForm.value.from_name,
      //   to_name: this.myForm.value.to_name,
      //   from_email: this.myForm.value.from_email,
      //   message: this.myForm.value.message,
      // });

      this.isFormCheck = true;
      localStorage.setItem('formValid', JSON.stringify(this.isFormCheck));
      

      setTimeout(() => {
        this.isFormCheck = false;
      }, 5000);

      this.myForm.reset();

    } else {
      alert('Algum erro inesperado aconteceu, mas já irei ajustar!');
    }
  }
}
