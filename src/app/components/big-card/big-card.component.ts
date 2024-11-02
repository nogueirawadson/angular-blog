import { Component, Input, OnInit } from '@angular/core';
import { RouterLink} from '@angular/router';
import { ContentComponent } from '../../pages/content/content.component';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink, ContentComponent],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

@Input()
photoCover:string = ""
@Input()
cardTitle:string = ""
@Input()
cardDescription:string =""
@Input()
Id:string= ""

  constructor(){
  }
  ngOnInit(): void {
   
  }

}
