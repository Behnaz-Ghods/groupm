import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../password.service';
import { EncryptionService } from '../encryption.service';
import { Password } from '../password.model';

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.scss']
})
export class PasswordListComponent implements OnInit {
  passwords: Password[] = [];
  decryptedPassword: string | undefined; 

  constructor(
    private passwordService: PasswordService,
    private encryptionService: EncryptionService 
  ) {}

  ngOnInit(): void {
    this.getPasswords();
  }

  getPasswords(): void {
    this.passwordService.getPasswords()
      .subscribe(passwords => {
        this.passwords = passwords;
        // Decrypt passwords before displaying
        this.passwords.forEach(password => {
          password.decryptedPassword = this.encryptionService.decryptText(password.encryptedPassword);
        });
      });
  }
}
