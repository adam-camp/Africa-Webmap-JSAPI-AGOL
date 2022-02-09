require([
  "esri/Map", 
  "esri/views/MapView",  
  "esri/WebMap",
   "esri/widgets/Legend"
], (
  Map, 
  MapView, 
  WebMap, 
  Legend) => {
   const webmap = new WebMap({
     portalItem: {
       id: "3560de131d1c4e1ea5cee4d42d9287c5"
     }
   });

  
    const view = new MapView({
        map: webmap, 
        container: "viewDiv",
        center: [0, -1],
        zoom: 3
      });
        view.ui.add(
          new Legend({
            view: view
          }),
          "bottom-left"
        );
    });
