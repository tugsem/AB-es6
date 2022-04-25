const booksContainer = document.querySelector('.books-container');
const contSection = document.querySelector('.contSection');
const formSection = document.querySelector('.add-books');

const navigator = () => {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'listLink') {
      booksContainer.style.display = 'flex';
      contSection.style.display = 'none';
      formSection.style.display = 'none';
    } else if (e.target.id === 'formLink') {
      formSection.style.display = 'flex';
      contSection.style.display = 'none';
      booksContainer.style.display = 'none';
    } else if (e.target.id === 'contactLink') {
      formSection.style.display = 'none';
      contSection.style.display = 'flex';
      booksContainer.style.display = 'none';
    }
  });
};

export default navigator;