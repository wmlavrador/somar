var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	// Se a quantidade de slides, for maior que o índice. retorna o índice para o primeiro.
	if (n > x.length) {slideIndex = 1} 
	// caso o índice fique menor que 1, retorna o índice para o último slide.
	if (n < 1) {slideIndex = x.length} ;

	//   um loop em todos slides, para esconde-los
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none"; 
	}
	// depois de ocultar, exibimos apenas o slide igual ao índice
	x[slideIndex-1].style.display = "block"; 
}