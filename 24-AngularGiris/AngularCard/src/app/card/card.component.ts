import { Component, OnInit, Input } from '@angular/core';

// İkinci aktarma yöntemi
interface Card {
  title : string,
  imageUrl : string,
  username : string,
  content : string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() post : Card = {
    title : "",
    imageUrl : "",
    username : "",
    content : "",
  };

  // İlk aktarma yöntemi
  // @Input() titleChild : string = "";
  // @Input() imageUrlChild : string = "";
  // @Input() usernameChild : string = "";
  // @Input() contentChild : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
