import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('refContent') refContent: ElementRef;
  //@ViewChild(TestComponent) testComponentRef: TestComponent;
  @ViewChildren(TestComponent) testComponentRefs: QueryList<TestComponent>;
  constructor(){

  }
  ngAfterViewInit(): void {
    console.log(this.testComponentRefs.toArray());
    this.testComponentRefs.forEach(function(obj){
      console.log(obj.num);
    })
    // setTimeout(() => {
    //   this.testComponentRefs.num*=2;
    // }, 3000);
  }

  ngOnInit():void{

  }
}