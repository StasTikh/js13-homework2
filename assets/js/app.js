function deCoder() {
    let vocab = [
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
    ]


    let codedPhrase = inputCode.value;
    let finalPhrase = [];


    if (codedPhrase == codedPhrase.toUpperCase()) {
        codedPhrase = codedPhrase.toLowerCase();    
    }
    console.log(codedPhrase);

    let codeCheck = codedPhrase.split('');

    // for(i=0; i<codeCheck.length; i++){
    //     for(j=0; j<vocab.length; j++){
    //         if(codeCheck[i] == vocab.symBol[j]){
    //             finalPhrase.push(vocab.meaning[i])
    //         }
    //     }
    // }

    for(i=0; i<vocab.length; i++){
        console.log(vocab.meaning[i])
    }


console.log(codeCheck);

outputCode.innerHTML = `The frase is ${finalPhrase}`;

}