function dayOfWeek(day) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

   
    let index = day - 1;
    
    if (day > 7) {
        console.log("Invalid day!");
       return;
    }
    console.log(days[index]);

}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);