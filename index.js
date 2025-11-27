const form = document.getElementById('infoForm');

form.addEventListener("submit", function(e){
    e.preventDefault();

    //Get the values from the form 
    const empName = document.getElementById('name').value.trim();
    const empDesig = document.getElementById('designation').value.trim();
    const empNum = document.getElementById('number').value.trim();
    const empPhoto = document.getElementById('photo').value.trim();
    const empMob = document.getElementById('mob').value.trim();
    const empEmail = document.getElementById('email').value.trim();

    // Basic validation (optional)
    // if (!empName || !empDesig || !empNum || !empPhoto || empMob || empEmail) {
    //     alert('Please fill all fields.');
    //     return;
    // }
    if(!empName){
        alert("Please fill the name field");
        return;
    }
    else if(!empDesig){
         alert("Please fill the Designation field");
         return;
    }
    else if(!empNum){
         alert("Please fill the Employee Number field");
         return;
    }
    else if(!empPhoto){
         alert("Please fill the Photo field");
         return;
    }
    else if(!empMob){
         alert("Please fill the Mobile Number field");
         return;
    }
    else if(!empEmail){
        alert("Please fill the Email field");
        return;
    }

    // Redirect to card.html WITH data
    const url = `card.html?name=${encodeURIComponent(empName)}&desig=${encodeURIComponent(empDesig)}&num=${encodeURIComponent(empNum)}&photo=${encodeURIComponent(empPhoto)}&mob=${encodeURIComponent(empMob)}&email=${encodeURIComponent(empEmail)}`;

    window.location.href = url;

    form.reset();
});