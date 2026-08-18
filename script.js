 
        // Data Structure with official titles and high quality cover art links
        const xmenData = [
            { id: "x1", title: "X-Men: Primera Generación", year: "1962 / 2011", type: "Película", note: "Línea Temporal Original", img: "IMG1/primera_generacion.png" },
            { id: "x2", title: "X-Men Orígenes: Wolverine", year: "1979 / 2009", type: "Película", note: "Línea Temporal Original", img: "IMG1/wolverine.png" },
            { id: "x3", title: "X-Men", year: "2000", type: "Película", note: "Línea Temporal Original", img: "IMG1/x_men.png" },
            { id: "x4", title: "X2: X-Men Unidose", year: "2003", type: "Película", note: "Línea Temporal Original", img: "IMG1/x2.png" },
            { id: "x5", title: "X-Men: La Batalla Final", year: "2006", type: "Película", note: "Línea Temporal Original", img: "IMG1/batalla.png" },
            { id: "x6", title: "Wolverine: Inmortal", year: "2013", type: "Película", note: "Línea Temporal Original", img: "IMG1/inmortal.png" },
            { id: "x7", title: "X-Men: Días del Futuro Pasado", year: "1973/2023 / 2014", type: "Película", note: "Reinicio de la línea temporal", img: "IMG1/dias.png" },
            { id: "x8", title: "X-Men: Apocalipsis", year: "1983 / 2016", type: "Película", note: "Nueva Línea Temporal", img: "IMG1/apocalypse.png" },
            { id: "x9", title: "X-Men: Fénix Oscura", year: "1992 / 2019", type: "Película", note: "Nueva Línea Temporal", img: "IMG1/fenix.png" },
            { id: "x10", title: "Deadpool", year: "2016", type: "Película", note: "Nueva Línea Temporal", img: "IMG1/deadpool.png" },
            { id: "x11", title: "Deadpool 2", year: "2018", type: "Película", note: "Nueva Línea Temporal", img: "IMG1/deadpool2.png" },
            { id: "x12", title: "Los Nuevos Mutantes", year: "2020", type: "Película", note: "Nueva Línea Temporal", img: "IMG1/mutantes.jpg" },
            { id: "x13", title: "Logan", year: "2029 / 2017", type: "Película", note: "Futuro alternativo / Cierre de era", img: "IMG1/logan.jpg" }
        ];

       const mcuData = [

    // =========================================================
    // SAGA DEL INFINITO
    // =========================================================

    {
        id: "m1",
        title: "Capitán América: El Primer Vengador",
        year: "1942-1945",
        type: "Película",
        note: "Origen de Steve Rogers y creación del Súper Soldado",
        img: "IMG/primervengador.jpg"
    },

    {
        id: "m2",
        title: "Agent Carter - Temporada 1",
        year: "1946",
        type: "Serie",
        note: "Peggy Carter trabaja para la Reserva Científica Estratégica",
        img: "IMG/carter.jpg"
    },

    {
        id: "m3",
        title: "Agent Carter - Temporada 2",
        year: "1947",
        type: "Serie",
        note: "Peggy Carter se traslada a Los Ángeles",
        img: "IMG/carter2.jpg"
    },

    {
        id: "m4",
        title: "Capitana Marvel",
        year: "1995",
        type: "Película",
        note: "Carol Danvers descubre sus poderes durante la guerra Kree-Skrull",
        img: "IMG/capitana-marvel.jpg"
    },

    {
        id: "m5",
        title: "Iron Man",
        year: "2008",
        type: "Película",
        note: "Inicio de la era moderna de los superhéroes",
        img: "IMG/ironman.jpg"
    },

    {
        id: "m6",
        title: "Iron Man 2",
        year: "2010",
        type: "Película",
        note: "Tony enfrenta a Ivan Vanko y conoce a Black Widow",
        img: "IMG/ironman2.png"
    },

    {
        id: "m7",
        title: "El Increíble Hulk",
        year: "2010",
        type: "Película",
        note: "Bruce Banner intenta controlar a Hulk",
        img: "IMG/hulk.png"
    },

    {
        id: "m8",
        title: "Thor",
        year: "2010",
        type: "Película",
        note: "Thor es desterrado de Asgard y llega a la Tierra",
        img: "IMG/thor.jpg"
    },

    {
        id: "m9",
        title: "Los Vengadores",
        year: "2012",
        type: "Película",
        note: "Batalla de Nueva York contra Loki y los Chitauri",
        img: "IMG/vengadores.jpg"
    },

    {
        id: "m10",
        title: "Iron Man 3",
        year: "2012-2013",
        type: "Película",
        note: "Tony Stark enfrenta las consecuencias de la batalla de Nueva York",
        img: "IMG/ironman3.jpg"
    },

    {
        id: "m11",
        title: "Thor: El Mundo Oscuro",
        year: "2013",
        type: "Película",
        note: "Malekith intenta utilizar la Gema de la Realidad",
        img: "IMG/thorm.jpg"
    },

    {
        id: "m12",
        title: "Capitán América: El Soldado de Invierno",
        year: "2014",
        type: "Película",
        note: "Caída de S.H.I.E.L.D. y revelación de Hydra",
        img: "IMG/cap.jpg"
    },

    {
        id: "m13",
        title: "Guardianes de la Galaxia",
        year: "2014",
        type: "Película",
        note: "Los Guardianes protegen la Gema del Poder",
        img: "IMG/guardianes.jpg"
    },

    {
        id: "m14",
        title: "Guardianes de la Galaxia Vol. 2",
        year: "2014",
        type: "Película",
        note: "Peter Quill conoce a su padre Ego",
        img: "IMG/guardianes2.png"
    },

    {
        id: "m15",
        title: "Yo Soy Groot - Temporada 1",
        year: "2014",
        type: "Serie / Cortos",
        note: "Aventuras de Baby Groot",
        img: "IMG/yosoygroot.jpg"
    },

    {
        id: "m16",
        title: "Yo Soy Groot - Temporada 2",
        year: "2014",
        type: "Serie / Cortos",
        note: "Nuevas aventuras de Baby Groot",
        img: "IMG/groot.jpg"
    },

    {
        id: "m17",
        title: "Vengadores: La Era de Ultrón",
        year: "2015",
        type: "Película",
        note: "Creación de Ultrón y nacimiento de Visión",
        img: "IMG/vengadores2.jpg"
    },

    {
        id: "m18",
        title: "Ant-Man",
        year: "2015",
        type: "Película",
        note: "Scott Lang se convierte en Ant-Man",
        img: "IMG/antman.jpg"
    },

    {
        id: "m19",
        title: "Capitán América: Civil War",
        year: "2016",
        type: "Película",
        note: "Los Acuerdos de Sokovia dividen a los Vengadores",
        img: "IMG/civilwar.jpg"
    },

    {
        id: "m20",
        title: "Viuda Negra",
        year: "2016",
        type: "Película",
        note: "Natasha Romanoff huye después de Civil War",
        img: "IMG/widow.jpg"
    },

    {
        id: "m21",
        title: "Black Panther",
        year: "2016",
        type: "Película",
        note: "T'Challa regresa a Wakanda para convertirse en rey",
        img: "IMG/PANTHER.jpeg"
    },

    {
        id: "m22",
        title: "Spider-Man: Homecoming",
        year: "2016",
        type: "Película",
        note: "Peter Parker intenta equilibrar su vida escolar con ser Spider-Man",
        img: "IMG/spiderman.jpg"
    },

    {
        id: "m23",
        title: "Doctor Strange",
        year: "2016-2017",
        type: "Película",
        note: "Stephen Strange descubre las Artes Místicas",
        img: "IMG/strange.png"
    },

    {
        id: "m24",
        title: "Thor: Ragnarok",
        year: "2017",
        type: "Película",
        note: "Thor intenta impedir el Ragnarok de Asgard",
        img: "IMG/thorr.png"
    },

    {
        id: "m25",
        title: "Ant-Man y la Avispa",
        year: "2018",
        type: "Película",
        note: "Scott Lang y Hope van Dyne exploran el Reino Cuántico",
        img: "IMG/ant-man-y-la-avispa.jpg"
    },

    {
        id: "m26",
        title: "Vengadores: Infinity War",
        year: "2018",
        type: "Película",
        note: "Thanos reúne las Gemas del Infinito",
        img: "IMG/infinity.png"
    },

    {
        id: "m27",
        title: "Vengadores: Endgame",
        year: "2018-2023",
        type: "Película",
        note: "Los Vengadores realizan el Atraco al Tiempo",
        img: "IMG/endgame.jpg"
    },

    // =========================================================
    // MULTIVERSO
    // =========================================================

    {
        id: "m28",
        title: "Loki - Temporada 1",
        year: "Fuera del tiempo / 2012 alternativo",
        type: "Serie",
        note: "Loki conoce la Autoridad de Variación Temporal",
        img: "IMG/loki.png"
    },

    {
        id: "m29",
        title: "¿Qué pasaría si...? - Temporada 1",
        year: "Multiverso",
        type: "Serie Animada",
        note: "El Vigilante observa diferentes realidades",
        img: "IMG/what-if.jpg"
    },

    {
        id: "m30",
        title: "WandaVision",
        year: "2023",
        type: "Serie",
        note: "Wanda crea una realidad alrededor de Westview",
        img: "IMG/wandavision-poster.jpg"
    },

    {
        id: "m31",
        title: "Falcon y el Soldado de Invierno",
        year: "2024",
        type: "Serie",
        note: "Sam Wilson acepta el legado del Capitán América",
        img: "IMG/falcon.jpg"
    },

    {
        id: "m32",
        title: "Shang-Chi y la Leyenda de los Diez Anillos",
        year: "2024",
        type: "Película",
        note: "Shang-Chi descubre el legado de los Diez Anillos",
        img: "IMG/shang-chi-y-la-leyenda-de-los-10-anillos.jpg"
    },

    {
        id: "m33",
        title: "Spider-Man: Far From Home",
        year: "2024",
        type: "Película",
        note: "Peter Parker viaja a Europa después de Endgame",
        img: "IMG/spidermanmis.jpg"
    },

    {
        id: "m34",
        title: "Spider-Man: No Way Home",
        year: "2024",
        type: "Película",
        note: "El hechizo de Doctor Strange rompe las fronteras del multiverso",
        img: "IMG/spider-man-no-way-home-poster.jpg"
    },

    {
        id: "m35",
        title: "Eternals",
        year: "2024",
        type: "Película",
        note: "Los Eternos revelan su presencia en la Tierra",
        img: "IMG/eternals.jpg"
    },

    {
        id: "m36",
        title: "Doctor Strange en el Multiverso de la Locura",
        year: "2025",
        type: "Película",
        note: "Doctor Strange y América Chávez atraviesan diferentes universos",
        img: "IMG/doctor-strange.jpg"
    },

    {
        id: "m37",
        title: "Ojo de Halcón",
        year: "Navidad de 2024",
        type: "Serie",
        note: "Clint Barton ayuda a Kate Bishop",
        img: "IMG/halcon.jpg"
    },

    {
        id: "m38",
        title: "Caballero Luna",
        year: "2025",
        type: "Serie",
        note: "Marc Spector descubre la existencia de Khonshu",
        img: "IMG/moon.jpg"
    },

    {
        id: "m39",
        title: "Ms. Marvel",
        year: "2025",
        type: "Serie",
        note: "Kamala Khan descubre sus poderes",
        img: "IMG/msmarvel.jpg"
    },

    {
        id: "m40",
        title: "She-Hulk: Abogada Hulka",
        year: "2025",
        type: "Serie",
        note: "Jennifer Walters aprende a controlar sus poderes",
        img: "IMG/she.jpg"
    },

    {
        id: "m41",
        title: "Thor: Love and Thunder",
        year: "2025",
        type: "Película",
        note: "Thor se enfrenta a Gorr, el Carnicero de Dioses",
        img: "IMG/loveand.jpg"
    },

    {
        id: "m42",
        title: "Black Panther: Wakanda Forever",
        year: "2025",
        type: "Película",
        note: "Wakanda enfrenta a Namor y Talokan",
        img: "IMG/wakanda.jpeg"
    },

    {
        id: "m43",
        title: "La Maldición del Hombre Lobo",
        year: "2025",
        type: "Especial",
        note: "Especial de Halloween del UCM",
        img: "IMG/la-maldicion-del-hombre-lobo.jpg"
    },

    {
        id: "m44",
        title: "Guardianes de la Galaxia: Especial Fiestas",
        year: "Navidad de 2025",
        type: "Especial",
        note: "Los Guardianes celebran la Navidad",
        img: "IMG/especialguardianes.png"
    },

    // =========================================================
    // SAGA DEL MULTIVERSO - FASE 5
    // =========================================================

    {
        id: "m45",
        title: "Ant-Man y la Avispa: Quantumania",
        year: "2026",
        type: "Película",
        note: "Los héroes quedan atrapados en el Reino Cuántico",
        img: "IMG/Quantumania.png"
    },

    {
        id: "m46",
        title: "Guardianes de la Galaxia Vol. 3",
        year: "2026",
        type: "Película",
        note: "Los Guardianes emprenden una misión para salvar a Rocket",
        img: "IMG/guardianes3.jpg"
    },

    {
        id: "m47",
        title: "Invasión Secreta",
        year: "2026",
        type: "Serie",
        note: "Nick Fury descubre una infiltración Skrull",
        img: "IMG/Invacion.png"
    },

    {
        id: "m48",
        title: "The Marvels",
        year: "2026",
        type: "Película",
        note: "Carol Danvers, Kamala Khan y Monica Rambeau intercambian lugares",
        img: "IMG/marvels.jpg"
    },

    {
        id: "m49",
        title: "Loki - Temporada 2",
        year: "Fuera del tiempo",
        type: "Serie",
        note: "Loki intenta salvar las líneas temporales y la TVA",
        img: "IMG/loki2.jpg"
    },

    {
        id: "m50",
        title: "Echo",
        year: "2026",
        type: "Serie",
        note: "Maya López regresa a su comunidad mientras enfrenta a Kingpin",
        img: "IMG/echo-tv-show-poster.jpeg"
    },

    {
        id: "m51",
        title: "¿Qué pasaría si...? - Temporada 2",
        year: "Multiverso",
        type: "Serie Animada",
        note: "Nuevas realidades alternativas del UCM",
        img: "IMG/temporada-2.jpg"
    },

    {
        id: "m52",
        title: "¿Qué pasaría si...? - Temporada 3",
        year: "Multiverso",
        type: "Serie Animada",
        note: "Nuevas historias y realidades alternativas",
        img: "IMG/temporada-3.jpg"
    },

    {
        id: "m53",
        title: "Deadpool & Wolverine",
        year: "2024 / Multiverso",
        type: "Película",
        note: "Deadpool y Wolverine se enfrentan a una amenaza multiversal",
        img: "IMG/deadpool&wolverine.png"
    },

    {
        id: "m54",
        title: "Agatha, ¿quién si no?",
        year: "2026",
        type: "Serie",
        note: "Agatha Harkness intenta recuperar sus poderes",
        img: "IMG/agatha.jpg"
    },

    {
        id: "m55",
        title: "Capitán América: Brave New World",
        year: "2027",
        type: "Película",
        note: "Sam Wilson asume plenamente el manto del Capitán América",
        img: "IMG/Captain-America-Brave-New-World-Poster.jpg"
    },

    {
        id: "m56",
        title: "Thunderbolts*",
        year: "2027",
        type: "Película",
        note: "Un grupo de antihéroes y agentes forma un nuevo equipo",
        img: "IMG/thunderbolts.jpg"
    },

    {
        id: "m57",
        title: "Ironheart",
        year: "2027",
        type: "Serie",
        note: "Riri Williams continúa su camino como heroína tecnológica",
        img: "IMG/ironheart.jpg"
    },

    // =========================================================
    // PRODUCCIONES MULTIVERSALES / ANIMADAS
    // =========================================================

    {
        id: "m58",
        title: "Eyes of Wakanda",
        year: "Diversas épocas históricas",
        type: "Serie Animada",
        note: "Guerreros de Wakanda recuperan artefactos peligrosos a través de la historia",
        img: "IMG/eyes.jpg"
    },

    {
        id: "m59",
        title: "Marvel Zombies",
        year: "Realidad alternativa",
        type: "Serie Animada",
        note: "Un apocalipsis zombi se extiende por una realidad alternativa",
        img: "IMG/Marvel-Zombies-Mock.jpg"
    },

    // =========================================================
    // TIERRA-828 / MULTIVERSO
    // =========================================================

    {
        id: "m60",
        title: "Los 4 Fantásticos: Primeros pasos",
        year: "Años 60 / Tierra-828",
        type: "Película",
        note: "Los Cuatro Fantásticos protegen una realidad alternativa",
        img: "IMG/4fantasticos.png"
    },

    // =========================================================
    // SAGA DEL MULTIVERSO - ETAPA FINAL
    // =========================================================

    {
        id: "m61",
        title: "Daredevil: Born Again - Temporada 1",
        year: "2025-2026",
        type: "Serie",
        note: "Matt Murdock continúa su lucha contra Wilson Fisk",
        img: "IMG/daredevil-born-again.jpg"
    },

    {
        id: "m62",
        title: "Daredevil: Born Again - Temporada 2",
        year: "2026",
        type: "Serie",
        note: "Daredevil continúa enfrentándose al poder de Wilson Fisk",
        img: "IMG/daredevil2.jpg"
    },

    {
        id: "m63",
        title: "The Punisher: One Last Kill",
        year: "2026",
        type: "Especial",
        note: "Frank Castle regresa para una última misión",
        img: "IMG/the-punisher-one-last-kill.jpg"
    },

    {
        id: "m64",
        title: "Spider-Man: Brand New Day",
        year: "2028",
        type: "Película",
        note: "Peter Parker continúa su vida después de los acontecimientos de No Way Home",
        img: "IMG/spider-man_brand_new_day.jpg"
    }
];

        // State Management via LocalStorage
        let watchedItems = JSON.parse(localStorage.getItem('marvel_watched_tracker')) || [];

        function renderGrid(data, containerId) {
            const container = document.getElementById(containerId);
            container.innerHTML = '';

            data.forEach((item, index) => {
                const isWatched = watchedItems.includes(item.id);
                const card = document.createElement('div');
                card.className = `card ${isWatched ? 'watched' : ''}`;
                card.setAttribute('data-id', item.id);
                card.onclick = () => toggleWatched(item.id);

                card.innerHTML = `
                    <div class="card-img-container">
                        <span class="badge-type">${item.type}</span>
                        <img class="card-img" src="${item.img}" alt="${item.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x420/1a1c23/ffffff?text=${encodeURIComponent(item.title)}'">
                        <div class="checkbox-container">
                            <div class="custom-checkbox"></div>
                        </div>
                        <span class="badge-year">${item.year}</span>
                    </div>
                    <div class="card-content">
                        <div>
                            <div class="card-number">#${index + 1}</div>
                            <div class="card-title">${item.title}</div>
                        </div>
                        <div class="card-note">${item.note}</div>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        function toggleWatched(id) {
            if (watchedItems.includes(id)) {
                watchedItems = watchedItems.filter(itemId => itemId !== id);
            } else {
                watchedItems.push(id);
            }
            
            localStorage.setItem('marvel_watched_tracker', JSON.stringify(watchedItems));
            updateUI();
        }

        function updateUI() {
            const allItems = [...xmenData, ...mcuData];
            const total = allItems.length;
            const watched = watchedItems.length;
            const percentage = total > 0 ? Math.round((watched / total) * 100) : 0;

            document.getElementById('progress-text').innerText = `${watched} / ${total} (${percentage}%)`;
            document.getElementById('progress-bar').style.width = `${percentage}%`;

            // Update card classes dynamically
            document.querySelectorAll('.card').forEach(card => {
                const id = card.getAttribute('data-id');
                if (watchedItems.includes(id)) {
                    card.classList.add('watched');
                } else {
                    card.classList.remove('watched');
                }
            });
        }

        function filterCategory(category) {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            const xmenSec = document.getElementById('section-xmen');
            const mcuSec = document.getElementById('section-mcu');

            if (category === 'all') {
                xmenSec.style.display = 'block';
                mcuSec.style.display = 'block';
            } else if (category === 'xmen') {
                xmenSec.style.display = 'block';
                mcuSec.style.display = 'none';
            } else if (category === 'mcu') {
                xmenSec.style.display = 'none';
                mcuSec.style.display = 'block';
            }
        }

        // Initialize App
        document.addEventListener('DOMContentLoaded', () => {
            renderGrid(xmenData, 'grid-xmen');
            renderGrid(mcuData, 'grid-mcu');
            updateUI();
        });