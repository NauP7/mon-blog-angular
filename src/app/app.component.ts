import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts = [
    {
      title: 'Mon premier post',
      content: 'Adventicium provincialium cum in mox in itinera ora in adnexam pascebantur viatorum viatorum nihil ibique.',
      loveIts: -3,
      created_at: '12/06/18, 11:00 AM'
    },
    {
      title: 'Mon deuxième post',
      content: 'Semper depono homini meorum censuerim causa rei Quid causa petenda tandem consiliis factis homini me.',
      loveIts: 3,
      created_at: '12/06/18, 11:00 AM'
    },
    {
      title: 'Un autre post',
      content: 'Eiusdem eiusdem dum cuius criminum textum sunt indicatum ita pater est regale cuius quo occulte.',
      loveIts: 0,
      created_at: '12/06/18, 11:00 AM'
    }
  ];
}
