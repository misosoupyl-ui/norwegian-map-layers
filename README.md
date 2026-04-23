URL REPOSITORY: https://github.com/kristiania-kws2100-2026/kws2100-exam-Ayanaro.git

LINK TO DEPLOYED WEBSITE: [legg inn lenke her]

# Kartbasert Webapplikasjon - KWS2100

This application map is built with React and OpenLayers. The map will display geographical information about Norway and its maritim information like:

- fishing harbours
- protected marine areas
- outdoor recreation zones
- municipals

Users can toggle on/off the different data sources and switch background maps.

## Features
- [x] Switch between different tile layers
- [x] Clik on the points to see properties (fishing harbours and their data)
- [x] Hover over municipality to see the property name
- [x] Toggle on/off datasources

## Features for grades

### E:
- [x] If you deploy a React application that displays a map with OpenLayers on GitHub pages, you will pass. If you fail to deploy correctly, but your code indicates that you could have achieved a C, you will also pass.

### D:
- [x] Your map must contain some vector data and some interaction

### C:
- [x] The interactions, data sources or styling is beyond what was expected for the assignment. You need to display at least 4 data sources that was not used in the lectures or assignment with at least two types of geometries (point, linestring, polygon)

### B:
- [x] You can display both polygon and point geometries from at least 6 data sources  
- [x] Your code is structured to make it easy to find the code corresponding to each data source and in order to make it easy to add more features  

***COMMENT:***  
We have created a structured and clean project where we have good naming, functions and map structure.

- [x] You can click on a feature to display an Overlay with properties of the features  
- [x] You display an Overview map. This has not been covered by in the lectures, but is well is a well documented feature in OpenLayers  

## Data sources

- Fiskehavner: https://kartkatalog.geonorge.no/metadata/fiskerihavner/fabfe189-06b5-4a3f-84ba-3c48b02ce6de 
- Fart restriksjoner: https://www.kystinfo.no/ 
- Friluftsområder: https://lovdata.no/dokument/LF/forskrift/2013-10-04-1173
- Fristat: http://www.miljodirektoratet.no/naturbase
- Kommuner: https://data.geonorge.no/sosi/inndelinger/inndelingsbase/kommuner
- Hummerområder: https://www.fiskeridir.no/Fritidsfiske/Artar/Hummarfiske/Fredings-og-bevaringsomraade
