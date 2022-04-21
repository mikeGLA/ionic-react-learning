const calculateBtn = document.getElementById("calbutton");
const resetBtn = document.getElementById("resetbutton");
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");

const resetInput = () => {
    heightInput.value = "";
    weightInput.value = "";
}

const calculateBMI = () => {
    const enteredHeight = +heightInput.value;
    const enteredWeight = +weightInput.value;

    const bmical = (enteredWeight / (enteredHeight * enteredHeight))*1000; 

    console.log(bmical);   
};

calculateBtn.addEventListener('click', calculateBMI);

resetBtn.addEventListener('click', resetInput);
