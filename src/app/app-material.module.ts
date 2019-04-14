import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatCardModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
  ]
})
export class AppMaterialModule { }
