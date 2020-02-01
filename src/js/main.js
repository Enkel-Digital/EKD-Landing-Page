// eslint-disable-next-line no-undef
AOS.init({
	duration: 800,
	easing: "slide",
	once: true
});


// eslint-disable-next-line no-undef
jQuery(document).ready(function ($) {
	"use strict";

	function siteMenuClone() {

		$(".js-clone-nav").each(function () {
			var $this = $(this);
			$this.clone().attr("class", "site-nav-wrap").appendTo(".site-mobile-menu-body");
		});


		setTimeout(function () {

			var counter = 0;
			$(".site-mobile-menu .has-children").each(function () {
				var $this = $(this);

				$this.prepend("<span class=\"arrow-collapse collapsed\">");

				$this.find(".arrow-collapse").attr({
					"data-toggle": "collapse",
					"data-target": "#collapseItem" + counter,
				});

				$this.find("> ul").attr({
					"class": "collapse",
					"id": "collapseItem" + counter,
				});

				counter++;

			});

		}, 1000);

		$("body").on("click", ".arrow-collapse", function (e) {
			var $this = $(this);
			if ($this.closest("li").find(".collapse").hasClass("show")) {
				$this.removeClass("active");
			} else {
				$this.addClass("active");
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($("body").hasClass("offcanvas-menu")) {
					$("body").removeClass("offcanvas-menu");
				}
			}
		});

		$("body").on("click", ".js-menu-toggle", function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($("body").hasClass("offcanvas-menu")) {
				$("body").removeClass("offcanvas-menu");
				$this.removeClass("active");
			} else {
				$("body").addClass("offcanvas-menu");
				$this.addClass("active");
			}
		});

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($("body").hasClass("offcanvas-menu")) {
					$("body").removeClass("offcanvas-menu");
				}
			}
		});
	}
	siteMenuClone();

	function siteCarousel() {
		if ($(".nonloop-block-13").length > 0) {
			$(".nonloop-block-13").owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 0,
				autoplay: true,
				nav: true,
				navText: ["<span class=\"icon-arrow_back\">", "<span class=\"icon-arrow_forward\">"],
				responsive: {
					600: {
						margin: 0,
						nav: true,
						items: 2
					},
					1000: {
						margin: 0,
						stagePadding: 0,
						nav: true,
						items: 3
					},
					1200: {
						margin: 0,
						stagePadding: 0,
						nav: true,
						items: 4
					}
				}
			});
		}

		$(".slide-one-item").owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			autoplay: true,
			pauseOnHover: false,
			nav: true,
			navText: ["<span class=\"icon-keyboard_arrow_left\">", "<span class=\"icon-keyboard_arrow_right\">"]
		});

		$(".slide-one-item-alt").owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			smartSpeed: 700,
			margin: 0,
			autoplay: true,
			pauseOnHover: false,

		});




		$(".custom-next").click(function (e) {
			e.preventDefault();
			$(".slide-one-item-alt").trigger("next.owl.carousel");
		});
		$(".custom-prev").click(function (e) {
			e.preventDefault();
			$(".slide-one-item-alt").trigger("prev.owl.carousel");
		});

	}
	siteCarousel();

	function siteStellar() {
		$(window).stellar({
			responsive: false,
			parallaxBackgrounds: true,
			parallaxElements: true,
			horizontalScrolling: false,
			hideDistantElements: false,
			scrollProperty: "scroll"
		});
	}
	siteStellar();

	function siteDatePicker() {

		if ($(".datepicker").length > 0) {
			$(".datepicker").datepicker();
		}

	}
	siteDatePicker();

	function siteSticky() {
		$(".js-sticky-header").sticky({ topSpacing: 0 });
	}
	siteSticky();

	// navigation
	function OnePageNavigation() {
		var navToggler = $(".site-menu-toggle");
		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function (e) {
			e.preventDefault();

			var hash = this.hash;

			$("html, body").animate({
				"scrollTop": $(hash).offset().top
			}, 600, "easeInOutCirc", function () {
				window.location.hash = hash;
			});

		});
	}
	OnePageNavigation();

	function siteScroll() {
		$(window).scroll(function () {

			var st = $(this).scrollTop();

			if (st > 100) {
				$(".js-sticky-header").addClass("shrink");
			} else {
				$(".js-sticky-header").removeClass("shrink");
			}

		});

	}
	siteScroll();

});


// eslint-disable-next-line no-unused-vars
function submitBtn(e) {
	// Prevent default behavior of reloading the page
	e.preventDefault();

	const formElement = (elementName) => document.forms["contact_form"].elements[elementName].value;

	const form = {
		"fname": formElement("fname"),
		"lname": formElement("lname"),
		"email": formElement("email"),
		"subject": formElement("subject"),
		"message": formElement("message"),
		"website": window.location.href // Get the website that the user is on, either consultant page or business page.
	};

	// If neither name is given, or email is not given
	if ((!form.fname && !form.lname) || !form.email) {
		// Alert and ask user to redo it
		alert("Please fill in missing items. At least fill in either your first or last name, and provide a email!");
		return; // Break out of the function
	}

	// Save detail and send emails out
	postData("https://us-central1-ekd-landing-page.cloudfunctions.net/contactForm", form)
		.then(console.log)
		.catch((error) => {
			console.error(error);
			/** @todo Show user and tell user to contact us directly */
		});
}

// Example POST method implementation:
async function postData(url, data) {
	console.log(url, data);

	// Default options are marked with *
	await fetch(url, {
		method: "POST",
		// mode: "cors", // no-cors, *cors, same-origin
		mode: "no-cors",
		cache: "no-cache",
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
			"Content-Type": "application/json"
		},
		referrerPolicy: "no-referrer", // no-referrer, *client
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
}