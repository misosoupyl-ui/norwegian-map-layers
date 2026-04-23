URL REPOSITORY: https://github.com/kristiania-kws2100-2026/kws2100-exam-Ayanaro.git

LINK TO DEPLOYED WEBSITE: [legg inn lenke her]

# Kartbasert Webapplikasjon - KWS2100

This application map is built with React and OpenLayers. The map will display geographical information about Norway with different nature information like:

- Fishing harbours
- Speed restrictions on lakes and rivers
- Protected outdoor recreation zones
- State secured outdoor recreation areas
- Municipals
- Lobster conervation areas

Users can toggle on/off the different data sources, and switch to different background maps.

## Features
- [x] Switch between different Tile Layers
- [x] Clik on the points to see properties (fishing harbours and their data)
- [x] Hover over municipality to see the their property name
- [x] Toggle on/off all the datasources

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
- Fartsrestriksjoner innsjø og elver: https://www.kystinfo.no/ (in kystinfo.no -> nedlastninger -> Tema -> Fartsrestriksjoner innsjø og elver)
- Friluftslivsområder - vernede: https://kartkatalog.geonorge.no/metadata/friluftslivsomraader-vernede/fbdfd588-c24e-4e4c-95ba-e3be9bf401a0?search=friluftsliv 
- Friluftslivsområder - statlig sikra: https://kartkatalog.geonorge.no/metadata/friluftslivsomraader-statlig-sikra/e08ad2cb-3262-4a78-bc58-2f3b5c5ccfd2
- Kommuner: https://data.geonorge.no/sosi/inndelinger/inndelingsbase/kommuner
- Hummer - fredningsområder: https://kartkatalog.geonorge.no/metadata/hummer-fredningsomraader/8901e1f8-b947-4f7d-819c-bf11e3e16a68
