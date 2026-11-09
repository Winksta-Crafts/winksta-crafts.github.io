function LANDINGPAGECOLLECTIONS() {
    const LPCOLLECTION =document.querySelector('.landingpagecollection');

    fetch('/Pages/LandingPage/LPcollections/LPcollection.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            //creating a div to hold landing page collections
            const LPCOLLECTIONDIVHOLDER = document.createElement('div');
            LPCOLLECTIONDIVHOLDER.classList.add('LP-collectionholder');
            LPCOLLECTION.append(LPCOLLECTIONDIVHOLDER)

            //adding img to div
            const LPCOLLECTIONIMG = document.createElement('img');
            LPCOLLECTION.classList.add('LP-collectionImg');
            LPCOLLECTION.src = element.herobannerimg;
            LPCOLLECTIONDIVHOLDER.append(LPCOLLECTIONIMG)
        });
    })
    .catch(error => console.log(error));
}