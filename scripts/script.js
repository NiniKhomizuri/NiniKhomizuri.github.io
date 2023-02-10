var el = document.getElementById("element");
var p = new PageScaleJs(el, {
  width: 1900,
  height: 1080,
  to: 599,
});
window.addEventListener("resize", update);
update();
function update() {
  var wel = document.getElementById("windowsize");
  if (wel) {
    wel.innerHTML = "" + window.innerWidth + "x" + window.innerHeight;
  }
}


var language = {
	ka: {
		nino: "ნინო ხომიზური",
		grap: "გრაფიკული დიზაინერი",
		homeTag: "მთავარი",
		aboutMe: "ჩემს შესახებ",
		portfolioTag: "ნამუშევრები",
		contactTag: "კონტაქტები",
		dow: "გადმოწერე CV",
		aboutnino: "ჩემს შესახებ",
		textpar: "გამარჯობა, მე მქვია ნინი, ვარ სერთიფიცირებული უმცროსი გრაფიკული დიზაინერი საქართველოდან, ვარ შრომისმოყვარე და მიზანდასახული ადამიანი. 15 წლის ასაკში  უკვე ავითვისე Adobe Photoshop, Illustrator და InDesign. ასევე მაქვს 3D მოდელირების ცოდნა - TinkerCad, sketchUp, ალგორითმების საფუძვლები - Scratch, SEO და ვებ მარკეტინგის საფუძვლები, BBC-Micro bit, ციფრული ფოტოგრაფია, ნახატი, IT Start, PhotoLab, პროგრამირება Python-ზე - Junior, პროექტი, თეორია. დიზაინი, ვებ დიზაინი - უმცროსი (HTML & CSS) ",
		textpar2: "ასევე ამჟამად ვარ ბიზნესისა და ტექნოლოგიების უნივერსიტეტის სტუდენტი საქართველოში და მივიღებ ბაკალავრის ხარისხს ბიზნესის მენეჯმენტში",
		certificat1: "გადმოწერე სერთიფიკატი",
		portfolio: "პორტფოლიო",
		ilustration: "ილუსტრაციები",
		pagedesign: "პოსტერების დიზაინი",
		brand: "ბრენდინგი",
		magazine: "ჟურნალის დიზაინი",
		retouch: "ფოტო მანიპულაცია და რეტუშირება",
	}
}
if (window.location.hash) {
	if (location.hash.substring(1) === "") {
		// remove all hash tags and reload page to default text
		window.location.href = window.location.toString().split(/\?|#/)[0];

	}
	else if (location.hash.substring(1) === "ka") {
		window.onload = function () {
			$('body').css({ 'font-family': 'BPGTech11' })
			// $('.dropdown-item').css({ 'font-family': 'RetroTeam' })
			$('.eng').css({ 'font-family': 'RetroTeam' })
			$(".nino").text(language.ka.nino);
			$(".nino").css({ "font-size": '95px' });
			$(".grap").text(language.ka.grap);
			$(".grap").css({ "font-size": '85px' });
			$(".homeTag").text(language.ka.homeTag);
			$(".homeTag").css({ "font-size": '50px' });
			$(".aboutMe").text(language.ka.aboutMe);
			$(".aboutMe").css({ "font-size": '50px' });
			$(".portfolioTag").text(language.ka.portfolioTag);
			$(".portfolioTag").css({ "font-size": '50px' });
			$(".contactTag").text(language.ka.contactTag);
			$(".contactTag").css({ "font-size": '50px' });
			$(".dow").text(language.ka.dow);
			$(".dow").css({ "font-size": '65px' });
			$(".dow").css({ "left": '1592px' });
			$(".dow").css({ "width": '259px' });
			$(".aboutnino").text(language.ka.aboutnino);
			$(".aboutnino").css({ "padding-top": "27px" });
			$(".textpar").text(language.ka.textpar);
			$(".textpar").css({ "top": '225px' });
			$(".textpar2").text(language.ka.textpar2);
			$(".textpar2").css({ "top": '690px' });
			$(".certificat1").text(language.ka.certificat1);
			$(".portfolio").text(language.ka.portfolio);
			$(".portfolio").css({ "padding-bottom": '10px' });
			$(".ilustration").text(language.ka.ilustration);
			$(".ilustration").css({ "padding-bottom": '10px' });
			$(".pagedesign").text(language.ka.pagedesign);
			$(".pagedesign").css({ "padding": '20px' });
			$(".pagedesign").css({ "font-size": '130px' });
			$(".pagedesign").css({ "left": '290px' });
			$(".brand").text(language.ka.brand);
			$(".brand").css({ "padding-bottom": '10px' });
			$(".magazine").text(language.ka.magazine);
			$(".brand").css({ "padding-bottom": '10px' });
			$(".retouch").text(language.ka.retouch);
			$(".retouch").css({ "font-size": '66px' });
			$(".contactHeader").text(language.ka.contactTag);
			$(".contactHeader").css({ "font-size": '90px' });
			$('.gmail').css({ 'font-family': 'RetroTeam' })
			$('.behance').css({ 'font-family': 'RetroTeam' })
			$('.number').css({ 'font-family': 'RetroTeam' })
			$('.instagram').css({ 'font-family': 'RetroTeam' })

			


		}
	}
}

$('[data-callLang]').on('click', function() {
	//change flag to selected language
	
	if ($(this).attr('data-callLang') === "eng") {
	  window.location.href = window.location.toString().split(/\?|#/)[0];
	  return false;
	}
	
	window.location.hash = $(this).attr('data-callLang')
	location.reload(true);
  });
  