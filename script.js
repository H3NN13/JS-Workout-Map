'use strict';

// const { popup } = require("leaflet");

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
class Workout { 
  date = new Date(); 
  id = (new Date() + ' ').slice(-10);
    constructor(distance,duration,coords){ 
    distance = this.distance;
    duration = this.duration;
    coords = this.coords; }
};

class Running extends Workout{ 
    constructor(cadence,pace){
        super(id, distance, duration, coords); 
        cadence = this.cadence;
    }
} ;

class App {
     #map;
     #mapEvent;  
     constructor() {
        // Get user's position
        this._getPosition();
    
        // Get data from local storage
        this._getLocalStorage();
    
        // Attach event handlers
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
      }
    
      _getPosition() {
        if (navigator.geolocation)
          navigator.geolocation.getCurrentPosition(
            this._loadMap.bind(this),
            function () {
              alert('Could not get your position');
            }
          );
      }
    
      _loadMap(position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        // console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);
    
        const coords = [latitude, longitude];
    
        this.#map = L.map('map').setView(coords, 13);
    
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);
    
        // Handling clicks on map
        this.#map.on('click', this._showForm.bind(this));
    
        
      }
    
      _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      }
    
      _hideForm() {
        // Empty inputs
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
          '';
    
        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(() => (form.style.display = 'grid'), 1000);
      }
    
      _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
      }
    }     


const app = new App();  



