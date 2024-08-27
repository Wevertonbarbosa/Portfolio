import { DataSend } from './../../Interface/data-send';
import {
  Component,
  OnInit,
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
  public checkSpinner: boolean = false;

  public myForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      from_name: ['', [Validators.required, Validators.minLength(2)]],
      to_name: ['Weverton', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.disabledInputs = sessionStorage.getItem('formValid');
    if (this.disabledInputs == 'true') {
      this.myForm.disable();
    }
  }

  async sendEmail() {
    if (this.myForm.valid) {
      const data: DataSend = this.myForm.value;
      emailjs.init('R4-AERDn4Hg4JNTdg');
      try {
        this.checkSpinner = true;
        let response = await emailjs.send(
          'service_dknxng4',
          'template_rkdztah',
          {
            from_name: this.myForm.value.from_name,
            to_name: this.myForm.value.to_name,
            from_email: this.myForm.value.from_email,
            message: this.myForm.value.message,
          }
        );

        this.isFormCheck = true;
        sessionStorage.setItem('formValid', JSON.stringify(this.isFormCheck));

        setTimeout(() => {
          this.isFormCheck = false;
        }, 5000);

        this.myForm.disable();
        this.myForm.reset();
      } catch (error) {
        alert('Erro no post do email, breve ajuste!');
        console.log(error);
      } finally {
        this.checkSpinner = false;
      }
    } else {
      alert('Algum erro inesperado aconteceu, breve ajuste!');
    }
  }
}
