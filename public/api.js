const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();
    console.log("----------------------------------");
    console.log("inside getLastWorkout");
    console.log(json);
    console.log('================');
    console.log(json[json.length - 1]);
    return json[json.length - 1];
  },
  async addExercise(data) {
    console.log("----------------------------------");
    console.log("inside addExercise");
    console.log(data);
    console.log(JSON.stringify(data));

    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    
    console.log("----------------------------------");
    console.log("inside createWorkout");
    console.log(data);
    console.log(data);
    console.log(JSON.stringify(data));

    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    console.log("----------------------------------");
    console.log("inside getWorkoutsInRange");
    console.log(data);


    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
