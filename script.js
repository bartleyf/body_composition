
let age = document.getElementById('age').value;

//calculate skinfold measurements
function skinfoldSum() {
    let triceps = document.getElementById('triceps').value;
    let chest = document.getElementById('chest').value;
    let subscapular = document.getElementById('subscapular').value;
    let midaxillary = document.getElementById('midaxillary').value;
    let suprailiac = document.getElementById('suprailiac').value;
    let abdominal = document.getElementById('abdominal').value;
    let thigh = document.getElementById('thigh').value;
    let sum  = parseInt(triceps) + 
                parseInt(chest) + 
                parseInt(subscapular) + 
                parseInt(midaxillary) + 
                parseInt(suprailiac) + 
                parseInt(abdominal) + 
                parseInt(thigh)
    return sum
}

//calculate Body Density and Body Fat %
function jp7() {
    sfSum = skinfoldSum()
    bDensity = 1.112 - (0.00043499 * sfSum) + (0.00000055 * (sfSum * sfSum)) - (0.00028826 * age);
    bFatPercent = ((495 / bDensity) - 450);

    console.log('jp7 Calc Fn')
    console.log(sfSum);
    console.log(bDensity);
    console.log(bFatPercent);

    document.getElementById("result").innerHTML = bFatPercent.toFixed(2);
}

