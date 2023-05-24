$(document).ready(function(){
	$(function(){
		new WOW().init();
	});

	//$('.select').selectpicker();

	/*$(function(){
		$("#conf").click(function(e){

			var ingr = [];
			$.each($(".select option:selected"), function(){
				ingr.push($(this).val()); //todos os itens selecionados são guardados no array ingr
			});

			var conj = ingr.join("%' and ingredientes like '%"); //junta o array numa só linha para fazer a pesquisa na DB máis rápida e fácil

			$.post('load.php', {conj: conj}, function(data){
		     $('.receitas-show .show').html(data);
			});
		});
	});*/

	/*$(function(){
		$.scrollIt({
			upKey: 38,
			downKey: 40,
			easing: 'linear',
			scrollTime: 600,
			activeClass: 'active',
			topOffset: 0
		});
	});*/

	var selector = $(".hero");

	selector.owlCarousel({
		autoplay: true,
		//slideTransition: 'linear',
		autoplayTimeout: 3500,
		autoplaySpeed: 250,
		autoplayHoverPause: true,
		loop: true,
		margin: 0,
		dots: false,
		nav: false,
		items: 1,
		onInitialize: function() {
			selector.trigger('stop.owl.autoplay');
			setTimeout(function() {selector.trigger('play.owl.autoplay')}, 20)
		},
	})

	/*$("#suggestion").click(function(){
		$('.receita-recomendada .show').load('load-random.php');
		$(this).textContent('Outra Por Favor😲');
	});*/
});
