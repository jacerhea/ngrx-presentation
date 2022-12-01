import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from 'src/counter.actions';
import { State } from 'src/counter.reducer';
import { selectCount } from 'src/counter.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  inputCount = 1;
  count$: Observable<number>

  constructor(private store: Store<{ rootState: State }>) {
    this.count$ = store.select(selectCount);
  }

  increment(amount: number) {
    this.store.dispatch(increment({ amount }));
  }

  decrement(amount: number) {
    this.store.dispatch(decrement({ amount }));
  }

  reset() {
    this.store.dispatch(reset());
  }
}
