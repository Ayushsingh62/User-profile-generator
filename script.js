const head = document.querySelector(".head");
const body = document.querySelector("body");






 async function getdata() {

 
 const url = ` https://randomuser.me/api/
   `

   const response = await fetch(url
    );
   const data = await response.json()
  console.log(data, "this is data");

const user= data.results[0]
console.log(user)

  document.querySelector('.userprofile').innerHTML = `
        <img src="${user.picture.medium}" />
        <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
        <p><strong>Gender:</strong> ${user.gender}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>   `;

; }

getdata()