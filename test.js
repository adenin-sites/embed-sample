window.onload = () => {
    let card = document.createElement('include-card');
    card.setAttribute('name', 'atm-pto-status');
    let container = document.getElementById('card-container');
    container.appendChild(card);
};