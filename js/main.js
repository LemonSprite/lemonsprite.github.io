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

//function init()
//{	
//	
//	// Loader Script
//	const loader = document.querySelector('.loader');
//	const main = document.querySelector('.wrapper');
//	
//	
//	// cek kalo cookies udh di set
//	if(getCookie('startup') == 1)
//	{	
//		// kalo udh diset langsung masuk beranda
//		main.style.display = 'block';
//		setTimeout(()=>(main.style.opacity = 1), 50);
//		
//	} else {
//		// Kalo belum diset, loader muncul
//		// set display jadi flex, karena di-css 'none'
//		loader.style.display = 'flex';
//		
//		// Eksekusi
//		setTimeout(() => {
//			loader.style.opacity = 0;
//			loader.style.display = 'none';
//			
//			main.style.display = 'block';
//			setTimeout(()=>(main.style.opacity = 1), 50)
//		}, 10000);
//		
//		// Set cookies supaya loader gak looping
//		setCookies('startup',1,1,'/');
//	}
//	
//	
//	
//	// Chart Script
//	var clBerandaOpt = {
//		chart: {
//			type: 'line',
//			zoom: {
//				enabled: false	
//			},
//			height: 300,
//		},
//		series: [{
//			name: 'Saldo',
//			data: [
//				25000,
//				200000,
//				120000,
//				50000,
//				90000
//			]
//		}],
//		yaxis: {
//			labels: {
//				formatter: function (value) {
//					var x = value / 1000;
//					if(x < 1000000)
//						return x + ' RB';
//					else if(x >= 1000000 && x < 1000000000)
//						return x + ' JT';
//					else if(x >= 1000000000)
//						return x + ' M';
//				}
//			}
//		},
//		xaxis: {
//			categories: [
//				getLastWeek(5),
//				getLastWeek(4),
//				getLastWeek(3),
//				getLastWeek(2),
//				getLastWeek(1)
//			]
//		},
//		tooltip: {
//			enabled: true
//		},
//		stroke: {
//			curve: 'smooth',
//			colors: [
//				cssroot.getPropertyValue('--abu-dark').toString()
//			]
//		}
//	}
//	var clBeranda = new ApexCharts(document.querySelector(".clBeranda"), clBerandaOpt);
//	clBeranda.render();
//	
//	var cbBerandaOpt = {
//		series: [{
//			name: 'Pemasukan',
//        	data: [3000, 2000, 4000, 50000, 60000, 100000, 21000]
//        }, {
//			name: 'Pengeluaran',
//			data: [53000, 32000, 3300, 5200, 13000, 4400, 32000]
//        }],
//		chart: {
//			type: 'bar',
//          	height: 300
//        },
//		colors: ['#00bc50', '#FF4560'],
//        plotOptions: {
//			bar: {
//            	horizontal: true,
//            	dataLabels: {
//					position: 'top',
//				},
//			}
//        },
//		dataLabels: {
//			enabled: false,
//		},
//        stroke: {
//			show: true,
//          	width: 1,
//          	colors: ['#fff']
//        },
//        xaxis: {
//          	categories: [
//				dateMonth(1),
//				dateMonth(2),
//				dateMonth(3),
//				dateMonth(4),
//				dateMonth(5),
//				dateMonth(6),
//				dateMonth(7)
//			],
//			labels: {
//				formatter: function(value) {
//					var x = value / 1000;
//					if(x < 1000000)
//						return x + ' RB';
//					else if(x >= 1000000 && x < 1000000000)
//						return x + ' JT';
//					else if(x >= 1000000000)
//						return x + ' M';
//				},
//			}
//        },
//	};
//    var cbBeranda = new ApexCharts(document.querySelector(".cbBeranda"), cbBerandaOpt);
//    cbBeranda.render();
//	
//}

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




//window.onscroll= function() { 
//	// Ambil elemen
//	var splitter = document.querySelector('.splitter');
//
//	// Set posisi
//	var sticky = navbar.offsetTop;
//
//	// Set class sticky kalo offset sama
//	if (window.pageYOffset >= sticky) 
//		navbar.classList.add('sticky');
//	else
//		navbar.classList.remove('sticky');
//	
//	scrollNav();
//};