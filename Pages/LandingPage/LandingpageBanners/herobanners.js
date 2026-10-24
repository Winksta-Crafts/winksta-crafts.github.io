function HEROBANNERS() {
    const HEROBANNERDIV=document.querySelector('.heroBanner-div');

    fetch('/Pages/LandingPage/LandingpageBanners/herobanners.json')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {

            //creatign scrolling divs to hold hero banners
            const HEROBANNERHOLDER=document.createElement('div')
            HEROBANNERHOLDER.classList.add('heroBanner-holder')
            HEROBANNERDIV.append(HEROBANNERHOLDER)

            //adding banner images to the created div
            const HEROBANNER=document.createElement('img')
            HEROBANNER.classList.add('herobanner-img')
            HEROBANNER.src=element.herobannerimg
            HEROBANNERHOLDER.append(HEROBANNER)
        });
    })
    .catch(error=>console.log(error))
}