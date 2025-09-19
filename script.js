const tests = {
    numeric: {
        title: "Razonamiento Numérico",
        time: 45,
        questions: [
            {
                question: "Un anuncio de Google Ads tiene un costo por clic (CPC) de $0.80. Si la campaña generó 750 clics, ¿cuál fue el costo total de la inversión?",
                options: ["$500", "$600", "$750", "$800"],
                answer: "$600"
            },
            {
                question: "Si el precio de un producto es de $250 y se aplica un descuento del 15%, ¿cuál es el precio final?",
                options: ["$210.50", "$212.50", "$215", "$220"],
                answer: "$212.50"
            },
            {
                question: "Tu tienda recibió 2,500 visitas el mes pasado. Si la tasa de conversión es del 2%, ¿cuántas ventas se realizaron?",
                options: ["25", "50", "75", "100"],
                answer: "50"
            }
        ]
    },
    logical: {
        title: "Razonamiento Lógico",
        time: 60,
        questions: [
            {
                question: "Si todos los productos A están en el almacén B, y ningún producto C está en el almacén B, ¿se puede decir con certeza que ningún producto C es un producto A?",
                options: ["Sí", "No", "No se puede determinar"],
                answer: "Sí"
            },
            {
                question: "Si los pedidos de los clientes A y B llegan antes que los pedidos de C, y los pedidos de C llegan antes que los de D, ¿cuál de los siguientes pedidos no puede ser el último en llegar?",
                options: ["Pedido A", "Pedido B", "Pedido C", "Pedido D"],
                answer: "Pedido A"
            },
            {
                question: "Si todos los desarrolladores de software son buenos en lógica, y Ana es una buena programadora, ¿significa que Ana es buena en lógica?",
                options: ["Sí", "No", "No se puede determinar"],
                answer: "Sí"
            }
        ]
    },
    verbal: {
        title: "Razonamiento Verbal",
        time: 60,
        questions: [
            {
                question: "En el contexto de la frase 'La omnicanalidad de nuestra estrategia de marketing nos ha permitido interactuar con los clientes a través de múltiples canales, desde la tienda física hasta las redes sociales, para ofrecerles una experiencia coherente', ¿qué significa 'omnicanalidad'?",
                options: ["Un solo canal de ventas.", "El uso de redes sociales solamente.", "La integración de múltiples canales para una experiencia unificada.", "Marketing por correo electrónico."],
                answer: "La integración de múltiples canales para una experiencia unificada."
            },
            {
                question: "Lee el siguiente extracto y determina si el cliente tiene derecho a un reembolso total. 'La política de devoluciones de la empresa establece que se puede solicitar un reembolso total dentro de los 30 días posteriores a la compra, siempre y cuando el producto no haya sido abierto y conserve su empaque original.' Un cliente compró un producto hace 25 días, lo abrió y lo usó una vez, y el empaque fue desechado.",
                options: ["Sí, tiene derecho a un reembolso total.", "No, solo tiene derecho a un reembolso parcial.", "No, no tiene derecho a un reembolso total.", "Sí, si presenta el recibo."],
                answer: "No, no tiene derecho a un reembolso total."
            },
            {
                question: "Nuestro plan es optimizar el embudo de ventas para aumentar las conversiones en cada etapa, desde la visita inicial hasta la finalización de la compra. En el contexto de la frase, ¿qué representa el 'embudo de ventas'?",
                options: ["La forma de un producto.", "El camino de un cliente desde el primer contacto hasta la compra.", "La forma de organizar el inventario.", "La cantidad de ventas."],
                answer: "El camino de un cliente desde el primer contacto hasta la compra."
            }
        ]
    },
    abstract: {
        title: "Razonamiento Abstracto",
        time: 60,
        questions: [
            {
                question: "En cada serie se proponen 4 figuras alternativas, siendo sólo una la que completa la serie.",
                model: "images/abstract-q1-model.png",
                options: ["images/abstract-q1-o1.png", "images/abstract-q1-o2.png", "images/abstract-q1-o3.png", "images/abstract-q1-o4.png"],
                answer: "images/abstract-q1-o1.png"
            },
            {
                question: "Basado en la siguiente tabla de datos de ventas, ¿cuál es la tendencia que se puede observar para el próximo trimestre?",
                model: "images/sales-table.png",
                options: ["Las ventas decrecerán.", "Las ventas se mantendrán estables.", "Las ventas seguirán creciendo.", "Las ventas son impredecibles."],
                answer: "Las ventas seguirán creciendo."
            },
            {
                question: "¿Cuál de los siguientes gráficos representa un crecimiento exponencial?",
                model: "images/abstract-q3-model.png",
                options: ["images/abstract-q3-o1.png", "images/abstract-q3-o2.png", "images/abstract-q3-o3.png", "images/abstract-q3-o4.png"],
                answer: "images/abstract-q3-o4.png"
            }
        ]
    },
    spatial: {
        title: "Razonamiento Espacial",
        time: 60,
        questions: [
            {
                question: "El diagrama de arriba muestra las aspas de un ventilador. Se gira sobre su centro por un cuarto en el sentido de la manecilla del reloj. ¿Cuál de los siguientes muestra el resultado de la rotación?",
                model: "images/spatial-q1-model.png",
                options: ["images/spatial-q1-o1.png", "images/spatial-q1-o2.png", "images/spatial-q1-o3.png", "images/spatial-q1-o4.png"],
                answer: "images/spatial-q1-o2.png"
            },
            {
                question: "Si la figura que se muestra arriba es rotada por un cuarto en el sentido contrario del reloj. ¿Cuál de las siguientes figuras muestra el resultado de la rotación?",
                model: "images/spatial-q2-model.png",
                options: ["images/spatial-q2-o1.png", "images/spatial-q2-o2.png", "images/spatial-q2-o3.png", "images/spatial-q2-o4.png"], // Corregido: antes había un error en q2-o4
                answer: "images/spatial-q2-o1.png"
            },
            {
                question: "El diagrama de arriba muestra una caja de chocolates completamente cerrada. Si la caja se abre completamente, ¿qué figura representa la caja desplegada?",
                model: "images/spatial-q3-model.png",
                // Corregido: se asegura que las rutas de las opciones sean correctas
                options: ["images/spatial-q3-o1.png", "images/spatial-q3-o2.png", "images/spatial-q3-o3.png", "images/spatial-q3-o4.png"],
                answer: "images/spatial-q3-o2.png"
            }
        ]
    }
};

const sections = Object.keys(tests);
let currentSectionIndex = 0;
let currentQuestionIndex = 0;
let results = {};
let selectedOption = null;
let timerId;

const sectionTitleElement = document.getElementById('section-title');
const questionArea = document.getElementById('question-area');
const optionsArea = document.getElementById('options-area');
const nextButton = document.getElementById('next-button');
const scoreArea = document.getElementById('score-area');
const timerDisplay = document.querySelector('#timer span');
const userInfo = document.getElementById('user-info');
const userNameInput = document.getElementById('user-name');

function showIntro() {
    sectionTitleElement.textContent = "Bienvenido/a al Test de Aptitudes Cognitivas";
    questionArea.innerHTML = `<p>Este test evaluará tu razonamiento abstracto, verbal, lógico y espacial a través de diferentes secciones.</p>
                              <p>Cada sección tiene un tiempo límite, así que asegúrate de responder lo más rápido y preciso posible. ¡Buena suerte!</p>`;
    optionsArea.innerHTML = "";
    timerDisplay.parentElement.style.display = 'none';
    userInfo.style.display = 'none';
    nextButton.textContent = "Comenzar test";
    nextButton.removeEventListener('click', checkAnswer);
    nextButton.removeEventListener('click', sendResultsByEmail);
    nextButton.addEventListener('click', startSection);
}

function startSection() {
    questionArea.innerHTML = "";
    optionsArea.innerHTML = "";
    userInfo.style.display = 'none';
    timerDisplay.parentElement.style.display = 'block';

    if (currentSectionIndex >= sections.length) {
        endTest();
        return;
    }

    const currentSection = tests[sections[currentSectionIndex]];
    sectionTitleElement.textContent = currentSection.title;
    questionArea.style.display = 'block';
    optionsArea.style.display = 'flex';
    nextButton.style.display = 'block';
    scoreArea.textContent = '';
    
    currentQuestionIndex = 0;
    
    let timeRemaining = currentSection.time;
    timerDisplay.textContent = timeRemaining;
    clearInterval(timerId);
    timerId = setInterval(() => {
        timeRemaining--;
        timerDisplay.textContent = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(timerId);
            endSection();
        }
    }, 1000);
    
    nextButton.removeEventListener('click', startSection);
    nextButton.removeEventListener('click', startNextSection);
    nextButton.removeEventListener('click', sendResultsByEmail);
    nextButton.addEventListener('click', checkAnswer);

    loadQuestion();
}

function loadQuestion() {
    const currentSection = tests[sections[currentSectionIndex]];
    if (currentQuestionIndex >= currentSection.questions.length) {
        endSection();
        return;
    }

    const currentQuestion = currentSection.questions[currentQuestionIndex];
    
    questionArea.innerHTML = '';
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-content');
    
    if (currentQuestion.model) {
        const modelImg = document.createElement('img');
        modelImg.src = currentQuestion.model;
        modelImg.classList.add('model-image');
        questionContainer.appendChild(modelImg);
    }
    
    if (currentQuestion.question) {
        const p = document.createElement('p');
        p.innerHTML = currentQuestion.question;
        questionContainer.appendChild(p);
    }
    
    questionArea.appendChild(questionContainer);

    optionsArea.innerHTML = '';
    selectedOption = null;

    currentQuestion.options.forEach(optionPath => {
        if (optionPath.includes('images/')) {
            const img = document.createElement('img');
            img.src = optionPath;
            img.classList.add('option-image');
            img.addEventListener('click', () => {
                if (selectedOption) {
                    selectedOption.classList.remove('selected');
                }
                selectedOption = img;
                img.classList.add('selected');
            });
            optionsArea.appendChild(img);
        } else {
            const button = document.createElement('button');
            button.textContent = optionPath;
            button.classList.add('option-button');
            button.addEventListener('click', () => {
                if (selectedOption) {
                    selectedOption.classList.remove('selected');
                }
                selectedOption = button;
                button.classList.add('selected');
            });
            optionsArea.appendChild(button);
        }
    });

    nextButton.textContent = "Siguiente pregunta";
}

function endSection() {
    clearInterval(timerId);
    scoreArea.textContent = `Sección de ${tests[sections[currentSectionIndex]].title} completada.`;
    nextButton.textContent = 'Siguiente sección';
    nextButton.removeEventListener('click', checkAnswer);
    nextButton.addEventListener('click', startNextSection);

    questionArea.style.display = 'none';
    optionsArea.style.display = 'none';
}

function startNextSection() {
    currentSectionIndex++;
    if (currentSectionIndex < sections.length) {
        startSection();
    } else {
        endTest();
    }
}

function endTest() {
    clearInterval(timerId);
    questionArea.style.display = 'none';
    optionsArea.style.display = 'none';
    nextButton.style.display = 'none';
    timerDisplay.parentElement.style.display = 'none';
    sectionTitleElement.style.display = 'none';

    userInfo.style.display = 'block';
    scoreArea.innerHTML = `
        <p>¡Test completado! Por favor, ingresa tu nombre y apellido para enviar tus resultados.</p>
    `;
    nextButton.textContent = 'Enviar resultados';
    nextButton.style.display = 'block';
    nextButton.removeEventListener('click', checkAnswer);
    nextButton.removeEventListener('click', startNextSection);
    nextButton.addEventListener('click', sendResultsByEmail);
}

function checkAnswer() {
    if (!selectedOption) {
        alert('Por favor, selecciona una opción.');
        return;
    }

    const currentSection = tests[sections[currentSectionIndex]];
    const currentQuestion = currentSection.questions[currentQuestionIndex];
    let isCorrect = false;

    if (selectedOption.src && selectedOption.src.includes(currentQuestion.answer)) {
        isCorrect = true;
    } else if (selectedOption.textContent === currentQuestion.answer) {
        isCorrect = true;
    }

    if (!results[currentSection.title]) {
        results[currentSection.title] = { correct: 0, total: 0 };
    }
    results[currentSection.title].total++;
    if (isCorrect) {
        results[currentSection.title].correct++;
    }

    currentQuestionIndex++;
    loadQuestion();
}

function sendResultsByEmail() {
    const userName = userNameInput.value.trim();
    if (userName === "") {
        alert("Por favor, ingresa tu nombre y apellido.");
        return;
    }

    let emailBody = `
        Test completado por: ${userName}
        Resultados detallados:
    `;

    let totalCorrectas = 0;
    let totalPreguntas = 0;

    for (const section in results) {
        const correct = results[section].correct;
        const total = results[section].total;
        emailBody += `\n${section}: ${correct}/${total}`;
        totalCorrectas += correct;
        totalPreguntas += total;
    }

    emailBody += `\n\nResultados totales: ${totalCorrectas}/${totalPreguntas}`;

    const emailBodyInput = document.getElementById('email-body');
    emailBodyInput.value = emailBody;

    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    
    formData.append('Nombre y Apellido', userName);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        nextButton.style.display = 'none';
        userInfo.style.display = 'none';
        scoreArea.innerHTML = `
            <h2>¡Test completado!</h2>
            <p>Gracias por tu tiempo y predisposición para completar este test. Los resultados han sido enviados. ¡Mucha suerte!</p>
        `;
    }).catch(error => {
        alert('Hubo un error al enviar los resultados. Por favor, revisa tu configuración de Formspree.');
        console.error('Error:', error);
    });
}

showIntro();