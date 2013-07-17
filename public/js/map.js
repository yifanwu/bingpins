var map;
var heatmapLayer;

function GetMap() {
  map = new Microsoft.Maps.Map(document.getElementById("divMap"),
      { credentials: "AvqKwDyFcVxFwKAcCF2Gw3uLwjg53vNjt3j8wVOk8EMZabsMJnxiqQu00EVy2OVK"
      });

  // Register and load the Client Side HeatMap Module
  Microsoft.Maps.registerModule("HeatMapModule", "script/heatmap.js");
  Microsoft.Maps.loadModule("HeatMapModule", { callback: function() {
    // Create a basic heatmap from an array of locations
    heatmapLayer = new HeatMapLayer(map, CrimeData);
  }});
}