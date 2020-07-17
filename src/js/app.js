import {
  allTickets,
  ticketById,
  createTicket,
  delById,
} from './repo.js';

const table = document.querySelector('table');
const divEdit = document.getElementById('note');
const inputName = document.getElementById('inputName');
const butPlus = document.getElementById('Plus');
const butSave = document.getElementById('butSave');
const butClose = document.getElementById('butClose');


let data = JSON.parse(allTickets());
let coin;
let coinPlus = true;

function edit(but, index) {
  but.addEventListener('click', (e) => {
    e.preventDefault();
    const node = inputName.parentElement.childNodes;
    node[5].innerText = ' ';
    if (divEdit.style.display !== 'block') {
      divEdit.style.display = 'block';
    } else if (divEdit.style.display === 'block' && coin === Number(e.target.getAttribute('num'))) {
      divEdit.style.display = 'none';
    }
    inputName.value = data[index].name;
    butSave.setAttribute('num', data[index].id);
    coin = index;
    coinPlus = true;
  });
}

function add() {
  table.innerHTML = '';
  const trFirst = document.createElement('tr');
  const thN = document.createElement('th');
  const thD = document.createElement('th');
  const thA = document.createElement('th');
  thN.innerHTML = 'Name';
  thN.style.width = '300px';
  thD.innerHTML = 'Date';
  thA.innerHTML = 'Action';
  trFirst.appendChild(thN);
  trFirst.appendChild(thD);
  trFirst.appendChild(thA);
  table.appendChild(trFirst);
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const tr = document.createElement('tr');
    tr.setAttribute('num', index);
    divEdit.setAttribute('num', index);
    table.appendChild(tr);
    const thName = document.createElement('th');
    const thDate = document.createElement('th');
    thName.innerHTML = element.name;
    thDate.innerHTML = element.created;
    tr.appendChild(thName);
    tr.appendChild(thDate);
    const thBut = document.createElement('th');
    tr.appendChild(thBut);
    const butEd = document.createElement('a');
    butEd.classList.add('butEd');
    butEd.innerHTML = '&#9998';
    butEd.setAttribute('num', index);
    thBut.appendChild(butEd);
    const butDel = document.createElement('a');
    butDel.setAttribute('data-id', 'del');
    butDel.classList.add('butDel');
    butDel.setAttribute('num', element.id);
    thBut.appendChild(butDel);
    edit(butEd, index);
    del(butDel);
    discription(thName, element.dis);
  }
}

function discription(but, dis) {
  but.addEventListener('click', () => {
    const trDis = document.createElement('tr');
    trDis.innerHTML = dis;
    if (but.childNodes.length === 1) {
      but.appendChild(trDis);
    } else if (but.childNodes.length === 2) {
      but.removeChild(but.childNodes[1]);
    }
  });
}

function del(but) {
  but.addEventListener('click', (e) => {
    // data.splice(e.target.getAttribute('num'), 1);
    const J = JSON.stringify({
      num: e.target.getAttribute('num'),
    });
    delById(J);
    data = JSON.parse(allTickets());
    add(data);
  });
}

function plus() {
  butPlus.addEventListener('click', (e) => {
    e.preventDefault();
    const node = inputName.parentElement.childNodes;
    node[3].value = ' ';
    node[9].value = ' ';
    if (divEdit.style.display !== 'block') {
      divEdit.style.display = 'block';
    } else if (divEdit.style.display === 'block' && !coinPlus) {
      divEdit.style.display = 'none';
    }
    inputName.value = '';
    coinPlus = false;
  });
}

function close() {
  butClose.addEventListener('click', (e) => {
    e.preventDefault();
    divEdit.style.display = 'none';
  });
}

function save() {
  butSave.addEventListener('click', (e) => {
    e.preventDefault();
    const node = e.target.parentElement.childNodes;
    const d = new Date();
    const date = `${d.toISOString().split('T')[0]} ${d.getHours()}:${d.getMinutes()}`;
    if (!coinPlus) {
      const J = JSON.stringify({
        id: '0',
        name: node[3].value,
        dis: node[9].value,
        status: '0',
        created: date,
      });
      createTicket(J);
      data = JSON.parse(allTickets());
      divEdit.style.display = 'none';
      add(data);
    } else {
      const Js = JSON.stringify({
        num: e.target.getAttribute('num'),
      });
      delById(Js);
      const J = JSON.stringify({
        id: '0',
        name: node[3].value,
        dis: node[9].value,
        status: '0',
        created: date,
      });
      createTicket(J);

      data = JSON.parse(allTickets());
      divEdit.style.display = 'none';
      add(data);
    }
  });
}

add(data);
plus();
close();
save();
