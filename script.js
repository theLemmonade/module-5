function scheduler() {
    $("#currentDay").text( "The date is " + moment().format("MMMM Do YYYY, h:mm:ss a"));
//this save button will record the event input and the time block it was written in to local storage
    $(".saveBtn").on("click", function () {
        var thisBlock = $(this).parent().attr("id");
        var thisInput = $(this).siblings(".description").val();
        localStorage.setItem(thisBlock, thisInput);
    })
//determine Time of Day, attribute corresponding .css class to row
    function classToD() {
        var current = moment().hour();
        $(".time-block").each(function () {
            var other = parseInt($(this).attr("id"));
            console.log(other, current)
            if (other < current) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            } 
            else if (other == current) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    classToD();
//recall event input and time block from local storage
$("#09 .description").val(localStorage.getItem("09"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
}
//3... 2... 1.. liftoff!
scheduler()
