
function HEROBANNERS() {
    const HEROBANNERDIV = document.querySelector('.heroBanner-div');

    fetch('/Pages/LandingPage/LandingpageBanners/herobanners.json')
        .then(res => res.json())
        .then(data => {

            HEROBANNERDIV.innerHTML = '';

            data.forEach(element => {

                const HEROBANNERHOLDER = document.createElement('div');
                HEROBANNERHOLDER.classList.add('heroBanner-holder');
                HEROBANNERDIV.append(HEROBANNERHOLDER);

                const HEROTEXTHOLDER=document.createElement('div')
                HEROTEXTHOLDER.classList.add('herotextHolderdiv')
                HEROBANNERHOLDER.append(HEROTEXTHOLDER)

                const HEROBANNER = document.createElement('img');
                HEROBANNER.classList.add('herobanner-img');
                HEROBANNER.src = element.herobannerimg;
                HEROBANNERHOLDER.append(HEROBANNER);

                
            });

            // Duplicate the banners for an infinite loop
            const ORIGINALBANNERS = [...HEROBANNERDIV.children];

            ORIGINALBANNERS.forEach(banner => {
                HEROBANNERDIV.append(banner.cloneNode(true));
            });

        })
        .catch(error => console.log(error));
}
