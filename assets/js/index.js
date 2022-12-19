const addButton = document.getElementById('add');
const deleteButton = document.getElementById('delete');
const fillContainerButton = document.getElementById('fill');
const clearContainerButton = document.getElementById('clear');

const mainWrapper = document.getElementById('mainWrapper');
const popupButton = document.getElementById('popupButton');
const popupWindow = document.getElementById('popupWindow');
const popupWindowClose = document.getElementById('popupWindowClose');
const bodyBlock = document.querySelector('body');

addButton.addEventListener('click',makePreload);
popupWindowClose.addEventListener('click',closePopup);
deleteButton.addEventListener('click',deleteLastCard);
fillContainerButton.addEventListener('click',fillContainer);
clearContainerButton.addEventListener('click',clearContainer);

function addCard () {
  const newCard = document.createElement('div');
  newCard.className = 'main__wrapper__card';

  const cardTitle = document.createElement('h2');
  cardTitle.className = 'main__wrapper__card--title';
  cardTitle.innerHTML = "Card title";

  const cardText = document.createElement('p');
  cardText.className = 'main__wrapper__card--text';
  cardText.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deleniti aut maiores natus quasi pariatur ipsa qui? Nesciunt, necessitatibus! Adipisci eveniet aliquid tempore laudantium eos dolorem modi ut totam dolores!";

  const cardButton = document.createElement('button');
  cardButton.className = 'main__wrapper__card--button';
  cardButton.innerHTML = "Delete Card";

  const cardButtonPopup = document.createElement('button');
  cardButtonPopup.className = 'main__wrapper__card--button';
  cardButtonPopup.id = 'popupButton';
  cardButtonPopup.innerHTML = "More content";

  cardButtonPopup.addEventListener('click',() => {
    popupWindow.classList.add('is-active');
  })

  if(newCard) {
    cardButton.addEventListener('click', () => {
      mainWrapper.removeChild(newCard);
    });
  }

  mainWrapper.appendChild(newCard);
  newCard.append(cardTitle,cardText,cardButtonPopup,cardButton);
  createPopup();
}

function createPopup () {
  const newPopupWrapper = document.createElement('div');

  newPopupWrapper.className = 'popup';
  newPopupWrapper.id = 'popupWindow';
  newPopupWrapper.innerHTML = "<div class='popup--text'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deleniti aut maiores natus quasi pariatur ipsa qui?Nesciunt, necessitatibus! Adipisci eveniet aliquid tempore laudantium eos dolorem modi ut totam...Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deleniti aut maiores natus quasi pariatur ipsa qui?Nesciunt, necessitatibus! Adipisci eveniet aliquid tempore laudantium eos dolorem modi ut totam...<button class='main__wrapper__card--button' id='popupWindowClose'>Close</button></div>"

  bodyBlock.append(newPopupWrapper);
}

function makePreload () {
  const preloadBlock = document.createElement('div');
  preloadBlock.className = 'preloader';
  preloadBlock.innerHTML = "<svg class='preloader__image' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'> <path fill='currentColor' d='M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z'></path></svg>"
  mainWrapper.append(preloadBlock);

  setTimeout(() => {
    mainWrapper.removeChild(preloadBlock);
    addCard();
  }, 3000);
}


function deleteLastCard () {
  const allCards = document.querySelectorAll(".main__wrapper__card");
  if (allCards.length === 0) {
    return alert("Nothing to delete")
  } 
  else {
    let last = allCards[allCards.length - 1];
    last.parentNode.removeChild(last);
  }
}

function openPopup () {
  popupWindow.classList.add('is-active');
}

function closePopup () {
  popupWindow.classList.remove('is-active');
}


let interval;
let switchButton = false;

function fillContainer () {
  if(switchButton === false){
    switchButton = true;
    interval = setInterval(() => makePreload(),1000)
    return 
  }

  if(switchButton === true) {
    switchButton = false;
    clearInterval(interval);
  }
}


function clearContainer () {
  const allCardsClear = document.querySelectorAll(".main__wrapper__card");

  for(let i  = 1; i < allCardsClear.length; i++) {
    allCardsClear[i].parentNode.removeChild(allCardsClear[i]);
  }
}

