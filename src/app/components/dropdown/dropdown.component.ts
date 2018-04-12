import {Component, ContentChild, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import { IMovie } from '../../interfaces/i-movie';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;
  @Output() public valueChange: EventEmitter<any>;
  @Input() public placeholder: string;
  @Input() public items: IMovie[];
  @Input() public value: IMovie;
  public isShowingItems: boolean;

  constructor() {
    this.isShowingItems = false;
    this.valueChange = new EventEmitter();

  }


  public hideItems(): void {

    this.isShowingItems = false;

  }

  public selectItem(item: any): void {

    this.hideItems();
    this.valueChange.emit(item);

  }

  public showItems(): void {

    this.isShowingItems = true;

  }

  public toggleItems(): void {

    this.isShowingItems
      ? this.hideItems()
      : this.showItems()
    ;

  }

}
