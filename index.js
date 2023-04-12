
const api = "https://services6.arcgis.com/hM5ymMLbxIyWTjn2/arcgis/rest/services/WiFi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";

// test axios GET api
axios.get(api).then((response) => {
  let map = L.map('map').setView([43.5890, -79.6441], 13);
  // set the layer to google map
  L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  }).addTo(map);


  response = response.data;

  let list = new Map();
  response.features.forEach((element) => {
    let cords = [element.geometry.points[0][1], element.geometry.points[0][0]]
    console.log(cords);
    list.set(cords, element.attributes.DESCRIPT)
    console.log(list)

  });




  function findme() {

    // this is the sucess callback,
    const success = (position) => {
      console.log(position.coords.latitude)
      let marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map).bindPopup(" <b> You are here </b> ").openPopup()

    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    }


  }



  findme()

  // write a function that will display the closest wifi location to the user,

  // console.log(list);
  console.log(list.get("Port Credit Library"));
  const values = document.getElementById('number').innerText = list.size
  // console.log(values);

  // This converts the keys (cords) into markers on the map
  list.forEach((value, key) => {
    let marker3 = L.marker(key).addTo(map)
    marker3.bindPopup(`<b> ${value} </b>`)
  });

  let marker5 = L.marker(key)

  list.forEach((value, key) => {
    const p = document.createElement("td");
    const a = document.createElement("td");
    p.innerHTML = `a`;
    a.innerHTML = `b`;
    document.getElementById('table').appendChild(p);
    document.getElementById('table2').appendChild(a);
  });
  // console.log(list);


  // console.log(list.get("Port Credit Library"));
})