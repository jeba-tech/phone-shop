// let cardCounter = 9;
// const showMoreBtn = document.getElementById("load-more-button");
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

const displaySearchResult = (data) => {
      const searchResult = document.getElementById('search-result');
      searchResult.textContent = '';
      // if(data.length !== cardCounter) {
      //       showMoreBtn.classList.remove("hidden");
      //       showMoreBtn.classList.add("block");
      //   } else {
      //       showMoreBtn.classList.add("hidden");
      //   }
        
      //   data = data.splice(0, cardCounter)
     


      if (data.length == 0) {
            // show no result found;
            displayError();
            // showMoreBtn.classList.add("hidden");
      }
      console.log("data",data)
      data.forEach(phone => {
            console.log("phone",phone);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div class="card h-90 shadow p-3 mb-5 bg-body rounded">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${phone.brand}</h6>
                <p><a  onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-outline-dark">More Details</a></p>
                
            </div>
        </div>
        `;
            searchResult.appendChild(div);
      })
}


const loadPhoneDetail = phoneId => {
      console.log(phoneId)
      const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
      fetch(url)
            .then(res => res.json())
            .then(data => displayPhoneDetail(data.data));
}

const displayPhoneDetail = phone => {
      console.log("phoneDetail",phone);
      const phoneDetails = document.getElementById('phone-details');
      phoneDetails.textContent = '';
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = `
   
    <div class="card-body shadow p-3 bg-body rounded ">
    <img src="${phone?.image}" class="card-img-top my-2 " alt="...">
        <h5 class="card-title">${phone?.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${phone?.brand}</h6>
     
        <p class="card-text">${phone?.slug}</p>
        <p class="card-text"><b>Sensors:</b> ${phone?.mainFeatures?.sensors}</p>
        <p class="card-text"><b>Release Date:</b>  ${phone?.releaseDate ? phone?.releaseDate : 'Release date note found'}</p>
        <p class="card-text"><b>Bluetooth:</b> ${phone?.others?.Bluetooth ? phone?.others?.Bluetooth : 'No info available'}</p>
       
    </div>
    `;
      phoneDetails.appendChild(div);
}
// showMoreBtn.onclick = () => {
//       cardCounter = cardCounter + 6;
//       displaySearchResult();
//   }

// let cardCounter = 9;
// const showMoreBtn = document.getElementById("load-more-button");
// document.getElementById('error-message').style.display = 'none';
// document.getElementById('request-message').style.display = 'none';

// const searchPhone = () => {
//   const searchField = document.getElementById('search-field');
//   const searchText = searchField.value;
//   // clear data
//   searchField.value = '';
//   document.getElementById('error-message').style.display = 'none';
//   document.getElementById('request-message').style.display = 'none';

//   if (searchText === '') {
//     // please write something to display
//     displayRequest();
//   } else {
//     // load data
//     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

//     fetch(url)
//       .then(res => res.json())
//       .then(data => displaySearchResult(data.data))
//       .catch(error => displayError(error))
//       .catch(error => displayRequest(error));
//   }
// };

// const displayError = () => {
//   document.getElementById('error-message').style.display = 'block';
// };

// const displayRequest = () => {
//   document.getElementById('request-message').style.display = 'block';
// };




// const displaySearchResult = (data) => {
//       const searchResult = document.getElementById('search-result');
//       searchResult.textContent = '';
    
//       if (data && data.length > 0) {
//         const dataToShow = data.slice(0, cardCounter);
    
//         dataToShow.forEach(phone => {
//           const div = document.createElement('div');
//           div.classList.add('col');
//           div.innerHTML = `
//             <div class="card h-90 shadow p-3 mb-5 bg-body rounded">
//               <img src="${phone.image}" class="card-img-top" alt="...">
//               <div class="card-body">
//                 <h5 class="card-title">${phone.phone_name}</h5>
//                 <h6 class="card-subtitle mb-2 text-muted">${phone.brand}</h6>
//                 <p><a onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-outline-dark">More Details</a></p>
//               </div>
//             </div>
//           `;
//           searchResult.appendChild(div);
//         });
// //     console.log(data.length)
// //         if (data.length > cardCounter) {
// //           showMoreBtn.classList.remove("hidden");
// //           showMoreBtn.classList.add("block");
// //         } else {
// //           showMoreBtn.classList.add("hidden");
// //         }
//       }
//     };
    
// const loadPhoneDetail = phoneId => {
//   const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
//   fetch(url)
//     .then(res => res.json())
//     .then(data => displayPhoneDetail(data.data));
// };

// const displayPhoneDetail = phone => {
//   const phoneDetails = document.getElementById('phone-details');
//   phoneDetails.textContent = '';
//   const div = document.createElement('div');
//   div.classList.add('card');
//   div.innerHTML = `
//     <div class="card-body shadow p-3 bg-body rounded ">
//       <img src="${phone?.image}" class="card-img-top my-2 " alt="...">
//       <h5 class="card-title">${phone?.name}</h5>
//       <h6 class="card-subtitle mb-2 text-muted">${phone?.brand}</h6>
//       <p class="card-text">${phone?.slug}</p>
//       <p class="card-text"><b>Sensors:</b> ${phone?.mainFeatures?.sensors}</p>
//       <p class="card-text"><b>Release Date:</b>  ${phone?.releaseDate ? phone?.releaseDate : 'Release date not found'}</p>
//       <p class="card-text"><b>Bluetooth:</b> ${phone?.others?.Bluetooth ? phone?.others?.Bluetooth : 'No info available'}</p>
//     </div>
//   `;
//   phoneDetails.appendChild(div);
// };

// // showMoreBtn.onclick = () => {
// //       console.log('Show More')
// //   cardCounter += cardCounter;
// //   displaySearchResult();
// // };
