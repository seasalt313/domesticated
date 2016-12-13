
function init(){

  //selecting the element using query selector
  let add_new = document.querySelector("#add_new");
  let i = 0;


    //function upon clicking the element
    add_new.addEventListener('click', function(){

      //create a new list item
      let new_user = document.createElement("li");

      //add image
      let pic = document.createElement("img");
      pic.src = people[i].image;


      new_user.appendChild(pic);
      console.log("img is added");

      // Creating the h2/name
      let name = document.createElement("h2");
      new_user.appendChild(name);
      name.textContent = "Cool person"
      console.log("h2 is done");

      // Creating the like button
      let likebtn = document.createElement("button");
      new_user.appendChild(likebtn);
      likebtn.textContent = "Like"
      console.log("like button added");

        //Clicking like results logging in console
        likebtn.addEventListener("click", function(){
          console.log("Likes " + name.textContent);
            let likedlist = document.createElement("ul");
            let likedpeeps = document.createElement("li");
            likedlist.appendChild(likedpeeps);
            likedpeeps.textContent = name.textContent;
            console.log(likedpeeps);
          new_user.className = "fade_like";
        })

      // Creating the Nope button
      let nopebtn = document.createElement("button");
      new_user.appendChild(nopebtn);
      nopebtn.textContent = "Nope"
      console.log("nope button added");

        //Clicking Nope results in logging in console
        nopebtn.addEventListener('click', function(){
          console.log("This user has been noped");
          new_user.className = "fade_nope";
        })

      //the parent element is the ul
      let parent = document.querySelector("#list");
      parent.appendChild(new_user);
      console.log("clicked");

      i++;
})
}


      let people = [
      { name: "Tyrion", image: "https://randomuser.me/api/portraits/men/3.jpg"},
      { name: "Jaime", image: "https://randomuser.me/api/portraits/men/90.jpg"},
      { name: "Mickey", image: "https://randomuser.me/api/portraits/men/23.jpg"},
      { name: "Mike", image: "https://randomuser.me/api/portraits/men/13.jpg"},
      { name: "Goofy", image: "https://randomuser.me/api/portraits/men/14.jpg"},
      { name: "Trevor Noah", image: "https://randomuser.me/api/portraits/men/16.jpg"},
      { name: "Colbert", image: "https://randomuser.me/api/portraits/men/90.jpg"},
      { name: "Joe", image: "https://randomuser.me/api/portraits/men/69.jpg"}
      ]

window.addEventListener('load', init);
