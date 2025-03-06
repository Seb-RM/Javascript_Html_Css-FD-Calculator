document.addEventListener('DOMContentLoaded', function() {
    const investmentInput = document.getElementById("investment");
    const interestRateInput = document.getElementById('interest-rate');
    const timePeriodInput = document.getElementById('time-period');

    investmentInput.addEventListener('input', function() {
        updateInvestmentValue(this.value);
    });

    interestRateInput.addEventListener("input", function () {
        updateInterestRateValue(this.value);
    });

    timePeriodInput.addEventListener("input", function () {
        updateTimePeriodValue(this.value);
    });

    updateInvestmentValue(investmentInput.value);
    updateInterestRateValue(interestRateInput.value);
    updateTimePeriodValue(timePeriodInput.value);

});

function updateInvestmentValue(value) {
    document.getElementById('investment-value').innerText = `${parseFloat(value).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}`;
}

function updateInterestRateValue(value) {
    document.getElementById('interest-rate-value').innerText = `${parseFloat(value).toFixed(1)}%`;
}


function updateTimePeriodValue(value) {
    document.getElementById("time-period-value").innerText = `${value} years`;
}

function calculateFD() {
    const principal = parseFloat(document.getElementById('investment').value);
    const rate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const time = parseFloat(document.getElementById('time-period').value);

    const compoundInterest = principal * (Math.pow((1 + rate), time) - 1);
    const result = principal + compoundInterest;
    const interestEarned = result - principal;

    document.getElementById('invested-amount').innerText = `${principal.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}`;
    document.getElementById('estimated-returns').innerText = `${Math.round(interestEarned).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}`;
    document.getElementById('total-value').innerText = `${Math.round(result).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}`;

}
