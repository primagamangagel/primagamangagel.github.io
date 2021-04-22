const sd = document.querySelector('.sd');

sd.addEventListener('mouseenter', function() {
	const hover = document.querySelector('.sd');
	hover.classList.toggle('hover');
})

sd.addEventListener('mouseleave', function() {
	const hover = document.querySelector('.sd');
	hover.classList.toggle('hover');
})

sd.addEventListener ('click', function() {
		const tampil = document.querySelector('.progsd');
		tampil.classList.toggle('tampil');
		const tampilSd = document.querySelector('.enam');
		tampilSd.classList.toggle('tampilSd');
		tampilSd.style.backgroundColor = 'lightblue';
	})

const close = document.getElementsByClassName('close')[0];

close.addEventListener('mouseenter', function() {
	const hover = document.getElementsByClassName('close')[0];
	hover.classList.toggle('hoverClose');
})

close.addEventListener('mouseleave', function() {
	const hover = document.getElementsByClassName('close')[0];
	hover.classList.toggle('hoverClose');
})

close.addEventListener('click', function() {
		const tampil = document.querySelector('.progsd');
		tampil.classList.toggle('tampil');
		const tampilSd = document.querySelector('.fasPel');
		tampilSd.classList.toggle('tampilSd');
})

const next = document.querySelector('.next');

next.addEventListener('mouseenter', function() {
	const hover = document.getElementsByClassName('next')[0];
	hover.classList.toggle('hoverNav');
})

next.addEventListener('mouseleave', function() {
	const hover = document.getElementsByClassName('next')[0];
	hover.classList.toggle('hoverNav');
})

next.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.enam');
		tampilEnam.classList.toggle('tampilSd');
		const tampilSd = document.querySelector('.lima');
		tampilSd.classList.toggle('tampilSd');
		tampilSd.style.backgroundColor = 'salmon';
	})

const prev = document.getElementsByClassName('prev')[0];

prev.addEventListener('mouseenter', function() {
		const hover = document.getElementsByClassName('prev')[0];
		hover.classList.toggle('hoverNav');
	})	
	
prev.addEventListener('mouseleave', function() {
		const hover = document.getElementsByClassName('prev')[0];
		hover.classList.toggle('hoverNav');
})	
	
prev.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.enam');
		tampilEnam.classList.toggle('tampilSd');
		const tampilSd = document.querySelector('.empat');
		tampilSd.classList.toggle('tampilSd');
		tampilSd.style.backgroundColor = 'orange';	
})		

// AKHIR KELAS 6 SD

// AWAL KELAS 5 SD

const closeSatu = document.getElementsByClassName('close')[1];

closeSatu.addEventListener('mouseenter', function() {
	const hoverSatu = document.getElementsByClassName('close')[1];
	hoverSatu.classList.toggle('hoverClose');
})

closeSatu.addEventListener('mouseleave', function() {
	const hoverSatu = document.getElementsByClassName('close')[1];
	hoverSatu.classList.toggle('hoverClose');
})

closeSatu.addEventListener('click', function() {
		const tampil = document.querySelector('.progsd');
		tampil.classList.toggle('tampil');
		const tampilSd = document.querySelector('.lima');
		tampilSd.classList.toggle('tampilSd');
})

const nextSatu = document.getElementsByClassName('next')[1];

nextSatu.addEventListener('mouseenter', function() {
	const hover = document.getElementsByClassName('next')[1];
	hover.classList.toggle('hoverNav');
})

nextSatu.addEventListener('mouseleave', function() {
	const hover = document.getElementsByClassName('next')[1];
	hover.classList.toggle('hoverNav');
})

nextSatu.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.lima');
		tampilEnam.classList.toggle('tampilSd');
		const tampilSd = document.querySelector('.empat');
		tampilSd.classList.toggle('tampilSd');
		tampilSd.style.backgroundColor = 'orange';
	})

const prevSatu = document.getElementsByClassName('prev')[1];

prevSatu.addEventListener('mouseenter', function() {
	const hover = document.getElementsByClassName('prev')[1];
	hover.classList.toggle('hoverNav');
})

prevSatu.addEventListener('mouseleave', function() {
	const hover = document.getElementsByClassName('prev')[1];
	hover.classList.toggle('hoverNav');
})

prevSatu.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.lima');
		tampilEnam.classList.toggle('tampilSd');
		const tampilSd = document.querySelector('.enam');
		tampilSd.classList.toggle('tampilSd');
	})

// AKHIR KELAS 5 SD

// AWAL KELAS 4 SD

const closeDua = document.getElementsByClassName('close')[2];

closeDua.addEventListener('mouseenter', function() {
	const hoverDua = document.getElementsByClassName('close')[2];
	hoverDua.classList.toggle('hoverClose');
})

closeDua.addEventListener('mouseleave', function() {
	const hoverDua = document.getElementsByClassName('close')[2];
	hoverDua.classList.toggle('hoverClose');
})

closeDua.addEventListener('click', function() {
		const tampil = document.querySelector('.progsd');
		tampil.classList.toggle('tampil');
		const tampilSd = document.querySelector('.empat');
		tampilSd.classList.toggle('tampilSd');
})

const nextDua = document.getElementsByClassName('next')[2];

nextDua.addEventListener('mouseenter', function() {
	const hover = document.getElementsByClassName('next')[2];
	hover.classList.toggle('hoverNav');
})

nextDua.addEventListener('mouseleave', function() {
	const hover = document.getElementsByClassName('next')[2];
	hover.classList.toggle('hoverNav');
})

nextDua.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.empat');
		tampilEnam.classList.toggle('tampilSd');
		const tampilSd = document.querySelector('.enam');
		tampilSd.classList.toggle('tampilSd');
	})

const prevDua = document.getElementsByClassName('prev')[2];

prevDua.addEventListener('mouseenter', function() {
	const hover = document.getElementsByClassName('prev')[2];
	hover.classList.toggle('hoverNav');
})

prevDua.addEventListener('mouseleave', function() {
	const hover = document.getElementsByClassName('prev')[2];
	hover.classList.toggle('hoverNav');
})

prevDua.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.empat');
		tampilEnam.classList.toggle('tampilSd');
		const tampilSd = document.querySelector('.lima');
		tampilSd.classList.toggle('tampilSd');
		tampilSd.style.backgroundColor = 'salmon';
	})

// AKHIR KELAS 4 SD

// AWAL KELAS 9 SMP

const smp = document.querySelector('.smp');

smp.addEventListener('mouseenter', function() {
	const hoverTiga = document.querySelector('.smp');
	hoverTiga.classList.toggle('hover');
})

smp.addEventListener('mouseleave', function() {
	const hoverTiga = document.querySelector('.smp');
	hoverTiga.classList.toggle('hover');
})

smp.addEventListener ('click', function() {
		const tampil = document.querySelector('.progsmp');
		tampil.classList.toggle('tampil');
		const tampilSmp = document.querySelector('.sembilan');
		tampilSmp.classList.toggle('tampilSmp');
		tampilSmp.style.backgroundColor = 'lightblue';
	})

const closeTiga = document.getElementsByClassName('close')[3];

closeTiga.addEventListener('mouseenter', function(e) {
	e.target.classList.toggle('hoverClose');
})

closeTiga.addEventListener('mouseleave', function(e) {
	e.target.classList.toggle('hoverClose');
})

closeTiga.addEventListener('click', function() {
		const tampil = document.querySelector('.progsmp');
		tampil.classList.toggle('tampil');
		const tampilSmp = document.querySelector('.sembilan');
		tampilSmp.classList.toggle('tampilSmp');
})

const nextTiga = document.getElementsByClassName('next')[3];

nextTiga.addEventListener('mouseenter', function(e) {
	e.target.classList.toggle('hoverNav');
})

nextTiga.addEventListener('mouseleave', function(e) {
	e.target.classList.toggle('hoverNav');
})

nextTiga.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.sembilan');
		tampilEnam.classList.toggle('tampilSmp');
		const tampilSmp = document.querySelector('.delapan');
		tampilSmp.classList.toggle('tampilSmp');
		tampilSmp.style.backgroundColor = 'salmon';
	})

const prevTiga = document.getElementsByClassName('prev')[3];

prevTiga.addEventListener('mouseenter', function(e) {
		e.target.classList.toggle('hoverNav');
	})	
	
prevTiga.addEventListener('mouseleave', function(e) {
		e.target.classList.toggle('hoverNav');
})	
	
prevTiga.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.sembilan');
		tampilEnam.classList.toggle('tampilSmp');
		const tampilSmp = document.querySelector('.tujuh');
		tampilSmp.classList.toggle('tampilSmp');
		tampilSmp.style.backgroundColor = 'orange';	
})		

// AKHIR 9 SMP

// AWAL KELAS 8 SMP

const closeEmpat = document.getElementsByClassName('close')[4];

closeEmpat.addEventListener('mouseenter', function(e) {
	e.target.classList.toggle('hoverClose');
})

closeEmpat.addEventListener('mouseleave', function(e) {
	e.target.classList.toggle('hoverClose');
})

closeEmpat.addEventListener('click', function() {
		const tampil = document.querySelector('.progsmp');
		tampil.classList.toggle('tampil');
		const tampilSmp = document.querySelector('.delapan');
		tampilSmp.classList.toggle('tampilSmp');
})

const nextEmpat = document.getElementsByClassName('next')[4];

nextEmpat.addEventListener('mouseenter', function(e) {
	e.target.classList.toggle('hoverNav');
})

nextEmpat.addEventListener('mouseleave', function(e) {
	e.target.classList.toggle('hoverNav');
})

nextEmpat.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.delapan');
		tampilEnam.classList.toggle('tampilSmp');
		const tampilSmp = document.querySelector('.tujuh');
		tampilSmp.classList.toggle('tampilSmp');
		tampilSmp.style.backgroundColor = 'orange';
	})

const prevEmpat = document.getElementsByClassName('prev')[4];

prevEmpat.addEventListener('mouseenter', function(e) {
		e.target.classList.toggle('hoverNav');
	})	
	
prevEmpat.addEventListener('mouseleave', function(e) {
		e.target.classList.toggle('hoverNav');
})	
	
prevEmpat.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.delapan');
		tampilEnam.classList.toggle('tampilSmp');
		const tampilSmp = document.querySelector('.sembilan');
		tampilSmp.classList.toggle('tampilSmp');
		tampilSmp.style.backgroundColor = 'lightblue';	
})		

// AKHIR KELAS 8 SMP

// AWAL KELAS 7 SMP

const closeLima = document.getElementsByClassName('close')[5];

closeLima.addEventListener('mouseenter', function(e) {
	e.target.classList.toggle('hoverClose');
})

closeLima.addEventListener('mouseleave', function(e) {
	e.target.classList.toggle('hoverClose');
})

closeLima.addEventListener('click', function() {
		const tampil = document.querySelector('.progsmp');
		tampil.classList.toggle('tampil');
		const tampilSmp = document.querySelector('.tujuh');
		tampilSmp.classList.toggle('tampilSmp');
})

const nextLima = document.getElementsByClassName('next')[5];

nextLima.addEventListener('mouseenter', function(e) {
	e.target.classList.toggle('hoverNav');
})

nextLima.addEventListener('mouseleave', function(e) {
	e.target.classList.toggle('hoverNav');
})

nextLima.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.tujuh');
		tampilEnam.classList.toggle('tampilSmp');
		const tampilSmp = document.querySelector('.sembilan');
		tampilSmp.classList.toggle('tampilSmp');
		tampilSmp.style.backgroundColor = 'lightblue';
	})

const prevLima = document.getElementsByClassName('prev')[5];

prevLima.addEventListener('mouseenter', function(e) {
		e.target.classList.toggle('hoverNav');
	})	
	
prevLima.addEventListener('mouseleave', function(e) {
		e.target.classList.toggle('hoverNav');
})	
	
prevLima.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.tujuh');
		tampilEnam.classList.toggle('tampilSmp');
		const tampilSmp = document.querySelector('.delapan');
		tampilSmp.classList.toggle('tampilSmp');
		tampilSmp.style.backgroundColor = 'salmon';	
})		

// AKHIR KELAS 7 SMP
// ===========================================================
// AWAL JENJANG SMA

const sma = document.querySelector('.sma');

sma.addEventListener ('mouseenter', function(e) {
	e.target.classList.toggle('hover');
	const jurusan = document.querySelectorAll('.jurusan');
	jurusan.forEach(function(pil){
		pil.classList.toggle('tampilJurusan');
		pil.classList.toggle('ips');
		pil.classList.toggle('ipa');
	})
})

sma.addEventListener ('mouseleave', function(e) {
	e.target.classList.toggle('hover');
	const jurusan = document.querySelectorAll('.jurusan');
	jurusan.forEach(function(pil){
		pil.classList.toggle('tampilJurusan');
		pil.classList.toggle('ipa');
		pil.classList.toggle('ips');
	})
})

const ipa = document.querySelector('.ipa');

ipa.addEventListener('mouseenter', function(e) {
	e.target.classList.toggle('hoverJur');
})

ipa.addEventListener('mouseleave', function(e) {
	e.target.classList.toggle('hoverJur');
})

ipa.addEventListener ('click', function() {
		const tampil = document.querySelector('.progsma');
		tampil.classList.toggle('tampil');
		const tampilipa = document.querySelector('.tigaIpa');
		tampilipa.classList.toggle('tampilSma');
		tampilipa.style.backgroundColor = 'lightblue';
	})


const ips = document.querySelector('.ips');

ips.addEventListener('mouseenter', function(e) {
	e.target.classList.toggle('hoverJur');
})

ips.addEventListener('mouseleave', function(e) {
	e.target.classList.toggle('hoverJur');
})

// AWAL 12 IPA

const closeEnam = document.getElementsByClassName('close')[6];

closeEnam.addEventListener('mouseenter', function(e) {
	e.target.classList.toggle('hoverClose');
})

closeEnam.addEventListener('mouseleave', function(e) {
	e.target.classList.toggle('hoverClose');
})

closeEnam.addEventListener('click', function() {
		const tampil = document.querySelector('.progsma');
		tampil.classList.toggle('tampil');
		const tampilSma = document.querySelector('.tigaIpa');
		tampilSma.classList.toggle('tampilSma');
})

const nextEnam = document.getElementsByClassName('next')[6];

nextEnam.addEventListener('mouseenter', function(e) {
	e.target.classList.toggle('hoverNav');
})

nextEnam.addEventListener('mouseleave', function(e) {
	e.target.classList.toggle('hoverNav');
})

nextEnam.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.tigaIpa');
		tampilEnam.classList.toggle('tampilSma');
		const tampilSma = document.querySelector('.duaIpa');
		tampilSma.classList.toggle('tampilSma');
		tampilSma.style.backgroundColor = 'salmon';
	})

const prevEnam = document.getElementsByClassName('prev')[6];

prevEnam.addEventListener('mouseenter', function(e) {
		e.target.classList.toggle('hoverNav');
	})	
	
prevEnam.addEventListener('mouseleave', function(e) {
		e.target.classList.toggle('hoverNav');
})	
	
prevEnam.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.tigaIpa');
		tampilEnam.classList.toggle('tampilSma');
		const tampilSma = document.querySelector('.satuIpa');
		tampilSma.classList.toggle('tampilSma');
		tampilSma.style.backgroundColor = 'orange';	
})		

// AKHIR 12 IPA

// AWAL KELAS 11 IPA

const closeTujuh = document.getElementsByClassName('close')[7];

closeTujuh.addEventListener('mouseenter', function(e) {
	e.target.classList.toggle('hoverClose');
})

closeTujuh.addEventListener('mouseleave', function(e) {
	e.target.classList.toggle('hoverClose');
})

closeTujuh.addEventListener('click', function() {
		const tampil = document.querySelector('.progsma');
		tampil.classList.toggle('tampil');
		const tampilSma = document.querySelector('.duaIpa');
		tampilSma.classList.toggle('tampilSma');
})

const nextTujuh = document.getElementsByClassName('next')[7];

nextTujuh.addEventListener('mouseenter', function(e) {
	e.target.classList.toggle('hoverNav');
})

nextTujuh.addEventListener('mouseleave', function(e) {
	e.target.classList.toggle('hoverNav');
})

nextTujuh.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.duaIpa');
		tampilEnam.classList.toggle('tampilSma');
		const tampilSma = document.querySelector('.satuIpa');
		tampilSma.classList.toggle('tampilSma');
		tampilSma.style.backgroundColor = 'orange';
	})

const prevTujuh = document.getElementsByClassName('prev')[7];

prevTujuh.addEventListener('mouseenter', function(e) {
		e.target.classList.toggle('hoverNav');
	})	
	
prevTujuh.addEventListener('mouseleave', function(e) {
		e.target.classList.toggle('hoverNav');
})	
	
prevTujuh.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.duaIpa');
		tampilEnam.classList.toggle('tampilSma');
		const tampilSma = document.querySelector('.tigaIpa');
		tampilSma.classList.toggle('tampilSma');
		tampilSma.style.backgroundColor = 'lightblue';	
})	

// AKHIR KELAS 11 IPA

// AWAL KELAS 10 IPA

const closeDelapan = document.getElementsByClassName('close')[8];

closeDelapan.addEventListener('mouseenter', function(e) {
	e.target.classList.toggle('hoverClose');
})

closeDelapan.addEventListener('mouseleave', function(e) {
	e.target.classList.toggle('hoverClose');
})

closeDelapan.addEventListener('click', function() {
		const tampil = document.querySelector('.progsma');
		tampil.classList.toggle('tampil');
		const tampilSma = document.querySelector('.satuIpa');
		tampilSma.classList.toggle('tampilSma');
})

const nextDelapan = document.getElementsByClassName('next')[8];

nextDelapan.addEventListener('mouseenter', function(e) {
	e.target.classList.toggle('hoverNav');
})

nextDelapan.addEventListener('mouseleave', function(e) {
	e.target.classList.toggle('hoverNav');
})

nextDelapan.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.satuIpa');
		tampilEnam.classList.toggle('tampilSma');
		const tampilSma = document.querySelector('.tigaIpa');
		tampilSma.classList.toggle('tampilSma');
		tampilSma.style.backgroundColor = 'lighblue';
	})

const prevDelapan = document.getElementsByClassName('prev')[8];

prevDelapan.addEventListener('mouseenter', function(e) {
		e.target.classList.toggle('hoverNav');
	})	
	
prevDelapan.addEventListener('mouseleave', function(e) {
		e.target.classList.toggle('hoverNav');
})	
	
prevDelapan.addEventListener ('click', function() {
		const tampilEnam = document.querySelector('.satuIpa');
		tampilEnam.classList.toggle('tampilSma');
		const tampilSma = document.querySelector('.duaIpa');
		tampilSma.classList.toggle('tampilSma');
		tampilSma.style.backgroundColor = 'salmon';	
})	

// AKHIR KELAS 10 IPA

// AKHIR JENJANG SMA