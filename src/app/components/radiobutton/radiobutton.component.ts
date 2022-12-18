import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonService } from '../../common.service';
import { FieldConfig } from '../../field.interface';
@Component({
  selector: 'app-radiobutton',
  template: `
<div class="demo-full-width margin-top" [formGroup]="group">
<label class="radio-label-padding">{{field.label}}:</label>
<mat-radio-group [formControlName]="field.name">
<mat-radio-button *ngFor="let item of field.options" [value]="item" (click)="changeValue()">{{item}}</mat-radio-button>
</mat-radio-group>
</div>
`,
  styles: [],
})
export class RadiobuttonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor(private cs: CommonService) {}
  ngOnInit() {}
  changeValue() {
    this.cs.selectedFormControl$.next(this.field);
  }
}
