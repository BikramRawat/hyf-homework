function getFullname(firstname,surname,useFormalName,gender){
    if(firstname==='' || surname===''){
        console.log('Enter the valid name ?');
  // prompt('enter the valid firstname and surname');
    }
    if(useFormalName){
        return `${firstname} ${surname}`;
    }

    if(gender==='male'){
        return `Lord ${firstname} ${surname}`;
    }else if(gender==='female'){
        return `Lady ${firstname} ${surname}`;
    }
return `Other ${firstname} ${surname}`;
const fullname1=getFullname('','');
const fullname2=getFullname('Bikram','Rawat',true, 'male');
const fullname3=getFullname('Bhabana','Thapa',true,'female');
const fullname4=getFullname('Emile','Dragos',false);
const fullname5=getFullname('Micheal','Jackson');
const fullname6=getFullname('Karle','Siminov',true);
console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
console.log(fullname4);
console.log(fullname5);
console.log(fullname6);
