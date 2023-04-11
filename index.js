

const api =
  "https://services6.arcgis.com/hM5ymMLbxIyWTjn2/arcgis/rest/services/WiFi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";

// test axios GET api
axios.get(api).then((response) => {
  let map = L.map('map').setView([43.5890, -79.6441], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  let icon = L.icon({
    iconUrl: 'https://cloud-2vpc1ldjb-hack-club-bot.vercel.app/0image.png',
    iconSize: [38, 95]
  });

  let marker = L.marker([43.5310490126601, -79.6276177332533]).addTo(map);
  marker.bindPopup("<b> Port Credit Library </b><br> 21 Lakeshore Rd E, Mississauga, ON L5G 1H1");

  let marker2 = L.marker([43.5890, -79.6441]).addTo(map);
 


  response = response.data;

  let list = new Map();
  response.features.forEach((element) => {
    let cords = [element.geometry.points[0][1], element.geometry.points[0][0]]
    console.log(cords);
    list.set(cords, element.attributes.DESCRIPT)
    console.log(list)
    
  });
  // console.log(list);
  console.log(list.get("Port Credit Library"));
  const values = document.getElementById('number').innerText = list.size
  // console.log(values);

  list.forEach((value, key) => {
    let marker3 = L.marker(key).addTo(map)
    marker3.bindPopup(`<b> ${value} </b>`)
    const p = document.createElement("p");
    p.innerHTML = `<h4> ${value} </h4> ${key} `;
    document.body.appendChild(p);
  }
  );
  // console.log(list);

  
  // console.log(list.get("Port Credit Library"));
})



