import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SideMenuModel } from './SideMenuModel';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {
  public _data: any[];
  sidebarData: any[];
  filterData: any[];
  @Input() status = true;
  @Input() set sideMenuItems(sideMenuItems: SideMenuModel[]) {
    this._data = sideMenuItems;
    this.filterData = sideMenuItems;
    this.sidebarData = sideMenuItems;
  }
  @Output() onSideMenuItemClicked: EventEmitter<object> = new EventEmitter<object>();
  
  // filtableData = Array.from(this.sideMenuItems);
  constructor() { }
  ngOnInit() {
    
    
  }
  
  ngOnChanges() {
    console.log(this.status, this.sideMenuItems);
  }
  
  onMenuItemClicked(index, item) {
    const clickedItem = {index, item};
    this.onSideMenuItemClicked.emit(clickedItem);
  }
  
  getIconClasses(item) {
    const classes = item.Icon.split(' ');
    return classes;
  }
  filterValue(event) {
    this.filterData = this.sidebarData.filter(x =>
      x.itemName.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
      this._data = this.filterData;
      
    }
  }
  