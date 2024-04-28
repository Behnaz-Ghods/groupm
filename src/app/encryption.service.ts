

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }

  // Encrypt function
  encryptText(text: string): string {
    return btoa(text); // Using btoa() function for Base64 encoding
  }

  // Decrypt function
  decryptText(encryptedText: string): string {
    return atob(encryptedText); // Using atob() function for Base64 decoding
  }
}
