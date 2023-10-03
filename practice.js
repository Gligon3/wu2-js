export function setupPractice (element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM

  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/
  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  domManipulation(element)
}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element) {
  let firstname;
  firstname = 'firstname'
  let lastname = 'efternamn'
  let name = firstname + lastname;
  name = firstname + '' + lastname;
  let age = 18
  // kod för att visa vad du lärt dig om variabler och typer
  let varsAndTypes = 'varsAndTypes'
  console.log(varsAndTypes, typeof(varsAndTypes))
}

function operators(element) {
  let a = 23
  let b = 38 
  let c = '30'

  a === b 
  a === c
  b = 4;

  let sum = a + b

  console.log('additon')
  // kod för att visa vad du lärt dig om operatorer
  console.log('operators === ', 1 === 1)
}

function controlStructures(element) {
  let a = 32
  let b = 58
  if (a === b) {
    console.log('Om detta inte funkar')
  } else {
    console.log('Så kommer detta funka')
  }

  // kod för att visa vad du lärt dig om kontrollstrukturer
  // if och loopar
  let controlStructures = 'controlStructures'
  console.log(controlStructures, controlStructures ? 'if' : 'loopar')
}

function arraysAndObjects (element) {
  let Objects = 'Objects'
  let arrays = 'arrays'
  const Numbers = [3, 4, 8, 10,] 
  // kod för att visa vad du lärt dig om arrays och objekt
  console.log(['arrays', {and: 'objects'}])
}

function domAndEvents (element) {
  document.addEventListener()
  // kod för att visa vad du lärt dig om DOM och events
  // använd med html och listeners
  console.log(element, 'lyssna efter event för att ändra element')
}

function domManipulation (element) {
  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  element.innerHTML = 'dom manipulation, ändra och lägg till element'
}