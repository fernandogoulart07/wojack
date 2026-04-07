const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// We have 5 papers that can flip (p1 to p5).
// p0 is the static left base, p6 is the static right base.
const papers = [
    document.getElementById('p1'),
    document.getElementById('p2'),
    document.getElementById('p3'),
    document.getElementById('p4'),
    document.getElementById('p5')
];

let currentLocation = 0; // 0 = Spread 1
const maxLocation = 5;   // 5 = Spread 6

function updateButtons() {
    // Hide 'Back' button on the first spread
    if (currentLocation === 0) {
        prevBtn.style.opacity = '0';
        prevBtn.style.pointerEvents = 'none';
    } else {
        prevBtn.style.opacity = '1';
        prevBtn.style.pointerEvents = 'auto';
    }

    // Hide 'Next' button on the last spread
    if (currentLocation === maxLocation) {
        nextBtn.style.opacity = '0';
        nextBtn.style.pointerEvents = 'none';
    } else {
        nextBtn.style.opacity = '1';
        nextBtn.style.pointerEvents = 'auto';
    }
}

nextBtn.addEventListener('click', () => {
    if (currentLocation < maxLocation) {
        // Flip the current paper to the left
        papers[currentLocation].classList.add('flipped');
        
        // Update z-index so it stays on top of the left stack
        papers[currentLocation].style.zIndex = currentLocation + 1;
        
        currentLocation++;
        updateButtons();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentLocation > 0) {
        currentLocation--;
        
        // Flip the paper back to the right
        papers[currentLocation].classList.remove('flipped');
        
        // Update z-index so it stays on top of the right stack
        papers[currentLocation].style.zIndex = papers.length - currentLocation;
        
        updateButtons();
    }
});

// Initialize button states
updateButtons();
