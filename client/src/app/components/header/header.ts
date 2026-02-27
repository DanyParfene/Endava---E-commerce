import { Component } from '@angular/core';
import { RedirectButton } from '../redirect-button/redirect-button';

@Component({
  selector: 'app-header',
  imports: [RedirectButton],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
