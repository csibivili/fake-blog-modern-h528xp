# Fake Blog

1. Készíts egy függvényt, ami egy Promise-szal tér vissza és a  következő szerkezettel tartalmaz 5 db `Post`-ot:

    ```TS
    interface Post {
        title: string;
        body: string;
        date: Date;
    }
    ```

    Legalább a `date` mezők értékei legyenek egyediek.

2. Hívd meg ezt a függvényt és listázd ki a tartalmát, mintha egy blog cikkei lennének.

3. A listát adó függvény módosítása nélkül egészítsük ki az eredeti `Post` objecteket egy tetszőleges tulajdonsággal.

4. Rendezd a posztokat dátum szerint (csökkenő/növekvő) sorrendbe.
