document.getElementById('error-message').style.display = 'none';
document.getElementById('request-message').style.display = 'none';
const searchPhone = () => {
      const searchField = document.getElementById('search-field');
      const searchText = searchField.value;
      // clear data
      searchField.value = '';
      document.getElementById('error-message').style.display = 'none';
      document.getElementById('request-message').style.display = 'none';

      if (searchText == '') {
            // please write something to display
            displayRequest();
      }
      else {
            // load data
            const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

            fetch(url)
                  .then(res => res.json())
                  .then(data => displaySearchResult(data.data))
                  .catch(error => displayError(error))
                  .catch(error => displayRequest(error));
      }
}


const displayError = error => {
      document.getElementById('error-message').style.display = 'block';
}
const displayRequest = error => {
      document.getElementById('request-message').style.display = 'block';
}

const displaySearchResult = data => {
      const searchResult = document.getElementById('search-result');
      searchResult.textContent = '';
      if (data.length == 0) {
            // show no result found;
            displayError();
      }
      data.forEach(phone => {
            // console.log(phone);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${phone.brand}</h6>
                <p><a onclick="loadPhoneDetail(${phone.data})" class="btn btn-outline-dark">More Details</a></p>
                
            </div>
        </div>
        `;
            searchResult.appendChild(div);
      })
}

const loadPhoneDetail = phoneId => {
      const url = `https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`;
      fetch(url)
            .then(res => res.json())
            .then(data => displayPhoneDetail(data.data));
}

const displayPhoneDetail = phone => {
      // console.log(meal);
      const phoneDetails = document.getElementById('phone-details');
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = `
   
    <div class="card-body ">
    <img src="${phone.image}" class="card-img-top my-2 " alt="...">
        <h5 class="card-title">${phone.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${phone.brand}</h6>
        <p class="card-text">${phone.slug}</p>
        <p class="card-text"><b>Sensors:</b> ${phone.mainFeatures.sensors}</p>
        <p class="card-text"><b>Release Date:</b> ${phone.releaseDate}</p>
        <p class="card-text"><b>Bluetooth:</b> ${phone.others.Bluetooth}</p>
       
    </div>
    `;
      phoneDetails.appendChild(div);
}