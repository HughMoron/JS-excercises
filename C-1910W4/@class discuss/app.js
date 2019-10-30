let preRequisites = ["PHP", "JavaScript", "Ruby", "Python", "Java"];
let Candidates = [{
        Name: "Ali",
        Skills: ["CSS", "Ruby", "Python", "Java"]
    }, {
        Name: "Bli",
        Skills: ["PHP", "JavaScript"]
    }, {
        Name: "Cli",
        Skills: ["JavaScript", "Ruby", "Python", "Java"]
    },
    {
        Name: "Dli",
        Skills: ["JavaScript", "Ruby", "Java"]
    }
];
let hired = [];

function hireOrNot(candidates, requisites) {
    for (i = 0; i < candidates.length; i++) {
        for (j = 0; j < candidates[i].Skills.length; j++) {
            
            for (k = 0; k < requisites.length; k++) {
                let requiredSkills = 0;
                if (requisites[k].includes(candidates[i].Skills[j])) {
                    requiredSkills++
                }
                if (requiredSkills >= 3) {
                    hired.push(candidates[i].Name)
                }
            }
        }
    }
    return `The hired people are ${hired}.`
}
//console.log(preRequisites.includes(Candidates.Skills[1]))
console.log(hireOrNot(Candidates, preRequisites))
document.write(hireOrNot(Candidates, preRequisites))