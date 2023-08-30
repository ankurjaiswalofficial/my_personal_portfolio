let skillsArray = [
    ["90%", "Python", "Self"],
    ["80%", "Django", "Django Docs"],
    ["100%", "CSV (lib)", "Self"],
    ["65%", "NumPy (lib)", "Self"],
    ["80%", "Matplotlib (lib)", "Self"],
    ["85%", "Pandas (lib)", "Self"],
    ["95%", "HTML", "MDN Web Docs"],
    ["90%", "CSS", "MDN Web Docs"],
    ["90%", "SCSS", "Self"],
    ["70%", "JavaScript", "MDN Web Docs"],
    ["75%", "React", "React Docs"],
    ["50%", "C & C++", "Self"],
    ["60%", "Java", "Self"],
];

function manipulateSkills(skillsArray) {
    let skill_box = document.getElementById("skill_box");
    let insertion_data = ``;
    skillsArray.forEach((e) => {
        let skill_experience_box = `
        <div class="experience ui_box">
            <div class="box_header_1">${e[0]}</div>
            <div class="box_header_1 light">${e[1]}</div>
            <div class="box_header_1 box_header_2">
                ${e[2]}
            </div>
        </div>
        `;
        insertion_data = insertion_data + skill_experience_box;
    });
    skill_box.innerHTML = insertion_data;
}

let awardsArray = [
    ["10th December 2022", "Game Of Codes", "AKTU"],
    ["28th April 2022", "SDG - Hackathaon", "IILM University"],
];

function manipulateAwards(awardsArray) {
    let awards_box = document.getElementById("awards_box");
    let insertion_data_awards = ``;
    awardsArray.forEach((e) => {
        let awards_experience_box = `
        <div class="experience ui_box">
            <div class="box_header_1">${e[0]}</div>
            <div class="box_header_1 light">${e[1]}</div>
            <div class="box_header_1 box_header_2">
                ${e[2]}
            </div>
        </div>
        `;
        insertion_data_awards = insertion_data_awards + awards_experience_box;
    });
    awards_box.innerHTML = insertion_data_awards;
}

manipulateAwards(awardsArray);
manipulateSkills(skillsArray);
