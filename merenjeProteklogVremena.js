console.log("Vreme za ispis 1000 karaktera");
console.time("VremeIspisa1000");
for(let i=0;i<1000;i++){
  console.log("X");
  console.count("X");
}
console.timeEnd("VremeIspisa1000");