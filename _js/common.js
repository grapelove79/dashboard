/**
 * @description Gnb 활성화
 */
// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('.header-global-nav a');
// navLinks.forEach(link => {
//   console.log(link.href.includes(`${activePage}`), '1')
// if(link.href.includes(`${activePage}`)){
//   link.classList.add("active");
// }
//  })

/**
 * @description 로그인 페이지 유효성 검사
 */
function valid_check(type) {
	const loginForm = document.loginForm;
	const loginId = loginForm.loginId;
	const password = loginForm.password;
	const submit = loginForm.submit;
	const idBox = document.querySelector(".input-box.id");
	const pwBox = document.querySelector(".input-box.pw");
	const errTextID = document.querySelector(".text-valid.id");
	const errTextPw = document.querySelector(".text-valid.pw");
	const errTextAll = document.querySelector(".text-valid.all");

	if (type == "id") {
		if (loginId.value == "") {
			errTextID.classList.add("active");
			idBox.classList.add("active");
			return false;
		}
		errTextID.classList.remove("active");
		idBox.classList.remove("active");
	}

	if (type == "pw") {
		if (password.value == "") {
			errTextPw.classList.add("active");
			pwBox.classList.add("active");
			return false;
		}
		errTextPw.classList.remove("active");
		pwBox.classList.remove("active");
	}

	if (type == "submit") {
		if (loginId.value == "") {
			errTextID.classList.add("active");
			idBox.classList.add("active");
			return false;
		}
		errTextID.classList.remove("active");
		idBox.classList.remove("active");

		if (password.value == "") {
			errTextPw.classList.add("active");
			pwBox.classList.add("active");
			return false;
		}
		errTextPw.classList.remove("active");
		pwBox.classList.remove("active");

		if (loginId.value == "" || password.value == "") {
			errTextAll.classList.add("active");
			return false;
		}
	}

	return true;
}

/**
 * @description 셀렉트 박스
 */
const selectBox = document.querySelectorAll(".select-box");
for (let i = 0; i < selectBox.length; i++) {
	const labels = selectBox[i].querySelectorAll(".option-label");
	console.log(labels);
	const options = selectBox[i].querySelectorAll(".option-item");

	const handleSelect = function (item) {
		labels.forEach(function (label) {
			label.innerHTML = item.textContent;
			label.parentNode.classList.remove("active");
		});
	};
	options.forEach(function (option) {
		option.addEventListener("click", function () {
			handleSelect(option);
		});
	});

	labels.forEach(function (label) {
		label.addEventListener("click", function () {
			if (label.parentNode.classList.contains("active")) {
				label.parentNode.classList.remove("active");
			} else {
				label.parentNode.classList.add("active");
			}
		});
	});
}

// const label = document.querySelector(".option-label");
// const options = document.querySelectorAll(".option-item");
// const handleSelect = function (item) {
//   label.innerHTML = item.textContent;
//   label.parentNode.classList.remove("active");
// };
// options.forEach(function (option) {
//   option.addEventListener("click", function () {
//     handleSelect(option);
//   });
// });

// label.addEventListener("click", function () {
//   if (label.parentNode.classList.contains("active")) {
//     label.parentNode.classList.remove("active");
//   } else {
//     label.parentNode.classList.add("active");
//   }
// });

/**
 * @description faq 리스트 확장 기능
 */
document.addEventListener("DOMContentLoaded", () => {
	const listExpandBtn = document.querySelectorAll(".list.q");
	listExpandBtn.forEach((el) => {
		el.addEventListener("click", () => {
			let eventTarget = el.closest("li").querySelector(".list.a");
			eventTarget.classList.toggle("active");
		});
	});
});

/**
 * @description 결과 탭메뉴
 */
const tabItem = document.querySelectorAll(".result-tap-menu li");
const tabContent = document.querySelectorAll(".result-list");

tabItem.forEach((item) => {
	item.addEventListener("click", tabHandler);
});

function tabHandler(item) {
	const tabTarget = item.currentTarget;
	const target = tabTarget.dataset.tab;

	tabItem.forEach((title) => {
		title.classList.remove("active");
	});
	tabContent.forEach((target) => {
		target.classList.remove("active");
	});

	document.querySelector("#" + target).classList.add("active");
	tabTarget.classList.add("active");
}

/**
 * @description modal open close
 */
function openModal(id) {
	$("#" + id).show();
}

function closeModal(id) {
	$("#" + id).hide();
}

/**
 * @description table 전체 체크
 */

// const checkboxTable = document.querySelectorAll(".result-list");
// checkboxTable.forEach((checkBox) => {
//   const checkboxAll  = checkBox.querySelectorAll(".check-box-all");
//     checkboxAll.forEach((check)=> {
//       check.addEventListener("click", () => {
//       console.log(check.closest("table"),'1');
//       console.log('1');
//       check.closest("table").querySelectorAll(".check-box").forEach((el)=> {
//         el.
//         if (el.checked) {
//           el.disabled = true;
//         }else {
//           el.disabled = false;
//         }
//       })

//     });
//   });
// });

$(".table_checkbox-all").on("click", function () {
	if ($(this).is(":checked")) {
		$(this).closest("table").find(".table_checkbox").prop("checked", true);
	} else {
		$(this).closest("table").find(".table_checkbox").prop("checked", false);
	}
});

// 관리자 홈 - 지점별 필터
// $("ul.admin-branch-tab li").click(function () {
// 	if ($(this).attr("id") == "all") {
// 		$("ul.admin-branch-tab li").removeClass("on");
// 		$(this).addClass("on");
// 	} else {
// 		$("ul.admin-branch-tab li#all").removeClass("on");
// 		$(this).toggleClass("on");
// 	}

// 	// 선택된 필터 없으면 전지점 선택
// 	if ($("ul.admin-branch-tab li.on").length == 0) {
// 		$("ul.admin-branch-tab li#all").addClass("on");
// 	}
// });

// 관리자 홈 - 세부 탭메뉴 공통
$("ul.tab li").click(function () {
	let activeTab = $(this).attr("data-tab");
	// $(this).removeClass("on");
	$(this).siblings().removeClass("on");
	$(this).parents("ul.tab").siblings(".tab-content").removeClass("on");
	$(this).addClass("on");
	$(this)
		.parents("ul.tab")
		.siblings(".tab-content#" + activeTab)
		.addClass("on");
});

$('input[name="range-date"]').daterangepicker(
	{
		locale: {
			format: "YYYY-MM-DD",
			separator: " ~ ",
			applyLabel: "확인",
			cancelLabel: "취소",
			fromLabel: "From",
			toLabel: "To",
			customRangeLabel: "Custom",
			weekLabel: "W",
			daysOfWeek: ["월", "화", "수", "목", "금", "토", "일"],
			monthNames: [
				"1월",
				"2월",
				"3월",
				"4월",
				"5월",
				"6월",
				"7월",
				"8월",
				"9월",
				"10월",
				"11월",
				"12월",
			],
			firstDay: 1,
		},
		startDate: "2020-10-21",
		endDate: "2020-10-23",
		drops: "down",
	},
	function (start, end, label) {}
);
