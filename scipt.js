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

smp.addEventListener ('click', function() {
		const tampil = document.querySelector('.progsmp');
		tampil.classList.toggle('tampil');
	})

const sma = document.querySelector('.sma');

sma.addEventListener ('click', function() {
		const tampil = document.querySelector('.progsma');
		tampil.classList.toggle('tampil');
	})
