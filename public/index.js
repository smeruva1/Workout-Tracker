init();

async function init() {
  console.log("----------------------------------");
    console.log("inside index.js init");
    console.log(location.search);
    console.log(location.search.split("=")[1]);
    

  if (location.search.split("=")[1] === undefined) {
    //Means no querystring param in url, so load last workout
    const workout = await API.getLastWorkout();
    if (workout) {
      //if we have last workout, append the id to location.search.
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

