/**
 * http://usejsdoc.org/
 */
var pregledniktreninga = new Vue({
  el: '#pregledniktreninga',
  data: {
    treninzi: [
        {
          id: 1, 
          datum: "2018-05-01", 
          vrijeme: "08:00", 
          mjesto: 'Svetice', 
          voditelj: "Viktor Bankin"
        },
        {
          id: 2, 
          datum: "2018-05-02", 
          vrijeme: "16:00", 
          mjesto: 'Svetice', 
          voditelj: "Viktor Bankin"
        }
    ]
  }
});
