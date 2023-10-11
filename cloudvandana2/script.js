const form = document.getElementById('surveyForm');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popupContent');
const popupcontainer= document.getElementById('popupcontainer');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Form submitted');
    const maleCheckbox = document.getElementById('male');
    const femaleCheckbox = document.getElementById('female');

    if (maleCheckbox.checked && femaleCheckbox.checked) {
        alert('Please select either Male or Female, not both.');
    } else {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderElements = document.getElementsByName('gender');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    let gender = [];
    for (let i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender.push(genderElements[i].value);
        }
    }

    if (
        firstName === '' ||
        lastName === '' ||
        dob === '' ||
        country === '' ||
        gender.length === 0 ||
        profession === '' ||
        email === '' ||
        mobile === ''
    ) {
        alert('Please fill in all the required fields.');
    } else {
        
        const popupContentHTML = `
            <p>First Name: ${firstName}</p>
            <p>Last Name: ${lastName}</p>
            <p>Date of Birth: ${dob}</p>
            <p>Country: ${country}</p>
            <p>Gender:${gender.join(', ')}</p>
            <p>Profession:${profession}</p>
            <p>Email:${email}</p>
            <p>Mobile Number: ${mobile}</p>
        `;
        popup.innerHTML = popupContentHTML;
        popup.style.display = 'block';
        popupcontainer.style.display='block'
        overlay.style.display = 'block';

       const blur= document.getElementById('surveyForm');
         
       blur.style. filter= 'blur(1px)';
       
    }
    }
});

popup.addEventListener('click', function () {
    popup.style.display = 'none';
    overlay.style.display = 'none';
    const blur= document.getElementById('surveyForm');
    blur.style. filter= 'none';
       
    
    form.reset();
});