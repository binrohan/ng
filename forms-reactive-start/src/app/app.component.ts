import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { CustomValidators } from "./custom-validators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  // genders = ["male", "female"];
  // signupForm: FormGroup;
  // forbiddenUsernames = ["Fucker", "Pussy"];
  formSubmitted = false;
  projectForm: FormGroup;

  ngOnInit(): void {
    // this.signupForm = new FormGroup({
    //   userData: new FormGroup({
    //     username: new FormControl(null, [
    //       Validators.required,
    //       this.forbiddenNamesValidator.bind(this),
    //     ]),
    //     email: new FormControl(
    //       null,
    //       [Validators.required, Validators.email],
    //       this.forbiddenEmail
    //     ),
    //   }),
    //   gender: new FormControl("male"),
    //   hobbies: new FormArray([]),
    // });

    //// this.signupForm.valueChanges.subscribe((value) => {
    ////   console.log(value);
    //// });

    // this.signupForm.statusChanges.subscribe((status) => {console.log(status)});

    // this.signupForm.setValue({
    //   'userData': {
    //     'username': 'Rohan',
    //     'email': 'max@mail.com'
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // });

    // this.signupForm.patchValue({
    //   'userData': {
    //     'username': 'Anna'
    //   }
    // });

    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl("critical"),
    });

    this.projectForm.valueChanges.subscribe((value) => {
      console.log(this.projectForm);
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
    this.projectForm.reset({ projectStatus: "critical" });
  }

  forbiddenNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test") {
          return resolve({ nameIsForbidden: true });
        } else {
          return null;
        }
      }, 2000);
    });

    return promise;
  }

  // onAddHobby() {
  //   const control = new FormControl(null, Validators.required);

  //   (<FormArray>this.signupForm.get("hobbies")).push(control);
  // }

  forbiddenEmailValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === "test@test.com") {
      return { emailIsForbidden: true };
    }

    return null;
  }

  // forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === "test@test.com") {
  //         resolve({ emailIsForbidden: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1200);
  //   });

  //   return promise;
  // }
}
