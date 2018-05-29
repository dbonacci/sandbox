/**
 * http://usejsdoc.org/
 */
var pregledniktreninga = new Vue({
  el: '#pregledniktreninga',
  data: function(){
	  return {
    treninzi: [
        {
          datum: "2018-05-01", 
          vrijeme: "08:00", 
          mjesto: 'Svetice', 
          voditelj: "Viktor Bankin",
          status: "zakljucan"
        },
        {
          datum: "2018-05-02", 
          vrijeme: "16:00", 
          mjesto: 'Svetice', 
          voditelj: "Viktor Bankin",
          status: "objavljen"
        },
        {
          datum: "2018-05-02", 
          vrijeme: "16:00", 
          mjesto: 'Svetice', 
          voditelj: "Viktor Bankin",
          status: "upripremi"
        }
    ]
  }
  }
});
