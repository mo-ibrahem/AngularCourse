import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelect = new EventEmitter<string>();
  onSelect(feature: string){
    console.log(feature);
    this.featureSelect.emit(feature);
  }
}
