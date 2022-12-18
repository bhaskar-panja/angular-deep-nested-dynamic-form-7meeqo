import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { CommonService } from '../../common.service';
@Component({
  selector: "app-select",
  template: `

<ng-container >
  <mat-form-field class="demo-full-width margin-top" [formGroup]="group">
    <mat-select [placeholder]="field.label" [formControlName]="field.name">
      <mat-option *ngFor="let item of field.options" [value]="item">{{item}}</mat-option>
    </mat-select>
  </mat-form-field>
</ng-container>

`,
  styles: []
})
export class SelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  selectedFormControl: any;
  constructor(private cs: CommonService) {}
  ngOnInit() {
    console.log(this.field);
    this.cs.selectedFormControl$.subscribe((x)=>{
      console.log('----selectedFormControl---');
      console.log(this.field.name);
      console.log(x);
      if (x)
        this.selectedFormControl = x;
    });
  }
}
