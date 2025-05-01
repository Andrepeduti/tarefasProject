import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
} from '@angular/core';
import { type IUser } from './model/user.interface';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: IUser;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  //select = output<string>() == Uma outra maneira de criar output, o q é mais correto, porém como é mais nova não é muito usada

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onClickUser() {
    this.select.emit(this.user.id);
  }
}
