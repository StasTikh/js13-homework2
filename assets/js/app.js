function deCoder() {
    let vocab = {
        symBol: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
                 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
                 'q', 'r', 's', 't', 'y', 'v', 'w', 'x',
                 'y', 'z', '0', '1', '2', '3', '4', '5',
                 '6', '7', '8', '9'],
        meaNing: ['Alpha', 'Bravo', 'Charlie', 'Delta', 
                  'Echo', 'Foxtrot', 'Golf', 'Hotel',
                  'Kilo', 'Lima', 'Mike', 'November',
                  'Oscar', 'Papa', 'Quebec', 'Romeo',
                  'Sierra', 'Tango', 'Uniform', 'Victor',
                  'Whiskey', 'X-Ray', 'Yankee', 'Zulu',
                  'Zero', 'One', 'Two', 'Three', 'Four',
                  'Five', 'Six', 'Seven', 'Eight', 'Nine' 
                ]
    }
        
    


    let codedPhrase = inputCode.value;
    let finalPhrase = [];


    if (codedPhrase == codedPhrase.toUpperCase()) {
        codedPhrase = codedPhrase.toLowerCase();    
    }
    //console.log(codedPhrase);

    let codeCheck = codedPhrase.split('');

    console.log(codeCheck);

    for(i=0; i<vocab.symBol.length; i++){
        for(j=0; j<codeCheck.length; j++){
            if(codeCheck[j] == vocab.symBol[i]){
                finalPhrase.push(vocab.meaNing[i-2])
                console.log(finalPhrase);
            }
        }
    }



console.log(finalPhrase);
//outputCode.innerHTML = `The frase is ${finalPhrase}`;

}




/*
{symBol: 'a', meaning: 'Alpha'},
        {symBol: 'b', meaning: 'Bravo'},
        {symBol: 'c', meaning: 'Charlie'},
        {symBol: 'd', meaning: 'Delta'},
        {symBol: 'e', meaning: 'Echo'},
        {symBol: 'f', meaning: 'Foxtrot'},
        {symBol: 'g', meaning: 'Golf'},
        {symBol: 'h', meaning: 'Hotel'},
        {symBol: 'i', meaning: 'India'},
        {symBol: 'j', meaning: 'Juliett'},
        {symBol: 'k', meaning: 'Kilo'},
        {symBol: 'l', meaning: 'Lima'},
        {symBol: 'm', meaning: 'Mike'},
        {symBol: 'n', meaning: 'November'},
        {symBol: 'o', meaning: 'Oscar'},
        {symBol: 'p', meaning: 'Papa'},
        {symBol: 'q', meaning: 'Quebec'},
        {symBol: 'r', meaning: 'Romeo'},
        {symBol: 's', meaning: 'Sierra'},
        {symBol: 't', meaning: 'Tango'},
        {symBol: 'u', meaning: 'Uniform'},
        {symBol: 'v', meaning: 'Victor'},
        {symBol: 'w', meaning: 'Whiskey'},
        {symBol: 'x', meaning: 'X-ray'},
        {symBol: 'y', meaning: 'Yankee'},
        {symBol: 'z', meaning: 'Zulu'},
        {symBol: '0', meaning: 'Zero'},
        {symBol: '1', meaning: 'One'},
        {symBol: '2', meaning: 'Two'},
        {symBol: '3', meaning: 'Three'},
        {symBol: '4', meaning: 'Four'},
        {symBol: '5', meaning: 'Five'},
        {symBol: '6', meaning: 'Six'},
        {symBol: '7', meaning: 'Seven'},
        {symBol: '8', meaning: 'Eight'},
        {symBol: '9', meaning: 'Nine'},
        {symBol: '100', meaning: 'hundred'}
        */