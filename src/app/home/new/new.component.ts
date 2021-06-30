import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { BaseComponent } from 'src/app/lib/base-component';
import { TinTucService } from 'src/app/lib/tintuc.service';


interface TinTuc{
  maTinTuc: string, 
  tieuDe: string, 
  noiDung: string,
}
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent extends BaseComponent implements OnInit {
  postNewTT: any;
  
  constructor(private _tintucService : TinTucService,
    injector: Injector) { 
      super(injector);
    }
    ngAfterViewInit() { 
      this.loadScripts();
    }

  ngOnInit(): void {
    // this._tintucService
    // .GetAllNewTT()
    // .pipe(first())
    // .subscribe((res)=>{
    //   this.postNewTT=res;
    // });
  }

}
