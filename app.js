let seats = document.querySelector(".all-seats");

for (let i = 0; i < 59; i++) {
    let randint = Math.floor(Math.random() * 2);
    let booked = randint === 1 ? "booked" : "";

    seats.insertAdjacentHTML(
        "beforeend",
        `<input type="checkbox" name="tickets" id="s${i + 1}" ${booked === "booked" ? "disabled" : ""}/>
        <label for="s${i + 1}" class="seat ${booked}"></label>`
    )
}

let tickets = seats.querySelectorAll("input");
tickets.forEach((ticket) => {
    ticket.addEventListener("change", () => {
        if (ticket.disabled) {
            return; // Skip the logic for booked seats
        }

        let amount = +document.querySelector(".amount").innerText;
        let count = +document.querySelector(".count").innerText;

        if (ticket.checked) {
            count += 1;
            amount += 200;
        } else {
            count -= 1;
            amount -= 200;
        }
        
        document.querySelector(".amount").innerText = amount;
        document.querySelector(".count").innerText = count;
    })
});
