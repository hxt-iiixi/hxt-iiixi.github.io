const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

let noBtnMoveSpeed = 1;

noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    // Prevent it from going outside
    x = Math.max(10, Math.min(x, maxX - 10));
    y = Math.max(10, Math.min(y, maxY - 10));

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
    noBtnMoveSpeed += 0.5; 
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="container">
            <h1>Dapat lang!! joke hehehe<br> i lovee youuu soo muchhh babyyy</h1>
            <button><a href="index.html"  class="links">HOME</a>
        </div>`;
});
