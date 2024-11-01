- [iamjunior-nodejs](#iamjunior-nodejs)
- [BONUS tasks](#bonus-tasks)
- [Uzduotys](#uzduotys)
  - [Node.js ir Express pagrindai](#nodejs-ir-express-pagrindai)
    - [Home service aplikacijos API](#home-service-aplikacijos-api)
    - [Duomenų Modeliai:](#duomenų-modeliai)
    - [API kuriuos reikia įgyvendinti:](#api-kuriuos-reikia-įgyvendinti)
      - [1. Kategorijos](#1-kategorijos)
      - [2. Įmonės](#2-įmonės)
      - [3. Užsakymai](#3-užsakymai)
      - [Papildomos funkcijos, kurias reikia įgyvendinti:](#papildomos-funkcijos-kurias-reikia-įgyvendinti)


# iamjunior-nodejs

```
npm init (sukuria package.json)
susikurk rankutem server.js
npm i express
node src/server.js
npm run server
```

# BONUS tasks
- [ ] Swagger API docs - https://www.youtube.com/watch?v=eiSem0cqaN0&ab_channel=KrisFoster

# Uzduotys

## Node.js ir Express pagrindai

### Home service aplikacijos API

Sukurti RESTful API naudojant Express.js, skirtą valdyti kategorijas, įmones ir užsakymus.

### Duomenų Modeliai:

- [x] Kategorijos: Kiekviena kategorija turi ID, pavadinimą, fono spalvą ir ikonos URL.
- [x] Įmonės: Kiekvienas įmonės įrašas apima tokius duomenis kaip ID, pavadinimas, aprašymas, adresas, kategorija, kontaktinis asmuo, el. paštas ir nuotraukos.
- [x] Užsakymai: Sekami užsakymai su tokiomis detalėmis kaip ID, įmonės ID, data, laikas, vartotojo el. paštas, vartotojo vardas ir statusas.

### API kuriuos reikia įgyvendinti:

#### 1. Kategorijos
- [x] GET /categories: Gauna visas kategorijas.
- [x] POST /categories: Sukuria naują kategoriją.

#### 2. Įmonės
- [x] GET /businesses: Gauna visas įmones.
- [x] GET /businesses/category/:category: Gauna visas įmones, priklausančias nurodytai kategorijai.
- [x] GET /businesses/:id: Gauna konkrečią įmonę pagal ID.
- [x] POST /businesses: Prideda naują įmonę į sąrašą. Užtikrinti, kad būtų pateikti visi būtini laukai.
- [x] PUT /businesses/:id: Atnaujina esamą įmonę. Patikrinti, ar įmonė su nurodytu ID egzistuoja, prieš atnaujinant.
- [ ] GET /businesses/:businessId/bookings/date/:date: Gauna visus užsakymus konkrečiai įmonei nurodytą dieną.

#### 3. Užsakymai
- [ ] GET /bookings/user/:email: Gauna visus užsakymus, susijusius su konkretaus vartotojo el. pašto adresu.
- [ ] POST /bookings: Sukuria naują užsakymą. Užtikrinti, kad būtų pateikti visi laukai.
- [ ] DELETE /bookings/:id: Ištrina konkretų užsakymą.

#### Papildomos funkcijos, kurias reikia įgyvendinti:
- [ ] Error handling: Įgyvendinti išsamią klaidų tvarkymo sistemą, kad būtų aiškiai pateikiami pranešimai apie trūkstamus duomenis, netinkamas operacijas ir nesėkmingus veiksmus.
- [ ] Data check: Užtikrinti, kad visi įvesties duomenys atitiktų tikėtinus formatus ir apribojimus prieš juos apdorojant.