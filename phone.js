document.getElementById('error-message').style.display = 'none';
document.getElementById('request-message').style.display = 'none';
const searchFood = () => {
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
      data.forEach(meal => {
            // console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div onclick="loadMealDetail(${meal.data})" class="card h-100">
            <img src="${meal.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.phone_name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${meal.brand}</h6>
                <p class="card-text"><a href="#" class="btn btn-outline-dark">More Details</a></p>
                
            </div>
        </div>
        `;
            searchResult.appendChild(div);
      })
}

const loadMealDetail = mealId => {
      const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
      fetch(url)
            .then(res => res.json())
            .then(data => displayMealDetail(data.data[0]));
}

const displayMealDetail = meal => {
      console.log(meal);
      const mealDetails = document.getElementById('meal-details');
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
      mealDetails.appendChild(div);
}