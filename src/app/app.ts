import { Component, signal } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { LoaderService } from './loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  loading;
  constructor(private loader: LoaderService) {
    this.loading = this.loader.loading$;
  }
  protected readonly title = signal('api-handling');
}
