const data = [{
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingFor: "female",
    location: "HalloLolo",
    image: `https://randomuser.me/api/portraits/men/71.jpg`
},
{
    name: "Jen Smith",
    age: 26,
    gender: "female",
    lookingFor: "male",
    location: "HelloLolo",
    image: `https://randomuser.me/api/portraits/women/82.jpg`
},
{
    name: "William Johnson",
    age: 30,
    gender: "male",
    lookingFor: "female",
    location: "HiLolo",
    image: `https://randomuser.me/api/portraits/men/70.jpg`
}
]

const profiles = profileIterator(data)
//Call the first profile
nextProfile()

//Next Event
document.getElementById("next").addEventListener(`click`, nextProfile)

// Event Handler: Display the next Profile
function nextProfile() {
const currentProfile = profiles.next().value;
if (currentProfile !== undefined) {
    document.getElementById(`profileDisplay`).innerHTML = `<ul class="list-group">
<li class="list-group-item">Name: ${currentProfile.name}</li>
<li class="list-group-item">Age: ${currentProfile.age}</li>
<li class="list-group-item">Location: ${currentProfile.location}</li>
<li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
</ul>`

    document.getElementById(`imageDisplay`).innerHTML = `<img src= "${currentProfile.image}">`
} else {
    //No more profiles
    location.reload()
}
}

//Profile Iterator
function profileIterator(profiles) {
let nextIndex = 0;

return {
    next: function () {
        return nextIndex < profiles.length ? {
            value: profiles[nextIndex++],
            done: false
        } : {
            done: true
        }
    }
}
}