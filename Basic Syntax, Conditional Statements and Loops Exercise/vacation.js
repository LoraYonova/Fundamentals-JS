function vacation(groupOfPeople, group, day) {

    let sum = 0;

    if (group == "Students") {
        if (day == "Friday") {
            sum += 8.45;
        
        } else if (day == "Saturday") {
            sum += 9.80;
        
        } else if (day == "Sunday") {
            sum += 10.46;
        }

        sum = sum * groupOfPeople;

        if (groupOfPeople >= 30) {
            sum = sum - (sum * 0.15);
        }
   
    } else if (group == "Business") {

        if (groupOfPeople >= 100) {
            groupOfPeople -= 10;
        }

        if (day == "Friday") {
            sum += 10.90;
        
        } else if (day == "Saturday") {
            sum += 15.60;
        
        } else if (day == "Sunday") {
            sum += 16;
        }

        sum = sum * groupOfPeople;
        
    
    } else if (group == "Regular") {
        if (day == "Friday") {
            sum += 15;
        
        } else if (day == "Saturday") {
            sum += 20;
        
        } else if (day == "Sunday") {
            sum += 22.50;
        }

        sum = sum * groupOfPeople;

        if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            sum = sum - (sum * 0.05);
        }
    }

    console.log(`Total price: ${sum.toFixed(2)}`);

}

vacation(100,
    "Business",
    "Friday"
    );