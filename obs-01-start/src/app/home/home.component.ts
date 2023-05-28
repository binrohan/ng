import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Observable, Observer, Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    // const customIntervalObs = Observable.create(observer => {
    //   let count = 0;
    //   setInterval(()=>{
    //     observer.next(count);
    //     count++;
    //   }, 1000);
    // });

    const customIntervalObs = new Observable((observer: Observer<number>) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        if (count == 2) {
          observer.complete();
        }

        if (count > 3) {
          observer.error(new Error("Count is greater than 3!"));
        }

        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObs
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return "Round " + data;
        }),
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error: Error) => {
          alert(error.message);
        },
        () => {
          console.log("Completed!");
        }
      );
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
