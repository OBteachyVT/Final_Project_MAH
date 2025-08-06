//Custom Alert Box Functions
function showCustomAlert(title, message) {
    document.getElementById('customAlertTitle').textContent = title;
    document.getElementById('customAlertMessage').textContent = message;
    document.getElementById('customAlertOverlay').classList.add('visible');
}

function hideCustomAlert() {
    document.getElementById('customAlertOverlay').classList.remove('visible');
}

//Manual Form Validation 
async function validateAndSubmitManualForm(event) {
    event.preventDefault(); 

    // Get form input elements
    const userNameInput = document.getElementById('reportUserName');
    const sunSignSelect = document.getElementById('manualSunSign');
    const moonSignSelect = document.getElementById('manualMoonSign');
    const mercurySignSelect = document.getElementById('manualMercurySign');
    const venusSignSelect = document.getElementById('manualVenusSign');
    const marsSignSelect = document.getElementById('manualMarsSign');
    const risingSignSelect = document.getElementById('manualRisingSign');

    //Validation
    if (userNameInput.value.trim() === '') {
        showCustomAlert('Validation Error', 'Please enter your name.');
        userNameInput.focus();
        return false;
    }
    if (sunSignSelect.value === '') {
        showCustomAlert('Validation Error', 'Please select your Sun Sign.');
        sunSignSelect.focus();
        return false;
    }
    if (moonSignSelect.value === '') {
        showCustomAlert('Validation Error', 'Please select your Moon Sign.');
        moonSignSelect.focus();
        return false;
    }
    if (mercurySignSelect.value === '') {
        showCustomAlert('Validation Error', 'Please select your Mercury Sign.');
        mercurySignSelect.focus();
        return false;
    }
    if (venusSignSelect.value === '') {
        showCustomAlert('Validation Error', 'Please select your Venus Sign.');
        venusSignSelect.focus();
        return false;
    }
    if (marsSignSelect.value === '') {
        showCustomAlert('Validation Error', 'Please select your Mars Sign.');
        marsSignSelect.focus();
        return false;
    }
    if (risingSignSelect.value === '') {
        showCustomAlert('Validation Error', 'Please select your Rising Sign.');
        risingSignSelect.focus();
        return false;
    }

    //Collect Form Data
    const reportData = {
        userName: userNameInput.value.trim(),
        personalPlanets: {
            sun: { sign: sunSignSelect.value },
            moon: { sign: moonSignSelect.value },
            mercury: { sign: mercurySignSelect.value },
            venus: { sign: venusSignSelect.value },
            mars: { sign: marsSignSelect.value }
        },
        risingSign: risingSignSelect.value,
        isManualReport: true 
    };

    //Store Data in localStorage 
    localStorage.setItem('astrologyReportData', JSON.stringify(reportData));

    // Report Page Redirect
    window.location.href = 'report.html';

    return true;
}

//form submission handler for the manual report page
document.addEventListener('DOMContentLoaded', () => {
    const manualAstrologyForm = document.getElementById('manualAstrologyForm');
    if (manualAstrologyForm) {
        manualAstrologyForm.addEventListener('submit', validateAndSubmitManualForm);
    }
});
