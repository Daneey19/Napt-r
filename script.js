function addEvent() { 
    // Az űrlap adatainak lekérése
    const eventName = document.getElementById("event-name").value;
    const day = document.getElementById("day-select").value;
    const time = document.getElementById("time-select").value;

    // Ha az esemény neve üres, figyelmeztetést adunk vissza
    if (!eventName) {
        alert("Kérjük, adja meg az esemény nevét!");
        return;
    }

    // A megfelelő cella ID-jének összeállítása
    const cellId = `${day}-${time}`;
    const cell = document.getElementById(cellId);

    // Ellenőrzés, hogy a cella létezik-e
    if (cell) {
        // Ellenőrizzük, hogy az adott időpontban már van-e esemény
        if (cell.querySelector(".event")) {
            alert("Ez az időpont már foglalt!");
            return;
        }

        // Esemény megjelenítése a cellában
        const eventElement = document.createElement("div");
        eventElement.className = "event";
        eventElement.textContent = eventName;

        // Esemény törlésének lehetősége
        eventElement.addEventListener("click", function() {
            if (confirm("Biztosan törölni szeretnéd ezt az eseményt?")) {
                cell.removeChild(eventElement);
            }
        });

        cell.appendChild(eventElement);

        // Visszajelzés a sikeres esemény hozzáadásáról
        alert("Esemény sikeresen hozzáadva!");

        // Az űrlap mezőinek kiürítése
        document.getElementById("event-name").value = "";
    } else {
        alert("Nem létező cellát választottál.");
    }
}
