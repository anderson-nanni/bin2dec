function converter () {
    let bin = document.getElementById('bin').value;
    let dec = document.getElementById('dec');
    //let res = document.getElementById('res')
    function bin2dec () {
        //console.log("binario para decimal")
        //if (bin === '') return alert('Please, enter a binary number');
        bin.split('').map(function(item) {
            if (item !== '0' && item !== '1') {
                return alert('Please, enter a binary number');
            } else {
                const decimal = parseInt(bin, 2);
                document.getElementById('dec').value = decimal;
                dec.value = decimal;
                return true;
            }
        });   
    }
    function dec2bin () {
        
        //console.log("decimal para binario")
        var binary = bin;
        var decimal = parseInt( binary, 2 );
        var decimal = Number(dec.value);
        var binary = parseInt( decimal, 10 ).toString( 2 );
        document.getElementById('bin').value = binary;
        
    }

    bin.length == "" ? dec2bin():bin2dec();
    
}