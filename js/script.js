(function(){

	var imagesList = ["birds1.jpg", "birds2.jpg", "birds3.jpg", "birds4.jpg", "birds5.jpg", "birds6.jpg"];

	function init () {
		loadImg();
	}

	function loadImg(){
		var img = new Image();

		img.onload = function() {
			animaInit();
		};

		img.onerror = function() {
			console.log("erro no carregamento da imagem");
			animaInit();
		};

		var pos = Math.floor(Math.random() * 5);
		img.src = "img/" + imagesList[pos];
		$("#img-container").attr("src", img.src);
	}

	function animaInit(){
		posImg();
		addListeners();
		$('#wrapper').fadeTo(600, 1, function(){
			$('#content').delay(200).fadeTo(600, 1);
		});
	}

	//set size of bg image
	function posImg(){
		var $img_bg = $('#bg img');
		var a = ($(window).width() / $img_bg.width());
		var b = ($(window).height()/ $img_bg.height());
		var c = Math.max(a, b);

		$img_bg.width($img_bg.width()*c);
		$img_bg.height($img_bg.height()*c);
	}

	//add HTMLListeners
	function addListeners(){
		$(window).resize(function(){
			posImg();
		});

		$('#projetos li, #contatos a')
			.on("mouseover", function(){
				$(this).siblings().stop().animate({ opacity: '0.6' }, 300);
			})
			.on("mouseout", function(){
				$(this).siblings().stop().animate({ opacity: '1' }, 400);
		});
	}

	// on document ready
	$(document).ready(function(){
		init();
	});

})();



