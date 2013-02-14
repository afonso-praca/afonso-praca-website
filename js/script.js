(function(){

	// on document ready
	$(document).ready(function(){
		init();
	});

	function init () {
		loadImg();
	}

	function loadImg(){
		var img = new Image();

        img.onload = function() {
			animaInit();
        }

        img.onerror = function() {
            console.log("erro no carregamento da imagem");
            animaInit();
        }

        img.src = "img/birds2.jpg";
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

})();



