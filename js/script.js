function init(){
  var listApi;
  getAndPrintUpdatedToDoList();
  addButton();
  clickDelete()
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
    var myId = listApi[i]['id'];
    target.append(`<li>${listApi[i]['text']}<span data-id='${myId}' class="delete">X</span></li> `);
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

function clickDelete(){
  $(document).on('click', '.delete', deleteFunction);
}



function deleteFunction() {
  var id = $(this).data('id');
  console.log(id);

  // $.ajax({
  //   url: `http://157.230.17.132:3010/todos/${id}`,
  //   method: 'DELETE',
  //   success: function (data){
  //     console.log(data);
  //   },
  //   error: function (err){
  //     console.log('err', err);
  //   }
  //
  // });
}













































// end
