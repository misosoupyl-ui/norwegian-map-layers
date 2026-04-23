URL REPOSITORY: https://github.com/kristiania-kws2100-2026/kws2100-exam-Ayanaro.git

LINK TO DEPLOYED WEBSITE: https://kws2100-exam-ayanaro-1-vo04.onrender.com/   

***IMPORTANT INFO***
We have chosen to use Render.com to deploy our website. Once the website loades, it will take a minute to load in the different data sources on the map. Toggle all the data sources on to ensure that you will see them.

# Kartbasert Webapplikasjon - KWS2100

This application is an interactive map, built with React and OpenLayers. The map displays geographical and environmental data across Norway, which includes:
- Fishing harbours
- Speed restrictions on lakes and rivers
- Protected outdoor recreation zones
- State secured outdoor recreation areas
- Municipals
- Lobster conservation areas

Users can toggle on/off the different data sources, and switch to different background maps.

## Features
- [x] User can switch between different Tile Layers
- [x] User can click on the points to see properties (fishing harbours and their data)
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

***NOTE:***  
The project is structured and organized in code with clear naming, and well defined functions, making it easy to navigate and extend code if wanted. The application intergrates six different data sources, both with polygon and points.

- [x] You can click on a feature to display an Overlay with properties of the features  
- [x] You display an Overview map. This has not been covered by in the lectures, but is well is a well documented feature in OpenLayers

***NOTE:***
  The outdoor areas (Friluftslivsområdet) datasourse only covers the Oslo region, only available at the time of development.
  Make sure to zoom in, in order to see the smaller full names of kommuner.

## Chosen Feature
- [x] Include more than one option for background map, inclduing a polar projection map. https://arctic-sdi.org/services/topografic-basemap/ would be most appropriate (note: as covered in lecture 4, there is a problem with this site that requires you to download a copy of the features XML file into your project)

## Data sources

- Fiskehavner: https://kartkatalog.geonorge.no/metadata/fiskerihavner/fabfe189-06b5-4a3f-84ba-3c48b02ce6de 
- Fartsrestriksjoner innsjø og elver: https://www.kystinfo.no/ (in kystinfo.no -> nedlastninger -> Tema -> Fartsrestriksjoner innsjø og elver)
- Friluftslivsområder - vernede: https://kartkatalog.geonorge.no/metadata/friluftslivsomraader-vernede/fbdfd588-c24e-4e4c-95ba-e3be9bf401a0?search=friluftsliv
  
- Friluftslivsområder - statlig sikra: https://kartkatalog.geonorge.no/metadata/friluftslivsomraader-statlig-sikra/e08ad2cb-3262-4a78-bc58-2f3b5c5ccfd2
- Kommuner: https://data.geonorge.no/sosi/inndelinger/inndelingsbase/kommuner 
- Hummer - fredningsområder: https://kartkatalog.geonorge.no/metadata/hummer-fredningsomraader/8901e1f8-b947-4f7d-819c-bf11e3e16a68

## Collaboration

This project was developed in collaboration.
We worked together in the same room, where we coded and pushed commits both 
individually on separate computers and together on a single computer.
