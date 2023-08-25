import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-darktheme',
  templateUrl: './darktheme.component.html',
  styleUrls: ['./darktheme.component.css']
})
export class DarkthemeComponent {
  @Input() theme!: string;
  @Input() changeTheme!: (newTheme: string) => void;

}
