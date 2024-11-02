import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { datFake } from '../../data/dataFake';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {


  photoCover: string = 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/08/the-crow-reboot-poster.jpg'
  contentTitle: string = 'NOVO REMAKE DE O CORVO'
  description: string = " "
  private id: string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id"))
      this.setValuesToComponent(this.id)



  }

  setValuesToComponent(id:string | null) {
    const result = datFake.filter(article => article.id.toString() == id)[0]
   
   this.contentTitle = result.title
   this.description = result.description
   this.photoCover = result.photoCover


    
  }

}
