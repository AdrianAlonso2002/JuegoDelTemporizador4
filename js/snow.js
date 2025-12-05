document.addEventListener("DOMContentLoaded", () => {
    let clickCount = 0;
    const maxClicks = 3;

    document.addEventListener("click", () => {
        if (clickCount >= maxClicks) return;

        clickCount++;

        const body = document.body;
        const audio = document.getElementById("christmasMusic");
        audio.play();

        const snowflakes = [];

        function createSnowflake() {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");

            // Probabilidad del 1% para corazones
            const random = Math.random();

            if (random <= 0.004) {
                // ❤️ corazón (1%)
                snowflake.textContent = "❤️";
                snowflake.style.color = "red";

            } else if (random <= 0.008) {
                // 💜 corazón (1%)
                snowflake.textContent = "💜";
                snowflake.style.color = "#cba4ff";
            } else {
                // ❄ blanco o ❄ lila (99%)
                const tipoNieve = Math.random();

                if (tipoNieve < 0.5) {
                    snowflake.textContent = "❄"; // blanco
                    snowflake.style.color = "white";
                } else {
                    snowflake.textContent = "❄"; // lila
                    snowflake.style.color = "#cba4ff";
                }
            }

            // Posición inicial y tamaño aleatorios
            snowflake.style.left = Math.random() * window.innerWidth + "px";
            snowflake.style.fontSize = Math.random() * 20 + 10 + "px";

            // Duración de la animación aleatoria
            const fallDuration = Math.random() * 10 + 5;
            snowflake.style.animationDuration = fallDuration + "s";

            // Opacidad aleatoria
            snowflake.style.opacity = Math.random();

            body.appendChild(snowflake);
            snowflakes.push(snowflake);

            // Eliminar después de la animación
            setTimeout(() => {
                snowflake.remove();
                snowflakes.splice(snowflakes.indexOf(snowflake), 1);
            }, fallDuration * 3000);
        }

        // Crear elementos cayendo continuamente
        setInterval(createSnowflake, 120);
    });
});
