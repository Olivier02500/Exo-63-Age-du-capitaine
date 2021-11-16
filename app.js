

for ( let i = 0; i < 70 ; i++) {
    if ( i <= 18  ) {
        document.getElementById('monDiv').innerHTML+="le capitaine a  "+i+" ans, le capitaine est jeune<br>";
        }
    else if(( i > 18 )&& i <= 50 ) {
        document.getElementById('monDiv').innerHTML+="le capitaine a  "+i+" ans, le capitaine n'est pas très vieux<br>";
    }
    else {
        document.getElementById('monDiv').innerHTML+="le capitaine a  "+i+" ans, Le capitaine est vieux<br>";
    }

}