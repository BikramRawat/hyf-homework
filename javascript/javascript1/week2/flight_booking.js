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
    }else {
        return `Other ${firstname} ${surname}`;
    }
}
    const fullname1=getFullname('','');
    console.log(fullname1);

    const fullname2=getFullname('Bikram','Rawat',true, 'male');
    console.log(fullname2);

    const fullname3=getFullname('Bhabana','Thapa',true,'female');
    console.log(fullname3);

    const fullname4=getFullname('Emile','Dragos',false);
    console.log(fullname4);

    const fullname5=getFullname('Micheal','Jackson');
    console.log(fullname5);

    const fullname6=getFullname('Karle','Siminov',true);
    console.log(fullname6);
