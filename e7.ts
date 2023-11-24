// ----- SOLUTION -----
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-user-form",
  template: `
    <form [formGroup]="userForm" (ngSubmit)="doSubmit()">
      <input type="text" placeholder="email" />
      <input type="text" placeholder="name" />
      <input type="date" placeholder="birthday" />
      <input type="number" placeholder="zip" />
      <input type="text" placeholder="city" />
      <button type="submit">Submit</button>
    </form>
  `,
})
export class AppUserForm {
  @Output()
  event = new EventEmitter<{
    email: string;
    name: string;
    birthday: Date;
    address: { zip: number; city: string };
  }>();
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      email: "",
      name: "",
      birthday: "",
      address: this.formBuilder.group({
        zip: "",
        city: "",
      }),
    });
  }

  doSubmit(): void {
    this.event.emit(this.userForm.value);
  }
}
