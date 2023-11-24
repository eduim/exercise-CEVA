// ----- EXERCISE -----
@Component({
  selector: "app-users",
  template: `
    <div *ngFor="let user of users">
      {{ getCapitalizeFirstWord(user.name) }}
    </div>
  `,
})
export class AppUsers {
  @Input()
  users: { name: string }[];

  constructor() {}

  getCapitalizeFirstWord(name: string): string {
    return name
      .split(" ")
      .map(
        (n) => n.substring(0, 1).toUpperCase() + n.substring(1).toLowerCase()
      )
      .join(" ");
  }
}

// ----- SOLUTION -----
// we can  use trackby  to reduce the number of calls your application makes to the server by tracking changes to an item list
@Component({
  selector: "app-users",
  template: `
    <div *ngFor="let user of users; trackBy: trackByItems">
      {{ getCapitalizeFirstWord(user.name) }}
    </div>
  `,
})
export class AppUsers {
  @Input()
  users: { name: string }[];
  private memoizedNames: { [name: string]: string } = {};

  constructor() {}

  getCapitalizeFirstWord(name: string): string {
    return name
      .split(" ")
      .map(
        (n) => n.substring(0, 1).toUpperCase() + n.substring(1).toLowerCase()
      )
      .join(" ");
  }
}
