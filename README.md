3. Részvizsga - Gyakorlat
1. Kösd be a Bootstrap és Font-Awesome könyvtárakat a projektbe a tanult módon.
OK
2. KészÍts egy navigation nevű komponenst, amiben egy alapértelmezett Bootstrap stílusú navbar jelenjen meg.
OK
3. A navbar a következő linkeket tartalmazza: Home, Heroes. Kattintásra a kapcsolódó komponens jelenjen meg az alkalmazásban.
OK
4. Hozd létre a home és a heroes komponenseket és állítsd be a routing -ban, hogy a '' és 'heroes' útvonalak esetén jelenjenek meg.
OK
5. AppComponent: az oldal tetején a navigation jelenjen meg. Alatta legyen az a rész, ahol az oldalak töltődnek be, egy container oszályú divben.
OK
6. HomeComponent: jelenjen meg benne egy Jumbotron Bootstrap elem, "Heroes" címmel. A nagy kék gomb, ha rákattintanak, akkor a "/heroes" url-re vigyen, fontos, hogy az Angular routing használatával.
OK
7. Készíts egy Hero osztályt, az alábbi tulajdonságokkal (a típusok értelemszerűek legyenek): id, name, superPower, address.
OK
8. HeroService: készíts egy service -t, a neve hero legyen. Legyen egy getAll metódusa, ami Hero[] típussal tér vissza, és legalább 5 Hero -t szolgáltat azoknak akik meghívják.
OK
9. HeroesComponent: használja a HeroService -t a Hero példányok lekéréséhez. Jelenítse meg a Hero[] elemeit, egy táblázatban egymás alatt.
OK
10. legyen egy pipe -al készített szűrő, ami szöveg beírására szűri a táblázatot a name tulajdonság szerint.

11. a fejléc sorokra kattintva lehessen a táblázat adatait növekvő sorrendbe rendezni szintén egy pipe használatával.
