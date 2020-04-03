init();

async function init() {
  console.log("----------------------------------");
  console.log("inside index.js init");
  console.log(location.search);
  console.log(location.search.split("=")[1]);


  if (location.search.split("=")[1] === undefined) {
    //Means no querystring param in url, so load last workout

    console.log("-----------index.js-----------------------");
    console.log("-----------inside init---calling getLastWorkout from api.js---");

    const workout = await API.getLastWorkout();
    
    console.log("-----------index.js-----------------------");
    console.log("-----------inside init---after calling getLastWorkout from api.js---");

    
    if (workout) {
      //if we have last workout, append the id to location.search.
      console.log("-----------index.js-----------------------");
      console.log("-----------if workout is true---");
  
      location.search = "?id=" + workout._id;
    } else {
      console.log("-----------index.js-----------------------");
      console.log("-----------if workout is false---");
  
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

