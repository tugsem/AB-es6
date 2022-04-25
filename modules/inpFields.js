const inpFields = document.querySelectorAll('.inp');

const clearWhenClick = () => {
  inpFields.forEach((inp) => {
    inp.onclick = () => {
      inp.value = '';
    };
  });
};

export default clearWhenClick;