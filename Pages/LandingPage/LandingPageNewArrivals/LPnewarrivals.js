function LPNEWARRIVALS() {
    const NEWARRIVALITEMSCONTAINER=document.querySelector('.new-arrivals-container');

    fetch('/Pages/LandingPage/LandingPageNewArrivals/LPnewarrivals.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            //creating a div to hold featured imgs
            const NEWARRIVALITEMSDIV = document.createElement('div');
            NEWARRIVALITEMSDIV.classList.add('new-arrivals');
            NEWARRIVALITEMSCONTAINER.append(NEWARRIVALITEMSDIV);

        });
    })
    .catch(error => console.log(error));
}