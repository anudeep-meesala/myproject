function getpop(){
    var country = document.getElementById("country").value;
    var year =  document.getElementById("year").value;
    var url = 'https://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=IN&time=2014'&SEX=2
    console.log(url);
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send();
    request.onload = function () {
        document.getElementById("answer").innerHTML = this.response;
    }
}