for(i = 25; i>0; i-=5){
    console.log(i);
}

const instructions = ["Remove the plastic wrapper", "Microwave 45 seconds", "Let cool", "Enjoy!",];
const steps = ["Step 1 -", "Step 2 -", "Step 3 -", "Step 4 -",]

for (let i = 0; i<instructions.length; i++) {
    console.log(steps[i], instructions[i]);
}