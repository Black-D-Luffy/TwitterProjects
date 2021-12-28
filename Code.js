//Récuperer les variables
const showMoreInfoButtons = document.querySelectorAll(".activeButton");
const additionnalInfo = document.querySelectorAll(".table-container__content--addInfo");


//Functions

showMoreInfoButtons.forEach((button, idx1) => {
    // console.log(button, idx1);
    button.addEventListener("click", () => {
        additionnalInfo.forEach((info, idx2) => {
            if (idx1 === idx2) {
                info.classList.toggle("active");
            }
            
        });
    });
})

// const showMoreInfo = () => {
//     additionnalInfo.forEach((info) => {
//         console.log(info);
//     });
// };
