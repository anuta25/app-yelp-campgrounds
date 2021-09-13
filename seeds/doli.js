const {places, descriptors}=require("./seedHelpers")

function sample(array) {
    return array[Math.floor(Math.random()*array.length)]
}

const puiDoli = ["mini", "sisi", "tigri", "filip", "ferdinand"]

for (let i=0; i<50; i++) {
    console.log(sample(puiDoli))
}