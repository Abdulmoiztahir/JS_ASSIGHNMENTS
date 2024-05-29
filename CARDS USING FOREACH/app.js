

var list = document.getElementById("list");
var places = [
    {
        name: "Karachi",
        title: "the city of lights",
        areas: ["mazar e quaid", "kababjees everywhere"],
        desc: "",
        image: "https://images.unsplash.com/photo-1606511490662-b2c5be7d95a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBha2lzdGFufGVufDB8fDB8fHww",
    },
    {
        name: "Islamabad",
        title: "Burgers ka sheher",
        areas: ["Faisal masjid", "Cantaurus mall"],
        image: "https://images.unsplash.com/photo-1608020932658-d0e19a69580b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBha2lzdGFufGVufDB8fDB8fHww",
    },
    {
        name: "Lahore",
        title: "Lahore Lahore he",
        areas: ["Badshahi masjid", "Lahore fort"],
        image: "https://images.unsplash.com/photo-1603491656337-3b491147917c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBha2lzdGFufGVufDB8fDB8fHww",
    },
    {
        name: "Multan",
        title: "Sohan halwa",
        areas: ["Tomb of Shah Rukn-e-Alam", "Ghanta ghar"],
        image: "https://images.unsplash.com/photo-1600434890250-44df6e4c0d05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFraXN0YW58ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Hunza",
        title: "Barfeele pahar",
        areas: ["Hunza valley", "Altit fort"],
        image: "https://images.unsplash.com/photo-1514558427911-8e293bebf18c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFraXN0YW58ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Mansehra",
        title: "JUCIY HUTA HAI",
        areas: ["Lughmani Hill View Point", "Global family park"],
        image: "https://images.unsplash.com/photo-1550586678-f7225f03c44b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFraXN0YW58ZW58MHx8MHx8fDA%3D",
    },
    
];

places.forEach(function (data, ind) {
    var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
<div class="flex relative h-[250px]">
<img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
            data.image
        }">
<div  id=${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
<h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
            data.name
        }</h2>
<h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
            data.title
        }</h1>
<p class="leading-relaxed">${data.areas.join(" , ")}</p>
<p class="leading-relaxed">${data.desc} </p>
<button onclick="updateDesc(this)" class="update">Update</button>
<button onclick="deleteItem(this)" class="delete-btn">Delete</button>
</div>
</div>
</div>`;
    list.innerHTML += ele;
});

function updateDesc(ele) {
    var index = ele.parentElement.id;
    places[index].desc = prompt("Description");
    renderList();
}

function deleteItem(ele) {
    var index = ele.parentElement.id;
    places.splice(index, 1);
    renderList();
}

function renderList() {
    list.innerHTML = "";
    places.forEach(function (data, ind) {
        var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4" >
<div class="flex relative h-[250px]">
<img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
                data.image
            }">
<div id=${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
  <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
                data.name
            }</h2>
  <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
                data.title
            }</h1>
  <p class="leading-relaxed">${data.areas.join(" , ")}</p>
  <p class="leading-relaxed">${data.desc} </p>
  <button onclick="updateDesc(this)" class="update">Update</button>
  <button onclick="deleteItem(this)" class="delete-btn">Delete</button>
</div>
</div>
</div>`;
        list.innerHTML += ele;
    });
}
 