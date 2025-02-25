// A $( document ).ready() block.
$(document).ready(function () {
    // Once the functions loadGamesData and addEvents are called then the DOM is fully loaded.
    loadGamesData("gamesList");
    addEvents();
  
  });
  
  // The purpose of this function is to populate a list with game data from the "data.games" array.
  function loadGamesData(appendId) {
    let appendElement = $(`#${appendId}`);
  
    appendElement.empty();
    // Each game details are appended to the HTML element with the ID specificed by the "appendId".
    $.each(data.games, (index, game) => {
  
      appendElement.append(`<li id="gameNo${index}Name" class="list-group-item mb-1 gameName">
          ${game.name}
  
          <ul class="list-group gameDetails">
            <li class="input-group w-100">
              <span class="w-20 input-group-text">studio</span>
                <input id="gamesNo${index}StudioEdit" type="text" name="studio"
                class="form-control editGames" value="${game.studio}">
            </li>
            <li class="input-group w-100">
              <span class="w-20 input-group-text">publisher</span>
                <input id="gamesNo${index}PublisherEdit" type="text" name="publisher"
                class="form-control editGames" value="${game.publisher}">
            </li>
            <li class="input-group w-100">
              <span class="w-20 input-group-text">genre</span>
                <input id="gamesNo${index}GenreEdit" type="text" name="genre"
                class="form-control editGames" value="${game.genre}">
            </li>
            <li class="input-group w-100">
              <span class="w-20 input-group-text">releaseDate</span>
                <input id="gamesNo${index}ReleaseDateEdit" type="text" name="releaseDate"
                class="form-control editGames" value="${game.releaseDate}">
            </li>
            <li class="input-group w-100">
              <span class="w-20 input-group-text">platform</span>
                <input id="gamesNo${index}PlatformEdit" type="text" name="platform" 
                class="form-control editGames" value="${game.platform}">
            </li>
            <li class="input-group w-100">
              <span class="w-20 input-group-text">esrbRating</span>
                <input id="gamesNo${index}ESRBRatingEdit" type="text" name="esrbRating" 
                class="form-control editGames" value="${game.esrbRating}">
            </li>
            <li class="input-group w-100">
              <span class="w-20 input-group-text">trailerURL</span>
                <input id="gamesNo${index}TrailerURLEdit" type="text" name="trailerURL" 
                class="form-control editGames" value="${game.trailerURL}">
            </li>
            <li class="input-group w-100">
              <span class="w-20 input-group-text">tags</span>
                <input id="gamesNo${index}TagsEdit" type="text" name="tags" 
                class="form-control editGames" value="${game.tags}">
            </li>
            <li class="input-group w-100">
              <span class="w-20 input-group-text">gotGameOfTheYear</span>
                <input id="gamesNo${index}gotGameOfTheYearEdit" type="text" name="gotGameOfTheYear" 
                class="form-control editGames" value="${game.gotGameOfTheYear}">
            </li>
          </ul>
        </li>`);
  
      // At the end, it hides detail information and makes inputs fields read only.
      $('.gameDetails').hide();
      $('input.editGames').prop('readonly', true);
  
    });
  }
  
  function addEvents() {
    // This will toggle the visibility of game details when clicked.
    $('.gameName').on('click', (e) => {
  
      let $this = $(e.target);
      let $thisId = $this.attr('id');
  
      $('#' + $thisId + ' > ul.gameDetails').toggle();
    });
  
    // Hides all gameDetail sections.
    $('#btnHideAll').on('click', (e) => {
  
      $('ul.gameDetails').hide();
  
    });
  
    // Shows all gameDetail sections.
    $('#btnShowAll').on('click', (e) => {
  
      $('ul.gameDetails').show();
  
    });
  
    // Makes input fields editiable when clicked on.
    $('input.editGames').on('click', (e) => {
  
      let $this = $(e.target);
      $this.prop('readonly', false);
  
    });
  
    // This will add a new game to the data array which will update the list.
    $('#btnSaveGame').on('click', () => {
  
      data.games.push({
        name: $('#gameAddName').val(),
        studio: $('#gameAddStudio').val(),
        publisher: $('#gameAddPublisher').val(),
        genre: $('#gameAddGenre').val(),
        releaseDate: $('#gameAddReleaseDate').val(),
        platform: $('#gameAddPlatform').val(),
        esrbRating: $('#gameAddESRBRating').val(),
        trailerURL: $('#gameAddTrailerURL').val(),
        tags: $('#gameAddTags').val(),
        gotGameOfTheYear: false
      });
  
      loadGamesData("gamesList");
      addEvents();
  
      $('#addGameModal .btn-close').click()
      $('#addGameModal input').val('');
  
    });
  
    // This pretty much saves any changes to the game details when input loses focus.
    $('input.editGames').on('blur', (e) => {
  
      let $this = $(e.target);
      let $thisId = $this.attr('id');
      let $thisKey = $this.attr('name');
      console.log($thisKey);
  
      let regexDigit = /\d+/g;
      let gameIndex = $thisId.match(regexDigit)[0];
  
      data.games[gameIndex][$thisKey] = $this.val();
  
      $(e.target).prop('readonly', true);
  
    });
  
    // Logs the current game date to the console.
    $('#btnConsoleData').on('click', () => {
  
      console.log(data.games);
  
    });
  }
  
  // Function to load current games into "currentGamesContainer" 
  //  and creates a visual card game.
  function loadCurrentGames() {
    const currentGames = [
      { title: "Helldivers 2", image: "Img/Helldivers.jpeg" },
      { title: "Rainbow Six Siege", image: "Img/R6.jpeg" },
      { title: "Multiversus", image: "Img/Multiversus.jpeg" },
      { title: "Streets of Rage 4", image: "Img/StreetsRage.jpeg" },
      { title: "Killer Klowns from Outer Space", image: "Img/KillerKlowns.jpeg" },
      { title: "Borderlands 3", image: "Img/Borderlands.jpeg" }
  
    ];
  
    const container = document.getElementById('currentGamesContainer');
    currentGames.forEach(game => {
      const gameCard = `
        <div class="col-md-4 col-sm-6 mb-4">
          <div class="card game-card">
            <img src="${game.image}" class="card-img-top game-image" alt="${game.title}">
            <div class="card-body">
              <h5 class="card-title">${game.title}</h5>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += gameCard;
    });
  }
  
  // Function to load games on radar into "radarGamesContainer", creates a visual card
  //  and trailer video for each game in the data.
  function loadRadarGames() {
    const radarGames = [
      { title: "Assassin's Creed Shadows", trailer: "https://www.youtube.com/embed/vovkzbtYBC8" },
      { title: "Elden Ring Shadow of the Erdtree", trailer: "https://www.youtube.com/embed/6uT8wGtB3yQ" },
      { title: "Silent Hill 2", trailer: "https://www.youtube.com/embed/pyC_qiW_4ZY" },
      { title: "Call of Duty: Black Ops 6", trailer: "https://www.youtube.com/embed/oyZY_BiTmd8" }
    ];
  
    const container = document.getElementById('radarGamesContainer');
    radarGames.forEach(game => {
      const gameCard = `
        <div class="col-lg-6 col-md-12 mb-4">
          <div class="card game-card">
            <div class="card-body">
              <h5 class="card-title">${game.title}</h5>
              <div class="ratio ratio-16x9 mt-3">
                <iframe src="${game.trailer}" title="${game.title} trailer" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += gameCard;
    });
  }
  
  // Confetti effect for the thank you section to trigger when the button "confettiButton"
  //  is pressed.
  function setupConfettiButton() {
    const confettiButton = document.getElementById('confettiButton');
    // Here's a link on how to make a confetti effect: "https://diviengine.com/snippets/divi/confetti-effect-when-clicking-a-divi-button-module/"
    confettiButton.addEventListener('click', () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    });
  }
  

  // Resume Section
  document.addEventListener("DOMContentLoaded", function () {
    const resumeToggleBtn = document.getElementById("resumeToggleBtn");
    const resumeContainer = document.getElementById("resumeContainer");

    resumeToggleBtn.addEventListener("click", function () {
      if (resumeContainer.style.display === "none" || resumeContainer.style.display === "") {
          resumeContainer.style.display = "block"; // This shows Resume
          resumeToggleBtn.textContent = "Hide Resume"; // Changes Button Text
      } else {
          resumeContainer.style.display = "none"; // This Hide Resume
          resumeToggleBtn.textContent = "View Resume"; // Changes Button Text
      }
  });
  });

  

  // Call these functions when the document is ready
  document.addEventListener('DOMContentLoaded', () => {
    loadCurrentGames();
    loadRadarGames();
    setupConfettiButton();
  });