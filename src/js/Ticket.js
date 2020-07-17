export default class Ticket {
  constructor(id, name, status, created) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.created = created;
  }

  // static allTickets (d, callback = f => f) {
  //   console.log(d);
  //   return createRequest({
  //     url: this.HOST + this.URL + '/login',
  //     data: d.data,
  //     method: 'POST',
  //     responseType: 'json',
  //     callback: (err, response) => {
  //       if (response) {
  //         console.log("777");
  //         console.log(response.user);
  //         User.setCurrent(response.user);
  //         console.log(this.current());
  //       } 
  //       callback(err, response);
  //     }
  //   });
  // }

  // static ticketById (d, callback = f => f) {
  //   console.log(d);
  //   return createRequest({
  //     url: this.HOST + this.URL + '/login',
  //     data: d.data,
  //     method: 'POST',
  //     responseType: 'json',
  //     callback: (err, response) => {
  //       if (response) {
  //         console.log("777");
  //         console.log(response.user);
  //         User.setCurrent(response.user);
  //         console.log(this.current());
  //       } 
  //       callback(err, response);
  //     }
  //   });
  // }

  // static createTicket (d, callback = f => f) {
  //   console.log(d);
  //   return createRequest({
  //     url: this.HOST + this.URL + '/login',
  //     data: d.data,
  //     method: 'POST',
  //     responseType: 'json',
  //     callback: (err, response) => {
  //       if (response) {
  //         console.log("777");
  //         console.log(response.user);
  //         User.setCurrent(response.user);
  //         console.log(this.current());
  //       } 
  //       callback(err, response);
  //     }
  //   });
  // }
}