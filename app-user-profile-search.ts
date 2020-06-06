import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-user-profile-search',
  templateHtml: '<div class="container">
        <ul>
            <li *ngFor="let foodItem of itemValue">{{ foodItem }}</li>
        </ul>
    </div>',
  styleUrls: ['./user-profile-search.component.css'],
  changeDetection : ChangeDetectionStrategy.Default
})

export class UserProfileSearchComponent implements OnInit {

  @Input() itemValue; //value from another component

 constructor(private cd: ChangeDetectorRef) { }
 
 ngOnInit(): void {
  }
  
}
