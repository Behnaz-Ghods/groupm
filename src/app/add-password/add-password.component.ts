import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EncryptionService } from '../encryption.service';
import { PasswordService } from '../password.service';

@Component({
  selector: 'app-add-password',
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.scss']
})
export class AddPasswordComponent {
  category: string = '';
  app: string = '';
  userName: string = '';
  password: string = '';
  showPassword: boolean = false; // Variable to toggle password visibility

  constructor(
    private router: Router,
    private encryptionService: EncryptionService,
    private passwordService: PasswordService // Inject PasswordService
  ) {}

  public onSubmit(): void {
    const passwordData = {
      category: this.category,
      app: this.app,
      userName: this.userName,
      encryptedPassword: this.encryptionService.encryptText(this.password)
    };

    // Call the PasswordService to add the password
    this.passwordService.addPassword(passwordData).subscribe({
      next: () => {
        console.log('Password added successfully');
        // Redirect to the list of passwords after successfully adding the password
        this.router.navigate(['/passwords']);
      },
      error: (error) => {
        console.error('Error adding password:', error);
        // Handle error (e.g., display error message to user)
      }
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
