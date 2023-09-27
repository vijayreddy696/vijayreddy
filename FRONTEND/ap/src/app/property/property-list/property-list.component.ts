import { Component,OnInit } from '@angular/core';
import { HousingService } from 'src/app/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{

  Properties:any = [];
  constructor(public housingservice:HousingService){}
  ngOnInit(): void {
    this.housingservice.get_properties().subscribe(data=>{
      this.Properties = data;
      console.log(data);
    })
  }


}
