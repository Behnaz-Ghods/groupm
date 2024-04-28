import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordService } from '../password.service';

@Component({
  selector: 'app-delete-password',
  templateUrl: './delete-password.component.html',
  styleUrls: ['./delete-password.component.scss'],
})
export class DeletePasswordComponent implements OnInit {
  id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private passwordService: PasswordService
  ) {}
  //get id from url
  public ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
      this.id = +idString;
    }
  }

  public onDelete(): void {
    if (
      this.id !== null &&
      confirm(`Are you sure you want to delete ${this.id} password?`)
    ) {
      this.passwordService.deletePassword(this.id).subscribe(
        () => {
          console.log('Password deleted successfully!');
          // Handle success, redirect to password list
          this.router.navigate(['/passwords']);
        },
        (error) => {
          console.error('Error deleting password:', error);
          // Handle error, show error message
        }
      );
    }
  }
}