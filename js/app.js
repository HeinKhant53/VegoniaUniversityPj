// Start Jquery Area
$(document).ready(function(){
    // Start Header
        // Start Nav Bar

        $(".navbuttons").click(function(){
            $(this).toggleClass('crossxs');
        });

        //End Nav Bar
    // End Header
});


//End Jquery Area

//Start Javascript Area
    
    // Start Student Counter Section
    var getcountervalues = document.querySelectorAll('.countervalues');
    // console.log(getcountervalues);//NodeList 4

    getcountervalues.forEach(function(getcountervalue){
        // console.log(getcountervalue);
        getcountervalue.textContent = 0;
   
        const updatecounter = function(){
            // console.log('i am working');

            const getcttarget = +getcountervalue.getAttribute('data-target');
            // console.log(getcttarget);
            // console.log(typeof getcttarget,getcttarget);

            const getctcontent = +getcountervalue.innerText;
            // console.log(typeof getctcontetn, getctcontetn);

            const incnumber = getcttarget / 100;
            // console.log(incnumber);

            if(getctcontent < getcttarget){
                getcountervalue.textContent = getctcontent+incnumber;

                setTimeout(updatecounter,50);
            }

        }
        updatecounter();
    });
    // End Student Counter Section

//End Javascript Area
