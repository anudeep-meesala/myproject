function getpop(){
    var country = document.getElementById("country").value;
    var year1 =  document.getElementById("year1").value;   
    var url1 = 'https://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS='+country+'&time='+year1+'&SEX=0'
    console.log(url1);
    var request = new XMLHttpRequest();
    request.open('GET', url1, false);
    request.send();
    var yearpop1 = JSON.parse(request.responseText);
    var year2 =  document.getElementById("year2").value;   
    var url2 = 'https://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS='+country+'&time='+year2+'&SEX=0'
    console.log(url2);
    var request = new XMLHttpRequest();
    request.open('GET', url2, false);
    request.send();
    var yearpop2 = JSON.parse(request.responseText);
    var x = [];
    for (var i = 1; i<=yearpop2.length-1;i++)
        x.push([yearpop2[i][2],((yearpop2[i][3]-yearpop1[i][3])/yearpop2[i][3])*100])
    document.getElementById("answer").innerHTML = x
}