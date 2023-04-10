

  const api =
    "https://services6.arcgis.com/hM5ymMLbxIyWTjn2/arcgis/rest/services/WiFi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";

    console.log(api);

    // test axios GET api
    axios.get(api).then((response) => {
      response = response.data;

      let list = new Map();
      response.features.forEach((element) => {
        list.set(element.attributes.DESCRIPT, element.geometry.points);
      });
      console.log(list);
      console.log(list.get("Port Credit Library"));
      if (typeof document !== 'undefined') {
      const values = document.getElementById('number').innerText=list.size
      console.log(values);
      }
    });


