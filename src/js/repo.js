// const data = [];

// export default data;
export {
  allTickets, ticketById, createTicket, delById,
};

function allTickets() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://kiselevgleb.github.io/HelpDesk-backEnd/?method=allTickets', false);
  xhr.send();
  if (xhr.status !== 200) {
    alert(`${xhr.status}: ${xhr.statusText}`);
  } else {
    return xhr.responseText;
  }
}
function ticketById(id) {
  const url = `https://kiselevgleb.github.io/HelpDesk-backEnd/?method=ticketById&id=${id}`;
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
  const url = 'https://kiselevgleb.github.io/HelpDesk-backEnd/?method=delById';
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
  const url = 'https://kiselevgleb.github.io/HelpDesk-backEnd/?method=createTicket';
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, false);
  xhr.send(formData);
  if (xhr.status !== 200) {
    alert(`${xhr.status}: ${xhr.statusText}`);
  } else {
    return xhr.responseText;
  }
}
