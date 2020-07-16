const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();

const ticketsAll = [{
  "id": "123",
  "name": "дддд",
  "status": "TODO",
  "created": "111"
}, {
  "id": "234",
  "name": "дддд",
  "status": "TODO",
  "created": "111"
}];

app.use(koaBody({
  urlencoded: true,
}));

app.use(async ctx => {
  const {
    method
  } = ctx.request.query;
  switch (method) {
    case 'allTickets':
      ctx.response.body = ticketsAll;
      console.log(ticketsAll);
      return;
    case 'ticketById':
      const {
        id
      } = ctx.request.query;
      const result = ticketsAll.filter(tic => tic.id == id);
      ctx.response.body = result;
      return;
    case 'createTicket':
      console.log(ctx.request.body);
      const repeat = ticketsAll.filter(tic => tic.name == ctx.request.body.name);
      let numId = ticketsAll.length;
      let numEr = ticketsAll.filter(tic => tic.id == numId);

      while (numEr.length!=0) {
        numId++;
        numEr = ticketsAll.filter(tic => tic.id == numId);
      };
      if(repeat.length==0){
        ticketsAll.push({"id": numId, "name": `${ctx.request.body.name}`, "status": `${ctx.request.body.status}`, "created": `${ctx.request.body.created}`});
      }
      ctx.response.body = ticketsAll;
      return;
    default:
      ctx.response.body = "<div><form method='POST' action='/?method=createTicket'><input data-id='name' name='name' required><input data-id='status' name='status' required> <input data-id='created' name='created' required><button>Записаться</button></form></div>";
      console.log(ctx.response);
      return;
  }
});
const server = http.createServer(app.callback()).listen(9000);