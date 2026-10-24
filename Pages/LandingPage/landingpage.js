function LANDINGPAGE() {
    DIV.innerHTML=`
        <div class="major">${landingpageData}</div>
        <header>${landingheaderData}</header>
        <footer>${landingfooterData}</footer>
    `;

    HEROBANNERS();
}