// ----- EXERCISE -----
@Component({
  selector: "app-users",
  template: `
    <input
      type="text"
      [(ngModel)]="query"
      (ngModelChange)="querySubject.next($event)"
    />
    <div *ngFor="let user of users">
      {{ user.email }}
    </div>
  `,
})
export class AppUsers implements OnInit {
  query = "";
  querySubject = new Subject<string>();

  users: { email: string }[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    concat(of(this.query), this.querySubject.asObservable())
      .pipe(
        concatMap((q) => timer(0, 60000).pipe(this.userService.findUsers(q)))
      )
      .subscribe({
        next: (res) => (this.users = res),
      });
  }
}

// ----- SOLUTION -----

// Comming from React and without knowing Angular but the basics
// I see that ngOnInit  could lead into a memory leak
// I don't know how to apply the code but the idea would be to
// destroy when unmounting the component or unsuscribe from the observable
