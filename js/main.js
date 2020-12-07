const cssroot = getComputedStyle(document.documentElement);
const namaBulan = ["Jan", "Feb", "Mar","Apr","Mei","Jun","Jul","Agt", "Sep", "Okt", "Nov", "Des"];
const namaHari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
const today = new Date();

// fungsi untuk get minggu kemarin
function getLastWeek(num) {
	var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (7 * num));
	return lastWeek.getUTCDate().toString() + ", " + namaBulan[lastWeek.getMonth()];
}

// fungsi untuk get hari kemarin
function getKemarin(num){
  let x = new Date(today.getFullYear(), today.getMonth(), today.getDate()- num);
  return x;
}

// fungsi untuk get bulan dan tanggal
function dateMonth(num){  return namaHari[getKemarin(num).getDay()] + " (" + getKemarin(num).getDate() + "/" + (getKemarin(num).getMonth()+1) + ")"; }

// Form input buka/tutup
function dbFormClose() 
{
	var dform = document.querySelector('.dashboard-form');
	var bodyE = document.body;
	
	bodyE.style.overflow  = 'auto';
	dform.style.opacity = 0;
	setTimeout(() => {
		dform.style.display = 'none';
	}, 200);
	
}

function dbFormOpen() 
{ 	
	var dform = document.querySelector('.dashboard-form');
	var bodyE = document.body;
	
	dform.style.display = 'flex';
	
	setTimeout(() => {
		dform.style.opacity = 1;
		dform.style.bottom = 0;
	}, 200);
	
	var now = new Date();

	var day = ("0" + now.getDate()).slice(-2);
	var month = ("0" + (now.getMonth() + 1)).slice(-2);

	var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

	$("#tg-trans").val(today);
}

function waktu()
{
	// Fungsi untuk menyapa user
	var d = new Date();
	var x = d.getHours();
	
	if(x > 4 && x <= 10)
		document.write('Selamat Pagi, ');
	else if(x > 10 && x <= 14)
		document.write('Selamat Siang, ');
	else if(x > 14 && x <= 18)
		document.write('Selamat Sore, ');
	else if(x > 18 || x <= 4)
		document.write('Selamat Malam, ');
}

function init()
{
	$('.add-btn').click(function(){
		console.log('Log : Buka Modal');
		$('.modal').addClass('show');
		setTimeout(() => {
			$('.modal').css('opacity',1);
		}, 500);
	});
	
	$('.add-btn-nav').click(function(){
		console.log('Log : Buka Modal');
		$('.modal').addClass('show');
		setTimeout(() => {
			$('.modal').css('opacity',1);
		}, 500);
	});

	$('.close-btn').click(function() {
		console.log('Log : Tutup Modal');
		$('.modal').removeClass('show');

		setTimeout(() => {
			$('.modal').css('opacity', 0);
		}, 500);
	})

	window.onclick = function(e) {
		if(e.target == document.querySelector('.modal'))
		{
			console.log('Log : Tutup Modal');
			$('.modal').removeClass('show');
	
			setTimeout(() => {
				$('.modal').css('opacity', 0);
			}, 500);
		}
	}
}