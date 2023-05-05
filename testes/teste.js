function teste(mn){
    this.mn = mn
}

var mn = {l: 2, i: 4}

var gay = new teste(mn)
aux = gay.mn
console.log(aux.l)
