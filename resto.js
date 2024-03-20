
function handleTableReservation(event) {
    event.preventDefault();
    const customerName = document.getElementById('customerName').value;
    const reservationDate = document.getElementById('reservationDate').value;
    const reservationTime = document.getElementById('reservationTime').value;
    const numGuests = parseInt(document.getElementById('numGuests').value);
    const selectedTable = document.getElementById('selectedTable').value;
    
    if (customerName.trim() === '' || reservationDate === '' || reservationTime === '' || isNaN(numGuests) || numGuests <= 0 || selectedTable === '') {
      alert('Please enter valid values for all fields.');
      return;
    }
    
    alert(`Table ${selectedTable} reserved successfully for ${numGuests} guests by ${customerName} on ${reservationDate} at ${reservationTime}.`);
    
    document.getElementById('reservationForm').reset();
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('menuLink').addEventListener('click', () => {
      document.getElementById('menuSection').style.display = 'block';
      document.getElementById('ordersSection').style.display = 'none';
      document.getElementById('reservationsSection').style.display = 'none';
    });
  
    document.getElementById('ordersLink').addEventListener('click', () => {
      document.getElementById('menuSection').style.display = 'none';
      document.getElementById('ordersSection').style.display = 'block';
      document.getElementById('reservationsSection').style.display = 'none';
    });
  
    document.getElementById('reservationsLink').addEventListener('click', () => {
      document.getElementById('menuSection').style.display = 'none';
      document.getElementById('ordersSection').style.display = 'none';
      document.getElementById('reservationsSection').style.display = 'block';
    });
  
    
    document.getElementById('reservationForm').addEventListener('submit', handleTableReservation);
  });
  