# 🏙️  City Hotspots [WIP]
A searchable list of all public hotspots in the City of Missisauga

### How does this work?
As part of it's open data, the city has a table with all the hotspots it runs in the city.
The data can be downloaded, and it also exposes an api with the same records.

This is the API: https://services6.arcgis.com/hM5ymMLbxIyWTjn2/arcgis/rest/services/WiFi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json

On the HTML side of things, it is using the CDN for the axios package, so we can use it on a html document

The code isn't perfect, but it works :p (ish)
