// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent {
//     currentUser: any = {
//       name: "",
//       email: "",
//       mobile: "",
//       password: ""
//     };
//     user_records: any[] = [];
    
//     constructor() {
//       // Retrieve registered users from localStorage
//       const storedUsers = localStorage.getItem('users');
//       this.user_records = storedUsers ? JSON.parse(storedUsers) : [];
      
//       // Add the current user to the user_records array
//       this.user_records.push(this.currentUser);
//     }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    user_records: any[] = [];
    
    constructor() {
      // Retrieve registered users from localStorage
      const storedUsers = localStorage.getItem('users');
      this.user_records = storedUsers ? JSON.parse(storedUsers) : [];
    }
}
