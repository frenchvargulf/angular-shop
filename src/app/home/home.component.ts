import { Component, OnInit } from '@angular/core';  
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';

@Component({  
	selector: 'app-home',  
	templateUrl: './home.component.html',  
	styleUrls: ['./home.component.css']  
})  

export class HomeComponent implements OnInit {
  products = [];
  
  constructor(private apiService: ApiService) { }

  public firstPage() {
    this.products = [];
    this.apiService.sendGetRequestToUrl(this.apiService.first)
    // .pipe(takeUntil(this.destroy$))
    .subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.products = res.body;
    })
  }
  public previousPage() {

    if (this.apiService.prev !== undefined && this.apiService.prev !== '') {
      this.products = [];
      this.apiService.sendGetRequestToUrl(this.apiService.prev)
      // .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
      })
    }

  }
  public nextPage() {
    if (this.apiService.next !== undefined && this.apiService.next !== '') {
      this.products = [];
      this.apiService.sendGetRequestToUrl(this.apiService.next)
      // .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
      })
    }
  }
  public lastPage() {
    this.products = [];
    this.apiService.sendGetRequestToUrl(this.apiService.last)
    // .pipe(takeUntil(this.destroy$))
    .subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.products = res.body;
    })
  }
  
	ngOnInit() {

		// this.apiService.get().subscribe((data: any[])=>{  
		// 	console.log(data);  
		// 	this.products = data;  
    // })
    
    this.apiService.sendGetRequest()
      // .pipe( takeUntil(this.destroy$) )
      .subscribe((res: HttpResponse<any>)=>{  
        console.log(res);  
        this.products = res.body;  
    })  
      
    
	}
}