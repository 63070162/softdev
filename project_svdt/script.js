


function cal() {
    var alcohol = 0;
    var weight = document.getElementById('weight').value
    var sum_alcohol = 0;
    var alcohol_liquor = 0;
    var alcohol_beer = 0;
    var alcohol_wine = 0;

    // cal_liquor
    var quantity_liquor = document.getElementById('quantity_liquor').value
    var type_liquor = document.getElementById('type_liquor').value
    var percent_liquor = document.getElementById('percent_liquor').value

    console.log(type_liquor)
    console.log(percent_liquor)

    if (type_liquor == "Flat") {
        var result = parseInt(percent_liquor) * 350 / 100
        console.log(result)
        // document.getElementById('result_liquor').value = result
        sum_alcohol += result * quantity_liquor
        alcohol_liquor = result * quantity_liquor
    }
    if (type_liquor == "Round") {
        var result = parseInt(percent_liquor) * 700 / 100
        console.log(result)
        // document.getElementById('result_liquor').value = result
        sum_alcohol += result * quantity_liquor
        alcohol_liquor = result * quantity_liquor
    }


    // cal_beer

    var quantity_beer = document.getElementById('quantity_beer').value
    var type_beer = document.getElementById('type_beer').value
    var percent_beer = document.getElementById('percent_beer').value

    console.log(type_beer)
    console.log(percent_beer)

    if (type_beer == "Can") {
        var result = parseInt(percent_beer) * 320 / 100
        console.log(result)
        // document.getElementById('result_beer').value = result
        sum_alcohol += result * quantity_beer
        alcohol_beer = result * quantity_beer
    }
    if (type_beer == "Bottle") {
        var result = parseInt(percent_beer) * 620 / 100
        console.log(result)
        // document.getElementById('result_beer').value = result
        sum_alcohol += result * quantity_beer
        alcohol_beer = result * quantity_beer
    }

    // cal_wine

    var quantity_wine = document.getElementById('quantity_wine').value
    var type_wine = document.getElementById('type_wine').value
    var percent_wine = document.getElementById('percent_wine').value

    console.log(type_wine)
    console.log(percent_wine)

    if (type_wine == "Demi") {
        var result = parseInt(percent_wine) * 375 / 100
        console.log(result)
        // document.getElementById('result_wine').value = result
        sum_alcohol += result * quantity_wine
        alcohol_wine = result * quantity_wine
    }
    if (type_wine == "Standard") {
        var result = parseInt(percent_wine) * 750 / 100
        console.log(result)
        // document.getElementById('result_wine').value = result
        sum_alcohol += result * quantity_wine
        alcohol_wine = result * quantity_wine
    }
    if (type_wine == "Magnum") {
        var result = parseInt(percent_wine) * 1500 / 100
        console.log(result)
        // document.getElementById('result_wine').value = result
        sum_alcohol += result * quantity_wine
        alcohol_wine = result * quantity_wine
    }



    if (document.getElementById('male').checked &&  parseInt(weight) > 0) {
        document.getElementById('result_liquor').innerHTML = alcohol_liquor
        document.getElementById('result_beer').innerHTML = alcohol_beer
        document.getElementById('result_wine').innerHTML = alcohol_wine

        // cal_all
        console.log(sum_alcohol)
        console.log(weight)
        alcohol = sum_alcohol / (weight * 0.68 * 10)
        let text_slice = String(alcohol).slice(0,6)
        document.getElementById('ans').innerHTML = text_slice

        console.log(alcohol > 0.3 && alcohol <= 0.5)
        if(alcohol <= 0.3){
            document.getElementById('content_result').style.backgroundColor = 'green'
            document.getElementById('description_result').innerHTML = 'ปริมาณแอลกอฮอล์อยู่ในระดับปกติ'
            document.getElementById('behavior_result').innerHTML = 'มีอาการสนุกสนาน ร่าเริงกว่าปกติ การยับยั้งชั่งใจลดลง'
        }
        else if(alcohol > 0.3 && alcohol <= 0.5){
            document.getElementById('content_result').style.backgroundColor = 'tan'
            document.getElementById('description_result').innerHTML = 'ปริมาณแอลกอฮอล์อยู่ในระดับปานกลาง'
            document.getElementById('behavior_result').innerHTML = 'การมองเห็นลดลง ความสามารถในการควบคุมร่างกายช้าลง'
        }
        else if(alcohol > 0.5 && alcohol <= 1){
            document.getElementById('content_result').style.backgroundColor = 'orange'
            document.getElementById('description_result').innerHTML = 'ปริมาณแอลกอฮอล์อยู่ในระดับสูง'
            document.getElementById('behavior_result').innerHTML = 'คลื่นไส้ อาเจียน เดินเซ พูดไม่รู้เรื่อง การตอบสนองและตัดสินใจช้าลง'
        }
        else if(alcohol > 1){
            document.getElementById('content_result').style.backgroundColor = 'maroon'
            document.getElementById('description_result').innerHTML = 'ปริมาณแอลกอฮอล์อยู่ในระดับเสี่ยง'
            document.getElementById('behavior_result').innerHTML = 'สูญเสียความจำบางส่วน อารมณ์ฉุนเฉียวง่าย มึนงง ควบคุมสติไม่ได้'
        }


    }
    else if (document.getElementById('female').checked &&  parseInt(weight) > 0) {
        document.getElementById('result_liquor').innerHTML = alcohol_liquor
        document.getElementById('result_beer').innerHTML = alcohol_beer
        document.getElementById('result_wine').innerHTML = alcohol_wine

        // cal_all
        console.log(sum_alcohol)
        console.log(weight)
        alcohol = sum_alcohol / (weight * 0.55 * 10)
        let text_slice = String(alcohol).slice(0,6)
        document.getElementById('ans').innerHTML = text_slice
    }
    else {
        alert('please select your sex or fill in your weight')
    }
}
function reset_default(){
    // sex
    var sex = document.getElementsByName("sex");
    for(var i=0;i<sex.length;i++)
        sex[i].checked = false;

    // weight
    document.getElementById('weight').value = ''

    // liquor
    document.getElementById('quantity_liquor').value = '1'
    document.getElementById('type_liquor').value = 'Flat'
    document.getElementById('percent_liquor').value = '35'

    // beer
    document.getElementById('quantity_beer').value = '1'
    document.getElementById('type_beer').value = 'Can'
    document.getElementById('percent_beer').value = '5'

    // wine
    document.getElementById('quantity_wine').value = '1'
    document.getElementById('type_wine').value = 'Demi'
    document.getElementById('percent_wine').value = '10'

}