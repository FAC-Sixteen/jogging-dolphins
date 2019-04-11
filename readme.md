# Week 6 README

![](https://i.imgur.com/NPLkiLM.jpg)


## 🐬Team
![](https://media.giphy.com/media/cRq8TJsIKmQRG/giphy.gif)

[Freddie](https://github.com/Fweddi)
[Ryan](https://github.com/Rymatech)
[Anna](https://github.com/aniablaziak)
[Henry](https://github.com/hrmstockdale)

## 🌊Overview
![](https://media.giphy.com/media/jvucQj4J72dPO/giphy.gif)
A web app for FAC members that allows the user to enter their suggestions for programmes watched during lunch.

### 🛠Built with:
- HTML
- CSS
- JavaScript
- Node.JS
- PSQL

## 🏖How to set up this project?
1. Clone this project to you local machine `https://github.com/FAC-Sixteen/jogging-dolphins/pull/15`
2. Install dependencies by running `npm i`
3. Create a `config.env` file in your root directory and as us for the URL to paste inside

## ⚓️Goals
- [x] deploy app on Heroku
- [x] the app displays suggestions for lunch TV from a PSQL database
- [ ] the database can be updated by the user by entering new suggestions
- [ ] tests (database, pure functions, server routes) 

### Stretch Goals:
- [ ] add voting feauture 
- [ ] consider security concerns
- [ ] good UI 

![](https://media.giphy.com/media/CovFciJgWyxUs/giphy.gif)

## ✍️ Planning
Our initial ideas for the app:
![ideas](https://i.ibb.co/Bw1nshb/brain.jpg)

### 🧩Schema
**Tables list:**
![tables list](https://i.ibb.co/f1L0Yr2/schema-tables.jpg)
**Schema:**
![schema](https://i.ibb.co/JzhGL5Z/schema.jpg)

### ✈️User Journey
![user journey](https://i.ibb.co/R66Nnrf/user-journey-database.jpg)

## ⏰Process
### Day 1
- brainstorm - initial ideas for the project
- draw schema
- draw clear and detailed user journey
- set up project architecture
### Day 2
- work on setting up server and requests
- work on database setup
- set up DOM functionality
- write query functions
- debugging what we've got so far

## 🚧Problems
![](https://media.giphy.com/media/Px2Zu55ofxfO0/giphy.gif)
- not enough time 😵
- setting up Travis (make tests first)
- deploying on Heroku (make the server first, also if not heroku owner use `heroku logs -a [project name] --tails`)
- branches that began 'fix/' would not push to git (possible case sensitivity issue)
- `git add .` not working when in a subdirectory, got around it by using `git add --all` but should have changed into the root directory before using git commands
- `pg` module is not native 😤
- `Fatal: role dolphin does not exist` ❓❓❓ not realising that each person has to create the database and user locally
- Ryan's jokes 
> If I were to open a sandwich shop... outside of Google... it would be called "req and roll"
- Ryan disappearing constantly
![](https://media.giphy.com/media/c6DIpCp1922KQ/giphy.gif)
