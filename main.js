const campground = [
    {
        name: "Banff National Park",
        description: "Located in the Canadian Rockies in Alberta, Banff is Canada’s oldest national park, famous for its stunning turquoise lakes and mountainous landscapes.",
        image: "https://cdn.pixabay.com/photo/2019/09/01/01/06/lake-4444255_1280.jpg",
        location: "Canada",
        price: 30,
        rating: 0
    },
    {
        name: "Kruger National Park",
        description: "One of Africa’s largest game reserves, Kruger National Park is renowned for its incredible wildlife diversity.",
        image: "https://cdn.pixabay.com/photo/2017/08/22/09/23/elephant-2668246_1280.jpg",
        location: "South Africa",
        price: 45,
        rating: 0
    },
    {
        name: "Fiordland National Park",
        description: "This New Zealand park is famous for its dramatic fjords, steep mountains, and lush rainforests.",
        image: "https://cdn.pixabay.com/photo/2019/03/02/00/18/island-4028988_640.jpg",
        location: "New Zealand",
        price: 25,
        rating: 0
    }
];



const result = document.querySelector('.result');
campground.forEach((campground) => {
    result.innerHTML += `
        <div class="row mb-3 border border-dark p-12"> 
            <div class="col-5 col-lg-12"> 
                <img class="img-fluid" src="${campground.image}" alt="${campground.name}">
            </div>
            <div class="col-lg-7 col-12 text-center d-flex flex-column g-3 justify-content-center">
                <h3> ${campground.name}, ${campground.price} $</h3>
                <p>${campground.description}</p>
                <button class="myBtn btn btn-success btn-lg"> RATE !
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                </button>
            </div>
        </div>`;
});

const ratingBtns = document.querySelectorAll('.myBtn');
ratingBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log('clicked');
    });
});


