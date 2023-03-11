/**
 * @header 불러오기
 */
fetch("../../_inc/dashboard-header.html")
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		document.querySelector("header").innerHTML = data;

		/**
		 * @description Gnb 활성화
		 */
		const activePage = window.location.pathname;
		const navLinks = document.querySelectorAll(".header-global-nav > li > a");
		const subMenu = document.querySelectorAll(".sub-menu li a");
		const asideBox = document.querySelectorAll(".aside-nav");
		const home = document.querySelector(".home");
		const sales = document.querySelector(".sales");
		const patient = document.querySelector(".patient");
		const dailyReport = document.querySelector(".daily-report");
		const setting = document.querySelector(".setting");

		navLinks.forEach((link) => {
			if (link.href.includes(`${activePage}`)) {
				link.classList.add("active");
			}
		});

		subMenu.forEach((link) => {
			if (link.href.includes(`${activePage}`)) {
				link.classList.add("active");
			}
		});

		// 일일결산 보고서
		if (dailyReport != null) {
			navLinks[4].classList.add("active");
		}

		/* LNB 활성화 */
		asideBox.forEach((box) => {
			/* LNB 클릭시 해당 gnb 활성화 */
			for (let i = 0; i < navLinks.length; i++) {
				if (box.parentNode == home) {
					navLinks[0].classList.add("active");
				}
				if (box.parentNode == sales) {
					navLinks[1].classList.add("active");
				}
				if (box.parentNode == patient) {
					navLinks[2].classList.add("active");
				}
				if (box.parentNode == setting) {
					navLinks[6].classList.add("active");
				}
			}
			const asideLinks = box.querySelectorAll(".aside-local-nav a");
			asideLinks.forEach((alink) => {
				if (alink.href.includes(`${activePage}`)) {
					alink.classList.add("active");
				}
			});
		});

		$(".header .header-global-nav > li")
			.mouseenter(function () {
				$(this).children("ul.sub-menu").stop().slideDown();
			})
			.mouseleave(function () {
				$(this).children("ul.sub-menu").stop().slideUp();
			});
	});
