import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postForm!: FormGroup;  // Ensure postForm is defined using the `!` operator for strict mode

  ngOnInit() {
    // Initialize the form
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      content: new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      console.log(this.postForm.value);
      // Handle the form submission here
    }
  }
}
