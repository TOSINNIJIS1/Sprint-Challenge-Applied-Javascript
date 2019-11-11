// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component



const content = document.querySelector('.header-container');
content.appendChild(Header());

function Header() {
    const hHeader = document.createElement('div');
    const date = document.createElement('span');
    const anotherHeader = document.createElement('h1');
    const temperature = document.createElement('span');

    hHeader.classList.add('header');
    hHeader.classList.add('date');
    hHeader.classList.add('temp');

    hHeader.appendChild(date);
    hHeader.appendChild(anotherHeader);
    hHeader.appendChild(temperature);

    date.textContent = 'MARCH 28, 2019';
    anotherHeader.textContent = 'Lambda Times';
    temperature.textContent = '98°';


    return hHeader;
}
