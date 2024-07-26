// for observables - remember to npm install rxjs
import { Subject } from 'rxjs';
// import { Message } from './interfaces/message';
const subject = new Subject();
export const messageService = {
    // for TS we MUST use () with a type
    sendMessage: (message) => subject.next({ text:message }), // renders twice in dev mode
    // clearMessages: () => subject.next(), // this shows code language problem
    clearMessages: () => subject.next(null),
    onMessage: () => subject.asObservable()
}