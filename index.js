
 let hide=document.querySelector('.dice');
 hide.classList.add('hidden');
 let score0=document.getElementById('score--0');
 score0.textContent='0';
 let score1=document.getElementById('score--1');
 score1.textContent='0';
   let current=0;
   let active=0;
   let current0=document.getElementById('current--0');
   let current1=document.getElementById('current--1');
   let hold=document.getElementById("Hold");
   let totalscore=[0,0];
   let name0=document.getElementById('name--0');
  let start=document.getElementById('start');
     function switchPlayer(){
    current=0;
         document.getElementById(`current--${active}`).textContent=current;
          active= active === 0 ? 1 : 0;
         document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
   };
 let roll=document.querySelector('#roll');
 roll.addEventListener('click',function(){
   
    let randomNumber=Math.trunc(Math.random()*6)+1;
 
    hide.classList.remove('hidden');
    hide.src = `images/dice-${randomNumber}.png`;
    if(randomNumber != 1){
     current+=randomNumber;
     document.getElementById(`current--${active}`).textContent=current;
    
    }else{
      switchPlayer();
    }
 });
  hold.addEventListener('click',function(){
         totalscore[active]+=current;
         document.getElementById(`score--${active}`).textContent=totalscore[active];

         if(totalscore[active]>=20){
          document
        .querySelector(`.player--${active}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${active}`)
        .classList.remove('player--active');
          document.getElementById(`name--${active}`).textContent='winner';
          hide.classList.add('hidden');
          roll.classList.add('hidden');
          hold.classList.add('hidden');
         }
         else{
            switchPlayer();
         }
  });
start.addEventListener('click',function(){
    totalscore=[0,0];
    current=0;
   active=0;
    score0.textContent=0;
    score1.textContent=0;
    current0.textContent=0;
    current1.textContent=0;
    name0.textContent="Total Score";
    name1.textContent="Total score";
    hide.classList.remove('hidden');
 
    roll.classList.remove('hidden');
    hold.classList.remove('hidden');
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document.getElementById('name--0').classList.remove('player-active');
    document.getElementById('name--1').classList.remove('player-active');
    document.getElementById('name--0').classList.add('player-active');
   
});
djndakxgcsdajgjad;
dacxgcdsfzjxcgkl
\adgkdszgajdxgsdkgx;sldjfgkdszx
\gsdjg;lsdkgk;skdzx
