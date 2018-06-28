// import { Injectable } from '@angular/core';
// import { Observable, Subject } from 'rxjs/Rx';
// import { WebsocketRxService } from '../websocket-rx.service';

// // const CHAT_URL = 'ws://echo.websocket.org/';
// const CHAT_URL = 'ws://localhost:8080';


// // export interface Message {
// // 	author: string,
// // 	message: string
// // }

// @Injectable()
// export class EchoService {
// 	public messages: Subject<any>;
// 	public shared: Observable<any>;

// 	constructor(wsService: WebsocketRxService) {
// 		this.messages = <Subject<any>>wsService
// 			.connect(CHAT_URL)
// 			.map((response: MessageEvent): any => {
// 				let data = JSON.parse(response.data);
// 				return data;
// 			});

// 		this.shared = this.messages.share(); //multicast(重复使用？)
// 	}
// }