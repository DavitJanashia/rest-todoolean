function init(){
  getAndPrintUpdatedToDoList();
}

$(document).ready(init);

function getAndPrintUpdatedToDoList (){
  $.ajax({
    url: 'http://157.230.17.132:3010/todos',
    method: 'GET',
    success: function (data){
      console.log(data);
      var listApi = data;

      function printList(){
        //get list data
        // append on ul
        var target = $('#to-do-list');
        for(let i = 0; i < listApi.length; i++){
          target.append(`<li>${listApi[i]['text']}</li>`);
        }
      }
      printList();
    },
    error: function (err){
      console.log('err', err);
    }

  });
}













































// end
