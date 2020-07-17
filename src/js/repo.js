// const data = [];

// export default data;
export {allTickets, ticketById, createTicket, delById};

function allTickets() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:9000/?method=allTickets', false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        return xhr.responseText;
    }
}
function ticketById(id) {
    let url = 'http://localhost:9000/?method=ticketById&id='+id;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        return xhr.responseText;
    }
}
function delById(form) {
    let url = 'http://localhost:9000/?method=delById';
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, false);
    xhr.send(form);
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        return xhr.responseText;
    }
}
function createTicket(formData) {
        let url = 'http://localhost:9000/?method=createTicket';
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, false);
    xhr.send(formData);
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {
        return xhr.responseText;
    }
}