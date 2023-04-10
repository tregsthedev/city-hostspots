

  const api =
    "https://services6.arcgis.com/hM5ymMLbxIyWTjn2/arcgis/rest/services/WiFi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";

    // test axios GET api
    axios.get(api).then((response) => {
      response = response.data;

      let list = new Map();
      response.features.forEach((element) => {
        list.set(element.attributes.DESCRIPT, element.geometry.points);
      });
      console.log(list);
      console.log(list.get("Port Credit Library"));
      const values = document.getElementById('number').innerText=list.size
      console.log(values);

      // for every entry in the list map, make a paragraph with it's name and coordinates
    list.forEach((value, key) => {
      const p = document.createElement("p");
      p.innerHTML = `${key} ${value}`;
      document.body.appendChild(p);
    }
    );
    // console.log(list);

// this isn't working

  

})
    
 
