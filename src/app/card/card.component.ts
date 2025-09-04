import { Component } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {


  data : Card[] = [
    new Card(1,'https://i.gzn.jp/img/2022/03/29/ai-generated-faces-marketing-tactic-linkedin/00.jpg','Parth Gohel', 'parthgohel806@gmail.com', 1234567890, 21),
    new Card(2,'https://cgfaces.com/collection/preview/e736cbc2-5359-4f54-a94a-b668fbd9e93a.jpg','Jenish Gohel', 'jenishgohel@gmail.com', 3479462962, 19),
    new Card(3,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXS_zvyXHWbnG_SPDSfAFqvfKzrXLA4a7DFJiQMExTJS8fKPZxcPHdiEyto5GPl7Y8u0&usqp=CAU','Shubham Mandaliya', 'shubhammandaliya@gmail.com', 5867096807, 25),
    new Card(4,'https://cgfaces.com/collection/preview/28067fe4-8996-4475-945d-89572c792fc4.jpg','Yash Kotadiya', 'yashkotadiya@gmail.com', 5867029607, 30)
  ]


  editingCard: Card | null = null;

  editCard(card: Card) {
    this.editingCard = { ...card };
  }

  saveCard() {
    if (this.editingCard) {
      const index = this.data.findIndex(card => card.id === this.editingCard?.id);
      if (index !== -1) {
        this.data[index] = this.editingCard;
      }
      this.editingCard = null;
    }
  }

  deleteCard(id: number) {
    this.data = this.data.filter(card => card.id !== id);
  }
}
