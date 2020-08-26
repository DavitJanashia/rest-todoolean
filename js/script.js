function init(){
  var listApi;
  getAndPrintUpdatedToDoList();
  addButton();
}

$(document).ready(init);

function getAndPrintUpdatedToDoList (){
  $.ajax({
    url: 'http://157.230.17.132:3010/todos',
    method: 'GET',
    success: function (data){
      console.log(data);
      listApi = data;
      printList();
    },
    error: function (err){
      console.log('err', err);
    }

  });
}

function printList(){
  var target = $('#to-do-list');
  for(let i = 0; i < listApi.length; i++){
    target.append(`<li>${listApi[i]['text']}</li>`);
  }
}

function addButton(){
  $('#add-todo').click(function(){
    let myInput = $('#myInput').val();
    $.ajax({
      url: `http://157.230.17.132:3010/todos`,
      method: 'POST',
      data:{
        text: myInput
      },
      success: function (data){
        $('#to-do-list').html('');
        getAndPrintUpdatedToDoList ();
      },
      error: function (err){
        console.log('err', err);
      }
    });
  });

}














































// end
