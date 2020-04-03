
//get last workout
async function initWorkout() {
  
  console.log("-----------workout.js-----------------------");
  console.log("-----------inside initWorkout");
  console.log("-----------inside initWorkout ---calling getLastWorkout from api.js--- ");
  

  const lastWorkout = await API.getLastWorkout();
  console.log("-------after await API.getLastWorkout()");
  console.log("-------this did not get executed onload, after line 10 it went into index.js");

  console.log("Last workout:", lastWorkout);
  if (lastWorkout) {
    //add the id to "continue workout"
    document
      .querySelector("a[href='/exercise?']")
      .setAttribute("href", `/exercise?id=${lastWorkout._id}`);

      console.log("-----------inside initWorkout ---calling tallyExercises--- ");
    const workoutSummary = {
      date: formatDate(lastWorkout.day),
      //totalDuration: lastWorkout.totalDuration,
      numExercises: lastWorkout.exercises.length,
      ...tallyExercises(lastWorkout.exercises)
    };

    console.log("-----------inside initWorkout ---calling renderWorkoutSummary--- ");
    renderWorkoutSummary(workoutSummary);
  } else {
    console.log("-----------inside initWorkout ---calling renderNoWorkoutText--- ");
    renderNoWorkoutText()
  }
}

function tallyExercises(exercises) {

  console.log("-----------workout.js-----------------------");
  console.log("-----------inside tallyExercises");
  

  const tallied = exercises.reduce((acc, curr) => {
    if (curr.type === "resistance") {
      acc.totalWeight = (acc.totalWeight || 0) + curr.weight;
      acc.totalSets = (acc.totalSets || 0) + curr.sets;
      acc.totalReps = (acc.totalReps || 0) + curr.reps;
      //totalDuration: lastWorkout.totalDuration,
      acc.totalDuration = (acc.totalDuration || 0) + curr.duration;
    } else if (curr.type === "cardio") {
      acc.totalDistance = (acc.totalDistance || 0) + curr.distance;
      acc.totalDuration = (acc.totalDuration || 0) + curr.duration;
    }
    return acc;
  }, {});
  return tallied;
}

function formatDate(date) {
  
  console.log("-----------workout.js-----------------------");
  console.log("-----------inside formatDate");
  
  
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return new Date(date).toLocaleDateString(options);
}

function renderWorkoutSummary(summary) {
  const container = document.querySelector(".workout-stats");

  console.log("-----------workout.js-----------------------");
  console.log("-----------inside renderWorkoutSummary");
  

  const workoutKeyMap = {
    date: "Date",
    totalDuration: "Total Workout Duration",
    numExercises: "Exercises Performed",
    totalWeight: "Total Weight Lifted",
    totalSets: "Total Sets Performed",
    totalReps: "Total Reps Performed",
    totalDistance: "Total Distance Covered"
  };

  Object.keys(summary).forEach(key => {
    const p = document.createElement("p");
    const strong = document.createElement("strong");

    strong.textContent = workoutKeyMap[key];
    const textNode = document.createTextNode(`: ${summary[key]}`);

    p.appendChild(strong);
    p.appendChild(textNode);

    container.appendChild(p);
  });
}

function renderNoWorkoutText() {

  console.log("-----------workout.js-----------------------");
  console.log("-----------inside renderNoWorkoutText");
  
  const container = document.querySelector(".workout-stats");
  const p = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = "You have not created a workout yet!"

  p.appendChild(strong);
  container.appendChild(p);
}

initWorkout();
