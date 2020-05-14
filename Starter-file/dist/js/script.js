const questionsList = [
	{
		text: 'Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 1
	},
	{
		text: 'quelle est votre température ?',
		choices: `<label for="numerique">degrée</label>
        <input type="number" id="numerique">`,
		number: 2
	},
	{
		text: 'Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 3
	},
	{
		text: 'Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ? ',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 4
	},
	{
		text: 'Avez-vous un mal de gorge apparu ces derniers jours ? ',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 5
	},
	{
		text: 'Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 6
	},
	{
		text: 'Avez-vous une exhausted inhabituelle ces derniers jours ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 7
	},
	{
		text: 'Cette exhausted vous oblige-t-elle à vous reposer plus de la moitié de la journée ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 8
	},
	{
		text: 'Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? ',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 9
	},
	{
		text:
			'Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ? ',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 10
	},
	{
		text: 'Comment vous sentez-vous ? ',
		choices: `<div class="flex-radio">
		<div class="mini">
		<label for="exhausted">Fatigué</label>
		<input type="radio" value="fatigué" id="exhausted" name="choice"><br>
		</div>
		<div class="mini">
		<label for="bien">Bien</label>
		<input type="radio" id="bien" value="bien" name="choice"><br>
		</div>
	</div>
	<div class="flex-radio">
		<div class="mini">
		<label for="trop-exhausted">Trop fatigué</label>
		<input type="radio" value="trop-fatigué" id="trop-exhausted" name="choice"><br>
	</div>
		<div class="mini">
		<label for="moyen">Moyen</label>
		<input type="radio" id="moyen" value="moyen" name="choice"><br>
	</div>
	</div>`,
		number: 11
	},
	{
		text: `Quel est votre âge ?
        Ceci, afin de calculer un facteur de risque spécifique.`,
		choices: `<label for="numerique">ans</label>
        <input type="number" id="numerique" name="choice">`,
		number: 12
	},
	{
		text: `Quel est votre taille ?
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices: `<label for="numerique">cm</label>
        <input type="number" id="numerique" name="choice">`,
		number: 13
	},
	{
		text: `Quel est votre poids ?
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices: `<label for="numerique">kg</label>
        <input type="number" id="numerique" name="choice">`,
		number: 14
	},
	{
		text: `Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="oui" name="choice" >`,
		number: 15
	},
	{
		text: `Êtes-vous diabétique ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 16
	},
	{
		text: `Avez-vous ou avez-vous eu un cancer ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 17
	},
	{
		text: `Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ? ?
        Ou êtes-vous suivi par un pneumologue ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 18
	},
	{
		text: `Avez-vous une insuffisance rénale chronique dialysée ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 19
	},
	{
		text: `Avez-vous une maladie chronique du foie ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 20
	},
	{
		text: `Êtes-vous enceinte ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Non applicable</label>
        <input type="radio" id="sspas" value="non" name="choice" >`,
		number: 21
	},
	{
		text: `Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="non" name="choice" >`,
		number: 22
	},
	{
		text: `Prenez-vous un traitement immunosuppresseur ?
        C’est un traitement qui diminue vos défenses contre les infections.
        Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="non" name="choice">`,
		number: 23
	}
];

const launch = document.querySelector('.launch');
const launchBtn = document.querySelector('.launch__button');
const preambule = document.querySelector('.preambule');
const progress = document.querySelector('.progress');
const questions = document.querySelector('.questions');
const previous = document.querySelector('.buttons__previous');
const next = document.querySelector('.buttons__next');
const questionText = document.querySelector('.questions__text');
const form = document.querySelector('.questions__form');
const answer = document.getElementsByName('choice');
const circles = document.querySelectorAll('.circle');
const reprendre = document.querySelector('.resultat__reprendre');
const resultat = document.querySelector('.resultat');

console.log(circles);

circles[0].style.display = 'block';

let counter = 0;
let values = [];

// launching the test

launchBtn.addEventListener('click', () => {
	launch.classList.add('invisible');
	preambule.classList.add('invisible');
	questions.classList.add('visible');
	progress.classList.add('flex');
	counter = 1;
	renderQuestions(counter);
	addProgress(counter);
	circles[0].style.display = 'none';
	circles[1].style.display = 'block';
});

reprendre.addEventListener('click', () => {
	values = [];
	circles[2].style.display = 'none';
	circles[1].style.display = 'block';
	resultat.style.display = 'none';
	next.textContent = 'Question suivante';

	questions.classList.add('visible');
	progress.classList.add('flex');
	counter = 1;
	renderQuestions(counter);
	addProgress(counter);
});

//returning to the previous question and deleting the last value

previous.addEventListener('click', () => {
	if (counter <= 1) {
		previous.classList.remove('visible');
	}

	if (counter < 23) {
		next.textContent = 'Question suivante';
	}

	if (counter === 3 && values[0] === 'non') {
		values.pop();
		counter -= 1;
		previous.classList.remove('visible');
	}
	if (counter === 9 && values[6] === 'non') {
		values.pop();
		counter -= 1;
	}

	counter -= 1;

	values.pop();

	console.log(values);

	renderQuestions(counter);
	addProgress(counter);
});

//going to next question and adding a value

next.addEventListener('click', () => {
	const detail = document.querySelector('#numerique');

	if (form.children[1].id === 'numerique') {
		if (detail.value === '') {
			alert('please enter valid infos');
			return;
		} else if (counter === 2 && (detail.value < 34 || detail.value > 42)) {
			alert('la temperature doit etre comprise entre 34 et 42');
			return;
		} else if (counter === 12 && detail.value > 110) {
			alert("l'age doit etre inferieure a 110");
			return;
		} else if (counter === 13 && (detail.value < 80 || detail.value > 250)) {
			alert('la taille doit etre comprise entre 80 et 250');
			return;
		} else if (counter === 14 && (detail.value < 20 || detail.value > 250)) {
			alert('le poids doit etre compris entre 20 et 250');
			return;
		} else {
			values.push(detail.value);
			console.log(detail.value);
			counter += 1;
		}
	} else {
		for (i = 0; i < answer.length; i++) {
			if (answer[i].checked) {
				if (counter === 1 && answer[i].value === 'non') {
					values.push(answer[i].value);
					values.push(37);
					counter += 2;
				} else if (counter === 7 && answer[i].value === 'non') {
					values.push(answer[i].value);
					values.push('non');
					counter += 2;
				} else {
					values.push(answer[i].value);
					counter += 1;
				}
			}
		}
	}

	console.log(counter);
	console.log(values);

	if (counter === 23) {
		next.textContent = 'Enregistrer et continuer';
	}
	if (counter > 1) {
		previous.classList.add('visible');
	}

	renderQuestions(counter);
	addProgress(counter);

	getResult(values, counter);
});

//rendering questions and inputs in the UI from their objects

function renderQuestions(step) {
	if (step < 24) {
		let currentQuestion = questionsList.find((ques) => {
			return ques.number == step;
		});

		questionText.textContent = currentQuestion.text;
		form.innerHTML = currentQuestion.choices;
	}
}

function addProgress(valeur) {
	progress.firstElementChild.firstElementChild.style.width = `${100 / 23 * valeur}%`;
	progress.lastElementChild.textContent = `${valeur}/23`;
}

//function that gets the result of the test

function getResult(list, counter) {
	let pro = list.slice(11);
	let symp = list.slice(0, 5);

	//symptomes positive

	let fievre = list[0] === 'oui';
	let toux = list[2] === 'oui';
	let malGorge = list[4] === 'oui';
	let courbatures = list[3] === 'oui';
	let diarrhee = list[5] === 'oui';

	//symptomes négatives

	let noFievre = list[0] === 'non';
	let noToux = list[2] === 'non';
	let noMalGorge = list[4] === 'non';
	let noCourbatures = list[3] === 'non';
	let noDiarrhee = list[5] === 'non';

	//pas de symptomes

	let noSypms = !symp.includes('oui');

	//facteurs pronostiques

	let facteurPro = pro.includes('oui');
	let nofacteurPro = !pro.includes('oui');

	//gravité mineures positives

	let highTemp = list[1] > 39;
	let exhausted = list[7] === 'oui';
	let sickness = list[10] === 'fatigué' || list[10] === 'trop-fatigué';

	//gravité mineures négatives

	let nohighTemp = list[1] < 39;
	let noexhausted = list[7] === 'non';
	let nosickness = list[10] === 'bien' || list[10] === 'moyen';

	// gravité majeures positives

	let lowTemp = list[1] < 35.4;
	let geneResp = list[9] === 'oui';
	let foodDiff = list[8] === 'oui';

	// gravité majeures négatives

	let nolowTemp = list[1] > 35.4;
	let nogeneResp = list[9] === 'non';
	let nofoodDiff = list[8] === 'non';

	// paramétres

	let age = list[11];

	if (counter === 13 && age < 15) {
		circles[1].style.display = 'none';
		circles[2].style.display = 'block';
		questions.classList.remove('visible');
		progress.classList.remove('flex');
		resultat.style.display = 'block';

		resultat.children[1].lastElementChild.textContent =
			'Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15';
	}

	if (counter === 24) {
		circles[1].style.display = 'none';
		circles[2].style.display = 'block';
		questions.classList.remove('visible');
		progress.classList.remove('flex');
		resultat.style.display = 'block';

		if (fievre || (toux && malGorge) || (toux && courbatures)) {
			if (lowTemp || geneResp || foodDiff) {
				resultat.children[1].lastElementChild.textContent = 'veuillez appeler le numéro 141';
			} else if (
				(facteurPro &&
					nogeneResp &&
					nofoodDiff &&
					nolowTemp &&
					((highTemp && exhausted && sickness) ||
						(highTemp && exhausted) ||
						(exhausted && sickness) ||
						(highTemp && sickness))) ||
				(facteurPro && nogeneResp && nofoodDiff && nolowTemp && highTemp && noexhausted && nosickness) ||
				(facteurPro && nogeneResp && nofoodDiff && nolowTemp && exhausted && nohighTemp && nosickness) ||
				(facteurPro && nogeneResp && nofoodDiff && nolowTemp && sickness && nohighTemp && noexhausted)
			) {
				resultat.children[1].lastElementChild.textContent = 'veuillez appeler le numéro 141';
			} else if (facteurPro && nohighTemp && noexhausted && nosickness && nogeneResp && nofoodDiff && nolowTemp) {
				resultat.children[1].firstElementChild.textContent =
					'téléconsultation ou médecin généraliste ou visite à domicile ';
				resultat.children[1].lastElementChild.textContent =
					'appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent';
			} else if (
				(age > 50 &&
					age <= 69 &&
					(nofacteurPro && nohighTemp && noexhausted && nosickness && nogeneResp && nofoodDiff && nolowTemp)) ||
				(nofacteurPro && nolowTemp && nogeneResp && nofoodDiff && (highTemp || exhausted || sickness))
			) {
				resultat.children[1].firstElementChild.textContent =
					'téléconsultation ou médecin généraliste ou visite à domicile ';
				resultat.children[1].lastElementChild.textContent =
					'appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent';
			} else if (
				age < 50 &&
				nofacteurPro &&
				nohighTemp &&
				noexhausted &&
				nosickness &&
				nogeneResp &&
				nofoodDiff &&
				nolowTemp
			) {
				resultat.children[1].lastElementChild.textContent =
					'nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes';
			} else {
				resultat.children[1].lastElementChild.textContent =
					'Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil.';
			}
		} else if (
			(fievre && noToux && noDiarrhee) ||
			(noFievre && toux && noMalGorge && noCourbatures) ||
			(noFievre && noToux && malGorge) ||
			(noToux && courbatures) ||
			(noFievre && diarrhee)
		) {
			if (nohighTemp && noexhausted && nosickness && nogeneResp && nofoodDiff && nolowTemp) {
				resultat.children[1].lastElementChild.textContent =
					'Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.';
			} else if (
				(nofacteurPro && nogeneResp && nofoodDiff && nolowTemp && highTemp && noexhausted && nosickness) ||
				(nofacteurPro && nogeneResp && nofoodDiff && nolowTemp && exhausted && nohighTemp && nosickness) ||
				(nofacteurPro && nogeneResp && nofoodDiff && nolowTemp && sickness && nohighTemp && noexhausted) ||
				(facteurPro && nogeneResp && nofoodDiff && nolowTemp && nosickness && nohighTemp && noexhausted)
			) {
				resultat.children[1].lastElementChild.textContent =
					'Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141. ';
			} else {
				resultat.children[1].lastElementChild.textContent =
					'Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil.';
			}
		} else {
			resultat.children[1].lastElementChild.textContent =
				'Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil.';
		}
	}
}
