document.getElementById("app").innerHTML = `

<h1>🛒 Jom Beli-Belah!</h1>

<h2>Topik Wang Tahun 1</h2>

<p>👩‍🏫 Disediakan oleh <b>Cikgu Zai</b></p>

<br>

<h2 id="barang">🍎</h2>

<h3>Harga: RM<span id="harga">2</span></h3>

<h3>Jumlah Dipilih</h3>

<h2 id="jumlah">RM0</h2>

<div class="money-grid">

<div class="money-card" onclick="tambah(1)">💵<br>RM1</div>

<div class="money-card" onclick="tambah(2)">🪙<br>RM2</div>

<div class="money-card" onclick="tambah(5)">💷<br>RM5</div>

<div class="money-card" onclick="tambah(10)">💴<br>RM10</div>

</div>

<br>

<button onclick="semak()">Semak</button>

<button onclick="reset()">Padam</button>

<h2 id="mesej"></h2>

<h3 class="score">
⭐ Markah :
<span id="markah">0</span>
</h3>

<p class="footer">
BBM Interaktif Cikgu Zai
</p>

`;

const data=[
{barang:"🍎",harga:2},
{barang:"🍞",harga:3},
{barang:"🥛",harga:4},
{barang:"🍌",harga:1},
{barang:"🍪",harga:5}
];

let nombor=0;
let jumlah=0;
let markah=0;

papar();

function papar(){

document.getElementById("barang").innerHTML=data[nombor].barang;
document.getElementById("harga").innerHTML=data[nombor].harga;
document.getElementById("jumlah").innerHTML="RM0";
document.getElementById("mesej").innerHTML="";

jumlah=0;

}

function tambah(x){

jumlah+=x;

document.getElementById("jumlah").innerHTML="RM"+jumlah;

}

function reset(){

jumlah=0;

document.getElementById("jumlah").innerHTML="RM0";

}

function semak(){

if(jumlah==data[nombor].harga){

markah++;

document.getElementById("markah").innerHTML=markah;

document.getElementById("mesej").innerHTML="🎉 Betul!";

setTimeout(()=>{

nombor++;

if(nombor>=data.length){

alert("Tahniah! Markah anda "+markah+"/"+data.length);

location.reload();

}else{

papar();

}

},1000);

}else{

document.getElementById("mesej").innerHTML="❌ Cuba Lagi";

}

}
