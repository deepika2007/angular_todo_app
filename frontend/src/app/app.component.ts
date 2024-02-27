import { Component, EventEmitter, Output } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private apiModule: AppService) {}

  todoText: string = '';
  todos = [] as { title: string; _id: string; completed: boolean }[];

  @Output()
  todoTextChanges: EventEmitter<string> = new EventEmitter<string>();

  getTodos() {
    this.apiModule.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  ngOnInit() {
    this.getTodos();
  }

  addTodo(inputEL: HTMLInputElement) {
    this.todoText = inputEL.value;
    this.apiModule.addTodo(this.todoText).subscribe((result) => {
      if (result) {
        this.todoText = '';
        this.getTodos();
      }
    });
    this.todoTextChanges.emit(this.todoText);
  }

  deleteTodo(id: string) {
    this.apiModule.deleteTodo(id).subscribe((result) => {
      if (result) {
        this.getTodos();
      }
    });
  }

  updateStatus(todo: { title: string; completed: boolean; _id: string }) {
    const payload = { ...todo, completed: !todo.completed };
    this.apiModule.updateTodo(todo._id, payload).subscribe((result) => {
      if (result) {
        this.getTodos();
      }
    });
  }

  setReminder(id: string) {
    console.log('----id----', id);
  }
}
