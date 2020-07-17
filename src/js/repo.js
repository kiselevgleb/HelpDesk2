// const data = [];

// export default data;
export {
  allTickets, ticketById, createTicket, delById,
};

function allTickets() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:7070/?method=allTickets', false);
  xhr.send();
  if (xhr.status !== 200) {
    alert(`${xhr.status}: ${xhr.statusText}`);
  } else {
    return xhr.responseText;
  }
}
function ticketById(id) {
  const url = `http://localhost:7070/?method=ticketById&id=${id}`;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send();
  if (xhr.status !== 200) {
    alert(`${xhr.status}: ${xhr.statusText}`);
  } else {
    return xhr.responseText;
  }
}
function delById(form) {
  const url = 'http://localhost:7070/?method=delById';
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, false);
  xhr.send(form);
  if (xhr.status !== 200) {
    alert(`${xhr.status}: ${xhr.statusText}`);
  } else {
    return xhr.responseText;
  }
}
function createTicket(formData) {
  const url = 'http://localhost:7070/?method=createTicket';
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, false);
  xhr.send(formData);
  if (xhr.status !== 200) {
    alert(`${xhr.status}: ${xhr.statusText}`);
  } else {
    return xhr.responseText;
  }
}
