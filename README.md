# **SC2006-Project: extraVEGANza Project Outline and Comments**

 By: AY2022-2023 Sem 2 SC2006 A35 Team Anyhow Anything Anywhere

> ⚠️ **Please do not commit your node_modules** ⚠️

## TODO

- Scroll to show more function
  - This see whether backend can get a certain number of restaurants or not
- Show restaurant info
  - This see whether backend done with menu
  - Also frontend and backend need implement share post functionality
  - Restaurant backend also need to be able to get particular information
- Community page
  - Frontend retrieve posts
  - User can like post
  - Backend store post information
- Settings page
  - I don't know what to put here
  - Reset map page to default
  - Reset app to default
  - IDK
- Map page
  - Show nearby restaurants

## Changelog

- Changed home backend to port 2007, this will be merged (if possible) with the community backend to the same port
- Some issues from home backend is fixed (? not sure will work on other's side)
- Frontend list page can now retrieve restaurant from backend, but (temporarily) would only get the first 50 restaurant, since there are like 12000 restaurants

## **Comment Outline**

1. [Application Skeleton](#application-skeleton)
2. [Dialogue Map](#dialogue-map)
3. [Data Dictionary](#data-dictionary)
4. [Functional Requirements](#functional-requirements)
5. [System Requirements](#system-requirements)
6. [System Architecture](#system-architecture)
7. [Use Case Model](#use-case-model)
8. [Sequence Diagram](#sequence-diagram)
9. [Class Diagram](#class-diagram)

&nbsp;

## **Lab 3 Deliverables**

- [Complete Use Case model](#use-case-model)
- Design Model
  - [Class diagram](#class-diagram)
  - [Sequence diagrams](#sequence-diagram)
  - [Dialog map](#dialogue-map)
- [System architecture](#system-architecture)
- [Application skeleton](#application-skeleton)

&nbsp;

## **Application Skeleton**

### Frontend

#### Files that are not documented yet

- `SimpleMap.js`

### Backend

#### Please make documentation and Application Skeleton Code for the backend

&nbsp;

## **Dialogue Map**

### Comments from frontend

- When user reach the home page, they will be redirected to the map page, i.e. there is no home page, but I think can keep the Home Page blob in the Dialogue Map. - Renamed Map Page to map interface instead, can help check if its ok?

- There's also the dietary restrictions options (e.g. vegan, vegetarian, etc.) option, I think that should also be included in the map. - added as an arrow

- Some functions that might not be implemented

  - Forgot password (process might be simplified) - removed
  - Follow user / friends function - removed

&nbsp;

## **Data Dictionary**

Looks good to me

&nbsp;

## **Functional Requirements**

Might need to change / remove some functional requirements if we are not able to implement all of the functions

&nbsp;

## **System Requirements**

Same as [Functional Requirements](#functional-requirements)

&nbsp;

## **System Architecture**

Looks good to me

&nbsp;

## **Use Case Model**

Please provide comment if any :3

&nbsp;

## **Sequence Diagram**

Please upload to GitHub, or upload to Google Drive

Remember to also update accordingly to our current application status

&nbsp;

## **Class Diagram**

Includes entity, control, and boundary classes

Please provide comment if any :3
