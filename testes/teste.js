function teste(mn){
    this.mn = mn
    if (mn == true) {
        console.log(mn)
    }
}

isTrue = false
x1 = new teste(isTrue)
x2 = new teste(isTrue)
x3 = new teste(isTrue)
isTrue = true
x1

