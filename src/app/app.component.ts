import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HomeManelDominguezComponent}  from "./home-manel-dominguez/home-manel-dominguez.component";

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule,HomeManelDominguezComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenUF4';
}
