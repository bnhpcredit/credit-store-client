import {BehaviorSubject, Observable, Subject} from 'rxjs';

export class StateSubject<U> {
  private readonly _value$: Subject<U>;
  private _value: U;

  constructor(initData?: U) {
    this._value$ = initData ? new Subject() : new BehaviorSubject<U>(initData);
    this._value = initData;
  }

  get value$(): Observable<U> {
    return this._value$.asObservable();
  }

  get value(): U {
    return this._value;
  }

  update(data?: U) {
    const newData = data !== undefined ? data : this._value;
    this._value = newData;
    this._value$.next(newData);
  }

  complete() {
    this._value$.complete();
  }
}
