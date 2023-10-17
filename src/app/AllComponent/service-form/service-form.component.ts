import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit{
  ngOnInit(): void {
    this.updateDataToShow();
  }

  ServiceFormComponent(){}

  SID:any = 0;
  SName:any = "name";
  BuyRate:any = 0.00;
  Category:any ='';
  MasterCategory:any = '';

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  Service=[
    {id:101,name:'Napa',BuyRate:2.00,Category:"Category1",Master_Category:"MasterCategory1"},
    {id:102,name:'Paracitamol',BuyRate:1.05,Category:"Category2",Master_Category:"MasterCategory2"},
    {id:103,name:'Omeprazole',BuyRate:10.00,Category:"Category3",Master_Category:"MasterCategory3"},
    {id:104,name:'Esomeprazole',BuyRate:15.00,Category:"Category4",Master_Category:"MasterCategory4"},
    {id:105,name:'Pantoprazole',BuyRate:20.00,Category:"Category5",Master_Category:"MasterCategory5"},
    {id:106,name:'Ranitidine',BuyRate:25.00,Category:"Category6",Master_Category:"MasterCategory6"},
    {id:107,name:'Rabeprazole',BuyRate:12.00,Category:"Category7",Master_Category:"MasterCategory7"},
    {id:108,name:'Antacid',BuyRate:2.00,Category:"Category8",Master_Category:"MasterCategory8"},
  ]
  dataToShow:any[] = [];
  itemsPerPage: number = 4;
  currentPage: number = 1; 
  totalPages: number = 0;
  

  SearchData:any;

  applyFilter(SearchData:any) {
    SearchData = SearchData.toLowerCase();
    this.dataToShow = this.Service.filter(item => item.name.toLowerCase().includes(SearchData));        
  }
  
  onClick(i:any){
  this.SID = this.dataToShow[i].id
  this.SName = this.dataToShow[i].name
  this.BuyRate = this.dataToShow[i].BuyRate
  this.Category = this.dataToShow[i].Category
  this.MasterCategory = this.dataToShow[i].Master_Category
  this.SearchData = ''
  this.visible = false 
  }

  updateDataToShow() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.dataToShow = this.Service.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(this.Service.length / this.itemsPerPage);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDataToShow();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDataToShow();
    }
}

}
