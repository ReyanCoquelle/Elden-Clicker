						let clicke = 0;
						let Rune = 0;
						let puissanceduclick = 1;

						let Achats1 = 25;
						let Achats12 = 50;
						let Achats13 = 75;
						
						let Bonus1 = 0;
						let Bonus12 = 0;
						let Bonus13 = 0;

						let Affichage1 = 0;
						let Affichage12 = 0;
						let Affichage13 = 0;

						let Achats2 = 25;
						let Achats22 = 50;
						let Achats23 = 75;

						let Bonus2 = 0;
						let Bonus22 = 0;
						let Bonus23 = 0;

						let Affichage2 = 0;
						let Affichage22 = 0;
						let Affichage23 = 0;

						

						function Runepassive1() {
							if (Rune >= Achats1){
								Rune = Rune - Achats1;
								Bonus1 = Bonus1+1;
								Affichage1 = Affichage1+1
								
								
								
								document.getElementById("Rune").innerHTML = Rune ;
								document.getElementById("Affichage1").innerHTML = Affichage1;
								
								
												}

												}
						function Runepassive2() {
							if (Rune >= Achats12){
								Rune = Rune - Achats12;
								Bonus12 = Bonus12+5;
								Affichage12 = Affichage12+1
								
								document.getElementById("Achats12;").innerHTML = Achats12; 
								document.getElementById("Rune").innerHTML = Rune ;
								document.getElementById("Affichage12").innerHTML = Affichage12;
								
												}
											}
						function Runepassive3() {
							if (Rune >= Achats13){
								Rune = Rune - Achats13;
								Bonus13 = Bonus13+15;
								Affichage13 = Affichage13+1

								

								document.getElementById("Rune").innerHTML = Rune ;
								document.getElementById("Affichage13").innerHTML = Affichage13;
								
												}
											}

						function NouvelleEpée1() {
							if (Rune >= Achats2){
								Rune = Rune - Achats2;
								Bonus2 = Bonus2+1;
								puissanceduclick = puissanceduclick + Bonus2 ;
								Affichage2 = Affichage2+1
								

								document.getElementById("Rune").innerHTML = Rune ;
								document.getElementById("Affichage2").innerHTML = Affichage2;

							}
						}
						function NouvelleEpée2() {
							if (Rune >= Achats22){
								Rune = Rune - Achats22;
								Bonus22 = Bonus22+9;
								puissanceduclick = puissanceduclick + Bonus22 ;
								Affichage22= Affichage22+1
								

								document.getElementById("Rune").innerHTML = Rune ;
								document.getElementById("Affichage22").innerHTML = Affichage22;

							}
						}
						function NouvelleEpée3() {
							if (Rune >= Achats23){
								Rune = Rune - Achats23;
								Bonus23 = Bonus23+14;
								puissanceduclick = puissanceduclick + Bonus23 ;
								Affichage23 = Affichage23+1
								

								document.getElementById("Rune").innerHTML = Rune ;
								document.getElementById("Affichage23").innerHTML = Affichage23;

							}
						}
						
		                 function refresh (amount) {
		                 	scroreparseconde = Rune + montant 
		                 }
						




						
		
						function ajout(montant) {
						console.log("Click")
						clicke = clicke + 1;
						Rune = Rune + montant;
						
						document.getElementById("conteur").innerHTML = clicke;
						document.getElementById("Rune").innerHTML = Rune;

										 }
						setInterval(function() {
							Rune = Rune + Bonus1 ;
							Rune = Rune + Bonus12 ;
							Rune = Rune + Bonus13 ;
							 }, 1000);

						







		
	