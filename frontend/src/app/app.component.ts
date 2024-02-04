import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  todoText: string = '';

  todos = [
    { index: 1, text: 'test1' },
    { index: 2, text: 'test2' },
    { index: 3, text: 'test3' },
    { index: 4, text: 'test4' },
    { index: 5, text: 'test5' },
    { index: 6, text: 'test6' },
    { index: 7, text: 'test7' },
    { index: 8, text: 'test8' },
    { index: 9, text: 'test9' },
    { index: 10, text: 'test10' },
    { index: 11, text: 'test11' },
  ];

  @Output()
  todoTextChanges: EventEmitter<string> = new EventEmitter<string>();

  addTodo(inputEL: HTMLInputElement) {
    this.todoText = inputEL.value;
    this.todoTextChanges.emit(this.todoText);
  }
}
