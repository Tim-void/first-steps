const btn = document.getElementById('aboutBtn');
const text = document.getElementById('aboutText');

let changed = false;

btn.addEventListener('click', () =>{
    if(changed) {
        text.textContent ='Делаю сайты на HTML,CSS, и Javascript.';
    } else {
        text.textContent = 'Я уже умею работать с DOM';
    }

    changed = !changed;
});

const skillsList = document.getElementById('skills');
const addSkillBtn = document.getElementById('addSkillBtn');
const skillInput = document.getElementById('skillInput');

const skills = ['HTML', 'CSS', 'JavaScript'];

function renderSkills(){
    skillsList.innerHTML = '';

    for (let i = 0; i < skills.length; i++) {
        const li = document.createElement('li');
        li.textContent = skills[i];
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.style.marginLeft = '10px';

        deleteBtn.addEventListener('click', ()=>{
            skills.splice(i, 1);
            renderSkills();
        })

        li.appendChild(deleteBtn);
        skillsList.appendChild(li);
    }
}
renderSkills();

addSkillBtn.addEventListener('click', ()=>{
    const value = skillInput.value.trim();

    if(value === ''){
        return;
    }
    skills.push(value);
    skillInput.value = '';
    renderSkills();
})

















const countE1 = document.getElementById('count')
const batnPL = document.getElementById('plus');
const batnMN = document.getElementById('minus');

let count = 0;

batnPL.addEventListener('click',() =>{
    count = count + 1;
    countE1.textContent = count;
})
batnMN.addEventListener('click', ()=>{
    count = count - 1;
    countE1.textContent = count;
})