import {Component, Injector, OnInit} from '@angular/core';
import {Context} from '../widgets.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  public context: Context;
  constructor(private injector: Injector) { }

  ngOnInit() {
    this.context =  this.injector.get(Context);
  }

}
