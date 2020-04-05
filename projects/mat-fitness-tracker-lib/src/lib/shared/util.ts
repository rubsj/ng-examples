import { Observable, defer, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';

/**
 * If you want specific, contextual loading indication without explicitly flipping the loading flag,
 *  you could do that using RxJS operators.
 * Since RxJS 6 it's possible to define your own operators in form of pure functions.
 * Firstly, we'll have an operator which invokes a callback upon subscription.
 * This can be done using the RxJS method defer:
 *
 * @param callback - the callback function which sets the loading indicator
 */
export function loaderPrepareOperator<T>(callback: () => void): (source: Observable<T>) => Observable<T> {
    return (source: Observable<T>): Observable<T> => defer(() => {
        callback();
        return source;
    });
}

/**
 * Now we create another operator accepting a subject as our sink for the loading state. Using our newly created
 * loaderPrepareOperator operator,
 * we'll update this subject upon subscription to the actual source stream via indicator.next(true).
 * Similarly, we use the finalize operator to inform it about the loading being completed via
 * indicator.next(false):
 */
export function loaderIndicateOperator<T>(indicator: Subject<boolean>): (source: Observable<T>) => Observable<T> {
    return (source: Observable<T>): Observable<T> => source.pipe(
        loaderPrepareOperator(() => indicator.next(true)),
        finalize(() => indicator.next(false))
    );
}

