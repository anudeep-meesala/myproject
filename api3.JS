

    var url1 = 'https://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=IN&time=2014&SEX=1'
    var request = new XMLHttpRequest();
    request.open('GET', url1, false);
    request.send();
    var yearpop1 = JSON.parse(request.responseText);
    var url2 = 'https://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=IN&time=2014&SEX=2'
    var request = new XMLHttpRequest();
    request.open('GET', url2, false);
    request.send();
    var yearpop2 = JSON.parse(request.responseText);
    var x = [];
    for (var i = 1; i<=yearpop2.length-1;i++)
        x.push([yearpop2[i][2],yearpop1[i][3],yearpop2[i][3]])
    document.getElementById("answer").innerHTML = x
