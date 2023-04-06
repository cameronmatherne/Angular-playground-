import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';


@Component({
  selector: 'note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  @Input()
  course: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() {
  }
  ngOnInit() {
  }

  onCourseViewed() {
    console.log("Card component - button clicked ...");

    this.courseSelected.emit(this.course);



  }
}
