function hireOrNot(candidates, requisites) {
    let hired = [];
    let requiredSkills = 0;
    for (i = 0; i < candidates.length; i++) {
        for (j = 0; j < candidates[i].Skills.length; j++) {
            for (k = 0; k < requisites.length; k++) {
                if (candidates[i].Skills[j] == requisites[k]) {
                    requiredSkills= requiredSkills+1
                }
            }
        }
        if (requiredSkills >= 3) {
            hired.push(candidates[i].Name)
        }
    }
    return `${hired} are hired.`
}

let preRequisites = ["PHP", "JavaScript", "Ruby", "Python", "Java"];
let Candidates = [{
        Name: "Ali",
        Skills: ["CSS", "Ruby", "Python", "Java"]
    }, {
        Name: "Bli",
        Skills: ["JavaScript"]
    }, {
        Name: "Cli",
        Skills: ["JavaScript", "Ruby", "Python", "Java"]
    },
    {
        Name: "Dli",
        Skills: ["JavaScript", "Ruby", "Java"]
    }
];


//console.log(preRequisites.includes(Candidates.Skills[1]))
console.log(hireOrNot(Candidates, preRequisites))
document.write(hireOrNot(Candidates, preRequisites))