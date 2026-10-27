function LANDINGPAGE() {
    DIV.innerHTML=`
        <div class="major">${landingpageData}</div>
        <header>${landingheaderData}</header>
        <div class="contacts-holder">${landingContactsdata}</div>
        <footer>${landingfooterData}</footer>
    `;

    HEROBANNERS();
}