let catState = {
    breed: '',
    location: 'home',
    hunger: 50,
    happiness: 50,
    cleanliness: 100,
    isInteracting: false
};

const catSVGs = {
    cheese: `<svg viewBox="0 0 100 100" class="cat-character">
        <!-- Tail -->
        <path d="M75 75 Q90 70 85 50" fill="none" stroke="#fb8500" stroke-width="6" stroke-linecap="round" class="cat-tail" />
        <circle cx="50" cy="50" r="40" fill="#ffb703" />
        <path d="M30 30 L20 10 L45 25 Z" fill="#fb8500" class="cat-ear-l" />
        <path d="M70 30 L80 10 L55 25 Z" fill="#fb8500" class="cat-ear-r" />
        <circle cx="40" cy="45" r="4" fill="#333" class="cat-eye" />
        <circle cx="60" cy="45" r="4" fill="#333" class="cat-eye" />
        <path d="M45 55 Q50 60 55 55" fill="none" stroke="#333" stroke-width="2" />
        <path d="M35 50 Q40 52 45 50 M55 50 Q60 52 65 50" fill="none" stroke="#333" stroke-width="1" />
    </svg>`,
    spotted: `<svg viewBox="0 0 100 100" class="cat-character">
        <!-- Tail -->
        <path d="M75 75 Q90 80 95 60" fill="none" stroke="#333" stroke-width="5" stroke-linecap="round" class="cat-tail" />
        <circle cx="50" cy="50" r="40" fill="#eee" />
        <circle cx="35" cy="40" r="10" fill="#333" />
        <circle cx="65" cy="65" r="12" fill="#333" />
        <path d="M30 30 L20 10 L45 25 Z" fill="#ccc" class="cat-ear-l" />
        <path d="M70 30 L80 10 L55 25 Z" fill="#ccc" class="cat-ear-r" />
        <circle cx="40" cy="45" r="4" fill="#333" class="cat-eye" />
        <circle cx="60" cy="45" r="4" fill="#333" class="cat-eye" />
        <path d="M45 55 Q50 60 55 55" fill="none" stroke="#333" stroke-width="2" />
    </svg>`,
    calico: `<svg viewBox="0 0 100 100" class="cat-character">
        <!-- Tail -->
        <path d="M75 75 Q90 70 80 50" fill="none" stroke="#fb8500" stroke-width="7" stroke-linecap="round" class="cat-tail" />
        <circle cx="50" cy="50" r="40" fill="#fff" />
        <!-- Orange patches -->
        <path d="M20 30 Q30 20 40 30 T20 60 Z" fill="#fb8500" />
        <path d="M70 70 Q80 80 90 60 T70 40 Z" fill="#fb8500" />
        <!-- Black patches -->
        <path d="M60 20 Q75 15 85 30 T60 50 Z" fill="#023047" />
        <path d="M15 70 Q25 85 40 75 T15 60 Z" fill="#023047" />
        <!-- Ears -->
        <path d="M30 25 L20 5 L45 20 Z" fill="#fb8500" class="cat-ear-l" />
        <path d="M70 25 L80 5 L55 20 Z" fill="#023047" class="cat-ear-r" />
        <!-- Face -->
        <circle cx="40" cy="45" r="3.5" fill="#333" class="cat-eye" />
        <circle cx="60" cy="45" r="3.5" fill="#333" class="cat-eye" />
        <path d="M45 55 Q50 60 55 55" fill="none" stroke="#333" stroke-width="2" />
        <path d="M30 50 L15 48 M30 55 L15 57 M70 50 L85 48 M70 55 L85 57" stroke="#333" stroke-width="0.5" />
    </svg>`,
    tuxedo: `<svg viewBox="0 0 100 100" class="cat-character">
        <defs>
            <radialGradient id="tuxBodyGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style="stop-color:#444;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#000;stop-opacity:1" />
            </radialGradient>
            <radialGradient id="tuxChestGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style="stop-color:#fff;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#eee;stop-opacity:1" />
            </radialGradient>
        </defs>
        <!-- Tail -->
        <path d="M75 75 Q90 85 95 65" fill="none" stroke="#222" stroke-width="6" stroke-linecap="round" class="cat-tail" />
        <!-- Body -->
        <circle cx="50" cy="50" r="42" fill="url(#tuxBodyGrad)" />
        <!-- White Chest (Tuxedo Shirt) -->
        <path d="M50 40 L30 90 Q50 95 70 90 Z" fill="url(#tuxChestGrad)" />
        <path d="M50 40 L25 65 Q50 85 75 65 Z" fill="url(#tuxChestGrad)" />
        <!-- Ears -->
        <path d="M30 25 L18 2 L45 20 Z" fill="#111" class="cat-ear-l" />
        <path d="M70 25 L82 2 L55 20 Z" fill="#111" class="cat-ear-r" />
        <!-- Face Features -->
        <circle cx="38" cy="45" r="4.5" fill="#fff" class="cat-eye" />
        <circle cx="62" cy="45" r="4.5" fill="#fff" class="cat-eye" />
        <circle cx="38" cy="45" r="2" fill="#000" />
        <circle cx="62" cy="45" r="2" fill="#000" />
        <path d="M48 54 L50 57 L52 54" fill="#ffb4a2" />
        <path d="M44 60 Q50 66 56 60" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />
        <path d="M30 55 L10 52 M30 60 L10 65 M70 55 L90 52 M70 60 L90 65" stroke="#eee" stroke-width="0.7" opacity="0.6" />
        <circle cx="35" cy="85" r="8" fill="#fff" />
        <circle cx="65" cy="85" r="8" fill="#fff" />
    </svg>`
};

const catImages = {
    cheese: 'assets/cat_cheese.png',
    spotted: 'assets/cat_spotted.png',
    calico: 'assets/cat_calico.png'
};

let gameLoopInterval = null;
let roamInterval = null;

function selectBreed(breed) {
    catState.breed = breed;
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('location-screen').classList.remove('hidden');
}

function selectLocation(loc) {
    catState.location = loc;
    document.getElementById('location-screen').classList.add('hidden');
    const gameScreen = document.getElementById('game-screen');
    gameScreen.classList.remove('hidden');
    gameScreen.setAttribute('data-theme', loc);
    renderCat();
    startGameLoop();
}

function renderCat() {
    const container = document.getElementById('cat-container');
    container.innerHTML = ''; // Clear previous

    // Add Shadow
    const shadow = document.createElement('div');
    shadow.className = 'cat-shadow';
    container.appendChild(shadow);

    // Add Cat Character
    if (catImages[catState.breed]) {
        const img = document.createElement('img');
        img.src = catImages[catState.breed];
        img.className = 'cat-character cat-sway';
        img.alt = catState.breed;
        container.appendChild(img);
    } else {
        const svgWrapper = document.createElement('div');
        svgWrapper.innerHTML = catSVGs[catState.breed];
        const svg = svgWrapper.querySelector('svg');
        svg.classList.add('cat-sway'); // Subtle sway for SVGs too
        container.appendChild(svg);
    }

    // 클릭 이벤트 리스너 추가 (중복 방지)
    const catElement = container.querySelector('.cat-character');
    if (catElement) {
        catElement.addEventListener('click', () => {
            if (catElement.classList.contains('cat-jump')) return;

            catElement.classList.add('cat-jump');

            // 애니메이션이 끝나면 클래스 제거 (재사용 가능하게)
            setTimeout(() => {
                catElement.classList.remove('cat-jump');
            }, 500);

            console.log("야옹! 기분이 좋아 보여요!");
            // 행복도 약간 상승 효과
            catState.happiness = Math.min(100, catState.happiness + 2);
            updateBars();
        });
    }
}


function triggerReaction(type) {
    const catElement = document.querySelector('.cat-character');
    if (!catElement) return;

    if (type === 'joy') {
        catElement.classList.add('cat-joy');
        setTimeout(() => catElement.classList.remove('cat-joy'), 500);
    }
}

function updateLitterBox() {
    const litterBox = document.getElementById('litter-box');
    if (!litterBox) return;

    if (catState.cleanliness < 30) {
        litterBox.classList.add('dirty');
    } else {
        litterBox.classList.remove('dirty');
    }
}

function updateBars() {
    document.getElementById('hunger-bar').style.width = `${catState.hunger}%`;
    document.getElementById('happy-bar').style.width = `${catState.happiness}%`;
    document.getElementById('clean-bar').style.width = `${catState.cleanliness}%`;
    updateLitterBox();
}

function showEffect(emoji) {
    const effect = document.getElementById('interaction-effect');
    effect.innerText = emoji;
    effect.classList.remove('hidden');
    effect.style.animation = 'none';
    effect.offsetHeight; // trigger reflow
    effect.style.animation = 'floatUp 1s forwards';
    setTimeout(() => effect.classList.add('hidden'), 1000);
}

function feedChuru() {
    if (catState.isInteracting) return;
    catState.isInteracting = true;
    catState.hunger = Math.min(100, catState.hunger + 20);
    showEffect('🍗');
    triggerReaction('joy');
    updateBars();
    setTimeout(() => catState.isInteracting = false, 1000);
}

function playHunting() {
    if (catState.isInteracting) return;
    catState.isInteracting = true;
    catState.happiness = Math.min(100, catState.happiness + 20);
    catState.hunger = Math.max(0, catState.hunger - 10);
    showEffect('🧶');
    triggerReaction('joy');
    updateBars();
    setTimeout(() => catState.isInteracting = false, 1000);
}

function cleanLitter() {
    if (catState.isInteracting) return;
    catState.isInteracting = true;

    // 스쿠퍼 효과 시작
    const scooper = document.getElementById('scooper');
    if (scooper) {
        scooper.classList.remove('hidden');
        scooper.classList.add('scooping');

        setTimeout(() => {
            scooper.classList.add('hidden');
            scooper.classList.remove('scooping');

            catState.cleanliness = 100;
            showEffect('✨');
            updateBars();
            catState.isInteracting = false;
        }, 1500); // 애니메이션 지속 시간과 맞춤
    } else {
        catState.cleanliness = 100;
        showEffect('🧹');
        updateBars();
        setTimeout(() => catState.isInteracting = false, 1000);
    }
}

function roamCat() {
    const container = document.getElementById('cat-container');
    const viewport = document.querySelector('.cat-viewport');
    if (!container || !viewport) return;

    const vWidth = viewport.clientWidth;
    const vHeight = viewport.clientHeight;
    const cWidth = container.clientWidth;
    const cHeight = container.clientHeight;

    // Calculate random position within bounds
    const maxX = vWidth - cWidth;
    const maxY = vHeight - cHeight;

    // Stay somewhat away from corners
    const newX = Math.random() * (maxX * 0.8) + (maxX * 0.1);
    const newY = Math.random() * (maxY * 0.8) + (maxY * 0.1);

    const oldX = parseFloat(container.style.left) || (maxX / 2);

    // Walking pulse (Squash & Stretch)
    container.style.transition = 'left 2s ease-in-out, top 2s ease-in-out, transform 0.5s ease-in-out';

    // Scale slightly to simulate "pushing off" the ground
    const dir = newX < oldX ? -1 : 1;
    container.style.transform = `scaleX(${dir * 1.05}) scaleY(0.95)`;

    setTimeout(() => {
        container.style.transform = `scaleX(${dir}) scaleY(1)`;
    }, 1000);

    container.style.left = `${newX}px`;
    container.style.top = `${newY}px`;
}

function startRoaming() {
    if (roamInterval) clearInterval(roamInterval);
    roamCat(); // Move immediately once
    roamInterval = setInterval(roamCat, 4000); // Change position every 4s
}

function resetGame() {
    if (gameLoopInterval) {
        clearInterval(gameLoopInterval);
        gameLoopInterval = null;
    }
    if (roamInterval) {
        clearInterval(roamInterval);
        roamInterval = null;
    }
    // Re-initialize state if necessary, or just go back
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('setup-screen').classList.remove('hidden');
}

function startGameLoop() {
    if (gameLoopInterval) clearInterval(gameLoopInterval);
    gameLoopInterval = setInterval(() => {
        catState.hunger = Math.max(0, catState.hunger - 1);
        catState.happiness = Math.max(0, catState.happiness - 1);

        if (Math.random() > 0.95) {
            catState.cleanliness = Math.max(0, catState.cleanliness - 10);
        }

        updateBars();
    }, 3000);

    startRoaming();
}

const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-50px); opacity: 0; }
    }
    #interaction-effect {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 3rem;
        pointer-events: none;
        z-index: 10;
    }
`;
document.head.appendChild(style);
