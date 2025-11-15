const trainings = {
  montag: ["Schulterdrücken","Lateral Raises","Front Raises","Overhead Trizeps","Trizeps Pushdown","Dips","Cable Flys","Butterfly"],
  dienstag: ["Deadlifts","Rudern","Latziehen","T Bar Rudern","Reverese Butterfly","Shrugs","Preacher Curls","Hammer Curls"],
  mittwoch: ["Beinpresse","Beinstrecker","Beinbeuger","Wadenheben","Bauch Twists","Bauch Crunches","Leg Raises"],
  donnerstag: ["Rest Day"],
  freitag: ["Preacher Curls","Hammer Curls","Cable Curls","Reverse Curls","Chest Flys","Butterfly","Dips"],
  samstag: ["Rest Day"],
  sonntag: ["Deadlifts","Rudern","T Bar Rudern","Latziehen","Reverse Butterfly","Schulterdrücken","Lateral Raises","Front Raises"],
  health: ["Cardio","Bauch Training","Dehnen","Plyometrics"]
};

function showTraining(){
  const select = document.getElementById("daySelector");
  const day = select.value;
  const output = document.getElementById("trainingOutput");
  output.innerHTML = "";
  if(day && trainings[day]){
    const ul = document.createElement("ul");
    trainings[day].forEach((ex, idx)=>{
      const li = document.createElement("li");
      li.innerHTML = `<span>${ex}</span><span>${idx+1}</span>`;
      ul.appendChild(li);
    });
    output.appendChild(ul);
  }
}
