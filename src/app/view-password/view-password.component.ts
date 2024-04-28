import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PasswordService } from '../password.service';
import { EncryptionService } from '../encryption.service'; 

@Component({
  selector: 'app-view-password',
  templateUrl: './view-password.component.html',
  styleUrls: ['./view-password.component.scss']
})
export class ViewPasswordComponent implements OnInit {
  passwordData: any;
  decryptedPassword: string | undefined; // Define a property to store decrypted password

  constructor(
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
      const id = +idString; // Get the password ID from route parameters
      this.passwordService.getPasswordById(id)
        .subscribe(
          data => {
            this.passwordData = data;
            console.log('Password retrieved successfully!', this.passwordData);
            
            // Decrypt the password
            this.decryptedPassword = this.encryptionService.decryptText(this.passwordData.encryptedPassword);
          },
          error => {
            console.error('Error fetching password:', error);
            // Handle error, show error message
          }
        );
    } else {
      console.error('Password ID not found in route parameters.');
      // Handle error, show error message
    }
  }
}
