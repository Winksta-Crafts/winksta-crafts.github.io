const landingContactsdata=`
    <div class="contacts-wrapper">
        <div class="contact-icons-container">
            <a id="winksta-contact-icons" href="tel:+256781576124"><img class="icons" src="/Assets/Icons/phone-call.png"/></a>
            <a id="winksta-contact-icons" href="https://mailto:winkstacrafts@gmail.com"><img class="icons" src="/Assets/Icons/envelope.png"/></a>
            <a id="winksta-contact-icons" href="https://wa.me/+256750520936"><img class="icons" src="/Assets/Icons/whatsapp.png"/></a>
            <a id="winksta-contact-icons" href="https://www.instagram.com/winksta_crafts?utm_source=qr&igsh=M3BjOW83aGRhNnI5"><img class="icons" src="/Assets/Icons/instagram.png"/></a>
            <a id="winksta-contact-icons" href="https://www.facebook.com/share/14vh82qgh7/"><img class="icons" src="/Assets/Icons/facebook.png"/></a>
            <a id="winksta-contact-icons" href="tel:+256781576124"><img class="icons" src="/Assets/Icons/marker.png"/></a>
        </div>
    </div>

    <div class="open-contacts-btn" onclick="openContactsdrawer()">
        <img id="winksta-contacts" src="/Assets/Icons/address-book.png"/>
    </div>

    <div class="close-contacts-btn" onclick="closeContactsdrawer()">
        <img id="winksta-contacts" src="/Assets/Icons/cross-small.png"/>
    </div>
`;

function openContactsdrawer() {
    let CONTACTSWRAPPER=document.querySelector('.contacts-wrapper');
    CONTACTSWRAPPER.style.height=90+'%';

    let OPENCONTACTSBTN=document.querySelector('.open-contacts-btn');
    OPENCONTACTSBTN.style.display='none';

    let CLOSECONTACTSBTN=document.querySelector('.close-contacts-btn');
    CLOSECONTACTSBTN.style.display='block';
}

function closeContactsdrawer() {
    let CONTACTSWRAPPER=document.querySelector('.contacts-wrapper');
    CONTACTSWRAPPER.style.height=0+'%';

    let OPENCONTACTSBTN=document.querySelector('.open-contacts-btn');
    OPENCONTACTSBTN.style.display='block';

    let CLOSECONTACTSBTN=document.querySelector('.close-contacts-btn');
    CLOSECONTACTSBTN.style.display='none';
}