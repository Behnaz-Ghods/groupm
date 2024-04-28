import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordService } from '../password.service';
import { EncryptionService } from '../encryption.service';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.scss']
})
export class EditPasswordComponent implements OnInit {
  id: number = 0;
  category: string = '';
  app: string = '';
  userName: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passwordService: PasswordService,
    private encryptionService: EncryptionService
  ) {}

  ngOnInit(): void {
    this.getPassword();
  }

  getPassword(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
      this.id = +idString;
      this.passwordService.getPasswordById(this.id)
        .subscribe(
          data => {
            this.category = data.category;
            this.app = data.app;
            this.userName = data.userName;
            this.password = this.encryptionService.decryptText(data.encryptedPassword);
            console.log('Password retrieved successfully!', data, this.password);
          },
          error => {
            console.error('Error fetching password:', error);
            // Handle error, show error message, etc.
            
          }
          );
    } else {
      console.error('Password ID not found in route parameters.');
      // Handle error, show error message
    }
  }

  onSubmit(): void {
    const passwordData = {
      id: this.id,
      category: this.category,
      app: this.app,
      userName: this.userName,
      encryptedPassword: this.encryptionService.encryptText(this.password)
    };

    this.passwordService.updatePassword(passwordData)
      .subscribe(
        response => {
          console.log('Password updated successfully!', response);
          // Handle success, redirect to password list or navigate to view password
          this.router.navigate(['/passwords']);
        },
        error => {
          console.error('Error updating password:', error);
          // Handle error, show error message
        }
      );
  }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
