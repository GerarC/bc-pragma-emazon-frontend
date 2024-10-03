import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-atom',
  templateUrl: './input-atom.component.html',
  styleUrls: ['./input-atom.component.scss']
})
export class InputAtomComponent implements OnInit {
	
	styles:string = '';
	disabled: string = '';
	labelStyles = '';

	@Input() size: string = 'm';
	@Input() state: string = 'default';
	@Input() type: string = '';
	@Input() placeholder: string = '';
	@Input() label: string = '';
 
  constructor() { }

  ngOnInit(): void {
	  this.styles = `input-size-${this.size} input-state-${this.state}`;
	  if(this.state === 'disabled') this.disabled = this.state;
	  if(this.label !== '') this.labelStyles = `label-size-${this.size}`;
  }

}
