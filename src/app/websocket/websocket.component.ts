import { Component, OnInit } from '@angular/core';

//use websocket in rxjs way with encapsulated service
//import { EchoService } from "./ws-echo.service";


@Component({
  //selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css'],
  //providers: [EchoService]
})
export class WebsocketComponent implements OnInit {

  ws: WebSocket;
  serverData: any;
  rxjsData: any;
  messageToServer;
  serverClosed: boolean = true;
 // private subscription;

  cxt;

  constructor(
  //  private echoService: EchoService
  ) {

  }

  ngOnInit() {
    var c: any = document.getElementById("myCanvas");
    this.cxt = c.getContext("2d");
    this.cxt.fillStyle = "#FF0000";
    this.cxt.fillRect(0, 0, 20, 10);

    // link and eventlistener in basic way
    //普通连接
    this.ws = new WebSocket('ws://localhost:8080', "echo-protocol")

    this.ws.onopen = (event) => {
      this.ws.send('Hello Server!');
      //this.ws.binaryType="arraybuffer";
      //可将 WebSocket 对象的 binaryType 属性设为“blob”或“arraybuffer”，用来调整接收到的二进制流的类型。
      //默认格式为“blob”（不必在发送时校正 binaryType 参数）。
      this.serverClosed = false;
    }

    this.ws.onmessage = (event) => {
      // if (event.data instanceof String) {
      //   console.log("Received data string");
      // }
      if (event.data instanceof Blob) {
        var blob = event.data;
        var reader = new FileReader();
        reader.addEventListener("loadend", () => {
          var a = reader.result;
        })//通过reader可以把blob转成arraybuffer
        reader.readAsArrayBuffer(blob);    //按arraybuffer处理
        //reader.readAsBinaryString(blob)  //按二进制处理
        //reader.readAsText(blob);         //按字符串处理
        console.log("Received blob");
      }

      if (event.data instanceof ArrayBuffer) {
        var buffer = event.data;
        console.log("Received arraybuffer");
      }
      //普通string数据直接显示
      this.serverData = event.data;
      // 处理数据
    };

    //最简单、不分类别的响应服务器发过来的数据
    // this.ws.onmessage = (event) => {
    //   this.serverData = event.data;
    //   // 处理数据
    // };

    this.ws.onclose = (event) => {
      this.serverData = "the server was closed";
      this.serverClosed = true;
    };

    //-----------------------------------------------------
    //link and data subscribe in rxjs way

    //通过rxjs建立的链接
    // echoService.messages.subscribe(msg => {
    //   console.log("Response from websocket: " + msg);
    //   this.rxjsData = msg;
    // });
    //通过rxjs的subscribe和unsubscribe建立的链接
    // this.subscription = this.echoService.shared.subscribe(msg => { //subscribe to multicast obs.
    //   console.log("Response from websocket: " + msg);
    //   this.rxjsData = msg;
    // });

  }

  ngOnDestroy() {
    //rxjs way to unsubscribe
  //  this.subscription.unsubscribe();
  }


  // methods at basic version
  sendMessage(msg) {
    this.ws.send(msg);
  }
  sendMessageBlob() {
    var file: any = document.querySelector('input[type="file"]');
    var message = file.files[0];

    var reader = new FileReader();
    reader.readAsText(message, "gb2312");
    reader.onload = (e) => {
      var target: any = e.target;
      var fileText = target.result.split("\n");
    }

    this.ws.send(message);
  }

  sendMessageArrayBuffer() {
    // Sending canvas ImageData as ArrayBuffer
    var img = this.cxt.getImageData(0, 0, 20, 10);
    var binary = new Uint8Array(img.data.length);
    var bff: any = binary.buffer;
    for (var i = 0; i < img.data.length; i++) {
      binary[i] = img.data[i];
    }
    this.ws.send(bff);
  }

  closeSocketLink() {
    this.ws.close();
  }

  //--------------------------------------------------------

  // methods at rxjs version
  sendMsg(msg) {
    console.log('new message from client to websocket: ', msg);
    //this.echoService.messages.next(msg);
  }
  closeSocketRxjs() {
   // this.subscription.unsubscribe();
  }
}